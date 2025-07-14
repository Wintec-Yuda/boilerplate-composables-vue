// services/user.service.ts

import { faker } from "@faker-js/faker";

type User = {
	id: number;
	name: string;
	email: string;
	role: "admin" | "user" | "guest";
	status: "active" | "inactive";
	createdAt: string;
};

const users: User[] = Array.from({ length: 42 }, (_, i) => ({
	id: i + 1,
	name: faker.person.fullName(),
	email: faker.internet.email(),
	role: faker.helpers.arrayElement(["admin", "user", "guest"]),
	status: faker.helpers.arrayElement(["active", "inactive"]),
	createdAt: faker.date.past().toISOString().split("T")[0],
}));

export type { User };

export function fetchUsers({
	page = 1,
	perPage = 10,
	search = "",
	sortBy = "name",
	sortDir = "asc",
	filters = {},
}: {
	page?: number;
	perPage?: number;
	search?: string;
	sortBy?: keyof User;
	sortDir?: "asc" | "desc";
	filters?: Partial<Pick<User, "role" | "status">>;
}) {
	let filtered = [...users];

	// 🔍 Search
	if (search) {
		const keyword = search.toLowerCase();
		filtered = filtered.filter(
			(u) =>
				u.name.toLowerCase().includes(keyword) ||
				u.email.toLowerCase().includes(keyword)
		);
	}

	// 🧹 Filters
	if (filters.role) filtered = filtered.filter((u) => u.role === filters.role);
	if (filters.status)
		filtered = filtered.filter((u) => u.status === filters.status);

	// 🔃 Sort
	if (!sortBy || !(sortBy in users[0])) {
		sortBy = "name";
	}

	filtered.sort((a, b) => {
		const aVal = a[sortBy];
		const bVal = b[sortBy];
		const dir = sortDir === "asc" ? 1 : -1;
		return String(aVal).localeCompare(String(bVal)) * dir;
	});

	// 📄 Pagination
	const total = filtered.length;
	const start = (page - 1) * perPage;
	const paged = filtered.slice(start, start + perPage);

	return Promise.resolve({
		data: paged,
		total,
		page,
		perPage,
	});
}
