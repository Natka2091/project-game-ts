import mainlogo from '../assets/icons/main-logo.svg';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full bg-[#121212]/80 backdrop-blur-md text-white z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
          <img src={mainlogo} alt="Escape Room" className="w-[134px] h-[50px] object-contain" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest">
          <Link 
            to="/" 
            className={`transition-colors ${location.pathname === '/' ? 'text-[#FF7A00]' : 'text-zinc-300 hover:text-[#FF7A00]'}`}
          >
            Квести
          </Link>
          <Link 
            to="/beginners" 
            className={`transition-colors ${location.pathname === '/beginners' ? 'text-[#FF7A00]' : 'text-zinc-300 hover:text-[#FF7A00]'}`}
          >
            Новачкам
          </Link>
          <Link 
            to="/reviews" 
            className={`transition-colors ${location.pathname === '/reviews' ? 'text-[#FF7A00]' : 'text-zinc-300 hover:text-[#FF7A00]'}`}
          >
            Відгуки
          </Link>
          <Link 
            to="/promotions" 
            className={`transition-colors ${location.pathname === '/promotions' ? 'text-[#FF7A00]' : 'text-zinc-300 hover:text-[#FF7A00]'}`}
          >
            Акції
          </Link>
          <Link 
            to="/contacts" 
            className={`transition-colors ${location.pathname === '/contacts' ? 'text-[#FF7A00]' : 'text-zinc-300 hover:text-[#FF7A00]'}`}
          >
            Контакти
          </Link>
        </nav>

        <div className="text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors">
          <a href="tel:88003335599">8 (800) 333-55-99</a>
        </div>

      </div>
    </header>
  );
}