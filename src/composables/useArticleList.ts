// composables/useArticleList.ts
import { ref } from 'vue'
import { fetchArticles, type Article } from '@/services/article.service'
import { useInfiniteScroll } from './useInfiniteScroll'

export function useArticleList() {
  const articles = ref<Article[]>([])
  const page = ref(1)
  const perPage = 10

  async function loadMore() {
    const res = await fetchArticles({ page: page.value, perPage })
    articles.value.push(...res.data)
    page.value++
    isFetching.value = false
  }

  const { isFetching, sentinel } = useInfiniteScroll(loadMore)

  return {
    articles,
    isFetching,
    sentinel,
  }
}
