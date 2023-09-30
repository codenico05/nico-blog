import ThemeToggle from '@/components/ThemeToggle';
import NavLink from '@/components/NavLink';

const Navbar = () => {
  return (
    <nav className="xl:h-10 w-full flex justify-between px-[112px] py-[30px] md:h-8 sm:h-7">
      <h2 className="text-xl self-baseline cursor-pointer hover:text-green-400 dark:hover:text-red-400">
        Logo
      </h2>
      <ul className="flex flex-row items-center xl:gap-12 md:gap-8 self-baseline">
        <NavLink pathName={'/'} text={'Blog'} />
        <NavLink pathName={'/about'} text={'About'} />
        <NavLink pathName={'/newsletter'} text={'Newsletter'} />
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
