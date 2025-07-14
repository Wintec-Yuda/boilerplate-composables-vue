// composables/useTable.ts
import { ref, watch } from "vue";
import { usePagination } from "./table/usePagination";
import { useSearch } from "./table/useSearch";
import { useSorting } from "./table/useSorting";
import { useFilter } from "./table/useFilter";

type Params = {
	page?: number;
	perPage?: number;
	search?: string;
	sortBy?: string;
	sortDir?: "asc" | "desc";
	filters?: Record<string, string>;
};

type FetchFn<T> = (params: Params) => Promise<{
	data: T[];
	total: number;
	page: number;
	perPage: number;
}>;

export function useTable<T>(fetchFn: FetchFn<T>) {
	const isLoading = ref(false);
	const data = ref<T[]>([]);

	const { page, perPage, total, totalPages, setPage } = usePagination();
	const { search, setSearch } = useSearch(() => {
		page.value = 1;
		fetch();
	});
	const { sortBy, sortDir, setSort } = useSorting();
	const { filters, setFilter } = useFilter();

	async function fetch() {
		isLoading.value = true;

		const result = await fetchFn({
			page: page.value,
			perPage: perPage.value,
			search: search.value,
			sortBy: sortBy.value,
			sortDir: sortDir.value,
			filters,
		});

		data.value = result.data;
		total.value = result.total;
		isLoading.value = false;
	}

	watch(
		[page, perPage, search, sortBy, sortDir, () => ({ ...filters })],
		fetch,
		{ deep: true, immediate: true }
	);

	return {
		data,
		isLoading,
		page,
		perPage,
		total,
		totalPages,
		search,
		sortBy,
		sortDir,
		filters,

		setPage,
		setSearch,
		setSort,
		setFilter,
		fetch,
	};
}
