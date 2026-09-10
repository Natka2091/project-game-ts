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
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <img
            src={mainlogo}
            alt="Escape Room"
            className="w-33.5 h-12.5 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest">
          {headerMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={navClass}
              >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors">
          <a href={headerContacts.phoneLink}>
            {headerContacts.phone}
          </a>
        </div>

      </div>
    </header>
  );
}