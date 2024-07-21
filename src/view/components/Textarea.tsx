import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from "react";
import { cn } from '../../app/utils/cn';

interface TextareaProps extends ComponentProps<'textarea'> {
  name: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, name, id, error, className, disabled, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <textarea
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          placeholder=" "
          className={cn(
            'bg-white min-h-[120px] w-full rounded-lg border border-gray-300 px-3 h-[52px] text-gray-800 pt-7 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
            error && '!border-red-900',
            disabled && 'bg-gray-200 pointer-events-none',
            className,
          )}
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>

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
