'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  pathName: string;
  text: string;
};
export default function NavLink({ pathName, text }: Props) {
  const pathname = usePathname();
  return (
    <li className="relative">
      <Link
        href={pathName}
        className={`active:text-red-400 hover:text-teal-700 dark:hover:text-red-200 `}
      >
        {text}
      </Link>
      <div
        className={`${
          pathname === pathName
            ? 'absolute w-full h-[0.5px] bg-primary-light'
            : ''
        } `}
      />
    </li>
  );
  // <li>
  //   <Link
  //     href="/about"
  //     className="active:text-red-400 hover:text-teal-700 dark:hover:text-red-200"
  //   >
  //     About
  //   </Link>
  // </li>
  // <li>
  //   <Link
  //     href="/newsletter"
  //     className="active:text-red-400 hover:text-teal-700 dark:hover:text-red-200"
  //   >
  //     Newsletter
  //   </Link>
  // </li>
}
