import  close from '../assets/icons/close.svg';
import {useNavigate, useParams} from 'react-router-dom';
import {useForm, type SubmitHandler} from 'react-hook-form';
import type { BookingFormData } from './data';

export function BookingForm() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
} = useForm<BookingFormData>();

const onSubmit: SubmitHandler<BookingFormData> = (data) => {

    if (!slug) {
        return;
    }

    const booking = {
        slug,
        ...data
    };
    console.log(booking);
};

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-120 bg-[#121212] p-8 text-white">

        <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">
                Leave an application
            </h2>

            <button 
                type="button"
                onClick={() => navigate(-1)}
                className="right-6 top-6 hover:opacity-70 transition-opacity">
                <img src={close} alt="CloseIcon" />
            </button>
        </div>

        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
        >
            <div>
                <label className="block text-sm mb-2 font-light">Your name</label>
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { 
                        required: 'Name is required' 
                    })}
                    className="w-full bg-transparent border border-white rounded-md px-4 py-3  focus:outline-none focus:border-gray-500 transition-colors"
                />

                {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div>
                <label className="block text-sm mb-2 font-light">Your phone</label>
                <input
                    type="tel"
                    placeholder="Phone"
                    {...register("phone", { 
                        required: 'Phone is required' 
                    })}
                    className="w-full bg-transparent border border-white rounded-md px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors"
                />
                {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.phone.message}
                    </p>
                )}
            </div>
            <div>
                <label className="block text-sm mb-2 font-light">Number of participants</label>
                <input
                    type="number"
                    min="1"
                    placeholder="Number of participants"
                    {...register("participants", { 
                        required: 'Number of participants is required',
                        valueAsNumber: true,
                        min: {
                            value: 1,
                            message: 'Number of participants must be at least 1'
                        }
                    })}
                    className="w-full bg-transparent border border-white rounded-md px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors"
                />
                {errors.participants && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.participants.message}
                    </p>
                )}
            </div>

            <button
                type="submit" 
                className="block mx-auto bg-[#b0b0b0] hover:bg-white text-[#161616] font-bold py-4 px-6 rounded-full uppercase tracking-wider text-sm transition-colors cursor-pointer"
            >Send an application</button>

            <div className="flex items-start gap-3 pt-2">
                <input 
                    type="checkbox" 
                    id="agreement" 
                    {...register("agreement", { 
                        required: 'You must agree to the terms'
                    })}
                    className="mt-1"
                />
                <label 
                    htmlFor="agreement" 
                    className="text-xs leading-normal font-light"
                >
                I agree with {' '}
                <a href="#" className="underline hover:text-white transition-colors">the rules for processing personal data</a> {' '} and the user agreement 
                </label>

                {errors.agreement && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.agreement.message}  
                    </p>
                )}
            </div>
        </form>
      </div>
    </div>
  );
}
