import Link from 'next/link';
import { format } from 'date-fns';

type Props = {
  postId: string;
  title: string;
  preview: string;
  tags: string[];
  date: Date;

  column?: boolean;
};

export default function PostCard({
  title,
  preview,
  tags,
  date,
  postId,
  column,
}: Props) {
  const formattedDate = format(date, 'EEEE, LLL do yyyy');
  return (
    <Link href={`/${postId}`} className="w-full">
      <article
        className={`w-full relative flex md:flex-row flex-col gap-5 hover:opacity-90 ${
          column ? 'md:flex-col' : ''
        } min-h-[200px] `}
      >
        <div className="bg-image-one w-full bg-no-repeat bg-cover min-h-[200px] flex-1" />
        <div className="flex flex-col flex-1">
          <p className={'font-semibold text-date-article mb-3 text-sm'}>
            {formattedDate}
          </p>
          <h3 className="capitalize mb-2">{title}</h3>
          <p className="font-extralight text-sm line-clamp-2 dark:text-light-text">
            {preview}
          </p>
          <div className="flex gap-2 mt-2">
            {tags.map((tag) => (
              <p className="" key={postId}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
