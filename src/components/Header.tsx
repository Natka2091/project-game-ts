import mainlogo from '../assets/icons/main-logo.svg';
import { Link, NavLink, type NavLinkRenderProps } from 'react-router-dom';
import { headerMenu, headerContacts } from '../data/navigation';

export function Header() {
  const navClass = ({ isActive }: NavLinkRenderProps) =>
    `transition-colors ${
      isActive
        ? 'text-[#FF7A00]'
        : 'text-zinc-300 hover:text-[#FF7A00]'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <img
            src={mainlogo}
            alt="Escape Room"
            className="h-[50px] w-[134px] object-contain"
          />
        </Link>

        <nav className="hidden items-center space-x-8 text-xs font-bold uppercase tracking-widest md:flex">
          {headerMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={navClass}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="text-sm font-semibold tracking-wide text-zinc-300 transition-colors hover:text-white">
          <a href={headerContacts.phoneLink}>
            {headerContacts.phone}
          </a>
        </div>

      </div>
    </header>
  );
}