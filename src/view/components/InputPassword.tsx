import { CrossCircledIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef, useState } from "react";
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, type, ...props }, ref) => {
    const inputId = id ?? name;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function handleChangePasswordVisible() {
      setIsPasswordVisible(prevState => (!prevState))
    }
    
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          type={isPasswordVisible ? 'text' : type}
          id={inputId}
          placeholder=" "
          className={cn(
            'bg-white w-full rounded-lg border border-gray-300 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
            error && '!border-red-900',
            className,
          )}
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>

        <div onClick={handleChangePasswordVisible} title={isPasswordVisible ? 'Ocultar senha' : 'Exibir senha'} className='absolute cursor-pointer rounded-lg top-3 flex items-center justify-center right-4 hover:bg-gray-100 w-8 h-8'>
          {isPasswordVisible ? <EyeOpenIcon className='w-5 h-5 text-gray-500' /> : <EyeClosedIcon className='w-5 h-5 text-gray-500'/>}
        </div>

        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <CrossCircledIcon className='w-5 h-5' />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
