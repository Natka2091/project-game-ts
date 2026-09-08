import mainlogo from '../assets/icons/main-logo.svg';
import { Link, NavLink } from 'react-router-dom';
import type { NavLinkRenderProps } from 'react-router-dom';

export function Header() {
  const navClass = ({ isActive }: NavLinkRenderProps) =>
    `transition-colors ${
      isActive
        ? 'text-[#FF7A00]'
        : 'text-zinc-300 hover:text-[#FF7A00]'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#121212]/80 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <img
            src={mainlogo}
            alt="Escape Room"
            className="w-[134px] h-[50px] object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest">

          <NavLink to="/" end className={navClass}>
            Квести
          </NavLink>

          <NavLink to="/beginners" className={navClass}>
            Новачкам
          </NavLink>

          <NavLink to="/reviews" className={navClass}>
            Відгуки
          </NavLink>

          <NavLink to="/promotions" className={navClass}>
            Акції
          </NavLink>

          <NavLink to="/contacts" className={navClass}>
            Контакти
          </NavLink>

        </nav>

        <div className="text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors">
          <a href="tel:88003335599">
            8 (800) 333-55-99
          </a>
        </div>

      </div>
    </header>
  );
}