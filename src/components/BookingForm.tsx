import  close from '../assets/icons/close.svg';

export function BookingForm() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-120 bg-[#121212] p-8 text-white">

        <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">
                Leave an application
            </h2>

            <button className="right-6 top-6 hover:opacity-70 transition-opacity">
                <img src={close} alt="CloseIcon" />
            </button>
        </div>

        <form className="space-y-8">
            <div>
                <label className="block text-sm mb-2 font-light">Your name</label>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border border-white rounded-md px-4 py-3  focus:outline-none focus:border-gray-500 transition-colors"
                />
            </div>
            <div>
                <label className="block text-sm mb-2 font-light">Your phone</label>
                <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-transparent border border-white rounded-md px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors"
                />
            </div>
            <div>
                <label className="block text-sm mb-2 font-light">Number of participants</label>
                <input
                    type="number"
                    placeholder="Number of participants"
                    className="w-full bg-transparent border border-white rounded-md px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors"
                />
            </div>

            <button
                type="submit" 
                className="block mx-auto bg-[#b0b0b0] hover:bg-white text-[#161616] font-bold py-4 px-6 rounded-full uppercase tracking-wider text-sm transition-colors cursor-pointer"
            >Send an application</button>

            <div className="flex items-start gap-3 pt-2">
                <input 
                type="checkbox" 
                id="agreement" 
                className="mt-1"
                />
                <label htmlFor="agreement" className="text-xs leading-normal font-light">
                I agree with <a href="#" className="underline hover:text-white transition-colors">the rules for processing personal data</a> and the user agreement
                </label>
            </div>
        </form>
      </div>
    </div>
  );
}
