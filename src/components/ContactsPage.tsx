import { ContactMap } from './ContactMap';

export function ContactsPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-36 pb-20">
        <section>
          <p className="mb-3 text-sm text-[#FF7A00]">
            Quests in London
          </p>

          <h1 className="text-6xl font-bold">
            Contacts
          </h1>

          <div className="mt-8 border-t border-zinc-700 pt-10">
            <div className="grid grid-cols-2 gap-12">
              
              <div>
                <div className="mb-8">
                  <h2 className="mb-2 text-sm font-semibold">
                    Address
                  </h2>

                  <p className="text-sm leading-6 text-zinc-300">
                    169–171 Caledonian Road
                    <br />
                    London N1 0SL
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="mb-2 text-sm font-semibold">
                    Opening hours
                  </h2>

                  <p className="text-sm leading-6 text-zinc-300">
                    Every day, 10:00–22:00
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="mb-2 text-sm font-semibold">
                    Phone
                  </h2>

                  <a
                    href="tel:+442079460123"
                    className="text-sm text-zinc-300 transition-colors hover:text-[#FF7A00]"
                  >
                    +44 20 7946 0123
                  </a>
                </div>

                <div>
                  <h2 className="mb-2 text-sm font-semibold">
                    E-mail
                  </h2>

                  <a
                    href="mailto:info@escape-room.co.uk"
                    className="text-sm text-zinc-300 transition-colors hover:text-[#FF7A00]"
                  >
                    info@escape-room.co.uk
                  </a>
                </div>
              </div>

              <div className="h-[315px] w-full overflow-hidden">
                <ContactMap />
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}