import Header from '@/components/header';
import { Metadata } from 'next';
import { TagCount } from '@/types/sanity';
import TagButton from '@/components/tagButton';
import { getAllTags } from '@/lib/sanity';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'All Tags',
};

const AllTagsPage = async () => {
  const tags: TagCount[] = await getAllTags();

  return (
    <>
      <Header title={'All Tags'} />
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <TagButton key={tag?._id} name={tag?.name} slug={tag?.slug} count={tag?.postCount} />
          ))}
      </div>
    </>
  );
};

export default AllTagsPage;
