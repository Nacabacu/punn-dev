import Header from '@/components/header';
import TagButton from '@/components/tagButton';
import { getAllTags } from '@/lib/sanity';
import { TagCount } from '@/types/sanity';
import { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'All Tags',
};

const AllTagsPage = async () => {
  const tags: TagCount[] = await getAllTags();

  return (
    <>
      <Header title={'All Tags'} />
      <div className='flex flex-wrap gap-y-2 justify-center'>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <TagButton className='inline-block text-nowrap' key={tag?._id} name={tag?.name} slug={tag?.slug} count={tag?.postCount} />
          ))}
      </div>
    </>
  );
};

export default AllTagsPage;
