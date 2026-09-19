import { socialLinks } from "./data";

export function Footer() {
  return (
    <div className="fixed bottom-5 left-6 z-50 flex gap-2">
        {socialLinks.map((social) => {
        const Icon = social.icon;
      
      return (
        <a
          key= {social.name}
          href= {social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label= {social.name}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-400 text-zinc-800 transition-opacity hover:opacity-80"
        >
          <Icon className="h-4 w-4" />
        </a>
      );
    })}
  </div>
  );
}