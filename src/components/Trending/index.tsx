import PostCard from '@/components/PostCard';

export default function Index() {
  return (
    <>
      <h2 className="mx-28 mb-6">Trending Posts</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:grid-row-4 md:grid-rows-3 gap-8 mx-28">
        <div className="sm:row-start-1 sm:row-end-2 sm:col-span-1 md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2 ">
          <PostCard
            postId={'1'}
            title={'migrating to linear 101'}
            preview={
              'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here is how to get started with it for good'
            }
            tags={['Design', 'research']}
            date={new Date()}
            column
          />
        </div>
        <div className="sm:row-start-2 sm:col-start-1 sm:row-span-1 sm:col-span-1 md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3">
          <PostCard
            postId={'1'}
            title={'migrating to linear 101'}
            preview={
              'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here is how to get started with it for good'
            }
            tags={['Design', 'research']}
            date={new Date()}
          />
        </div>
        <div className="sm:row-start-3 sm:col-start-1 sm:row-span-1 sm:col-span-1  md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3">
          <PostCard
            postId={'1'}
            title={'migrating to linear 101'}
            preview={
              'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here is how to get started with it for good'
            }
            tags={['Design', 'research']}
            date={new Date()}
          />
        </div>
        <div className="sm:row-start-4 sm:col-start-1 sm:row-span-1 sm:col-span-1 md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-3">
          <PostCard
            postId={'1'}
            title={'migrating to linear 101'}
            preview={
              'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here is how to get started with it for good'
            }
            tags={['Design', 'research']}
            date={new Date()}
          />
        </div>
      </div>
    </>
  );
}
