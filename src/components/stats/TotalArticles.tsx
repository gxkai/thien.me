import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'

export function TotalArticles() {
  const { data: totalArticles } = useSWR<any>(
    '/api/stats/total-articles',
    fetcher
  )
  return (
    <div className="h-32 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center col-span-2">
      <p className="text-base m-0">articles</p>
      <h2 className="text-3xl font-bold m-0">
        {totalArticles ? totalArticles.totalArticles : '--'}
      </h2>
    </div>
  )
}