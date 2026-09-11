import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export function Footer() {
  return (
    <div className="fixed bottom-5 left-6 z-50 flex gap-2">
      <a
        href="https://instagram.com/your_account"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-400 text-zinc-800 transition-opacity hover:opacity-80"
      >
        <FaInstagram className="h-4 w-4" />
      </a>

      <a
        href="https://facebook.com/your_page"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-400 text-zinc-800 transition-opacity hover:opacity-80"
      >
        <FaFacebookF className="h-4 w-4" />
      </a>
    </div>
  );
}