import type { InferGetStaticPropsType } from 'next';
import  Layout  from '~/components/ui/Layout';
import { ContentPopover } from '~/components/guestbook';
import { fetchGuestbookEntries } from '~/lib/queries';
import { GuestbookContent } from '~/components/guestbook';
import Title from '~/components/ui/typography/Title'

export const getStaticProps = async () => {
  const data = await fetchGuestbookEntries();

  const entries = data.map((entry) => ({
    id: entry.id,
    body: entry.body,
    createdBy: entry.createdBy.toString(),
    createdAt: entry.createdAt.toString(),

  }))
  return {
    props: { entries, revalidate: 60 } //revalidate every minute
  };
};

const GuestBookPage = ({
  entries
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Title>
        Guestbook
      </Title>
      <div>
        <p className="mb-4 max-w-lg text-gray-600 dark:text-gray-400">
          Thank you for visiting. Say hi!
        </p>
      </div>
      <ContentPopover />
      <GuestbookContent data={entries} />
    </Layout>
  )
};

export default GuestBookPage;
