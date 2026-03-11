import { cva } from 'class-variance-authority';
import type { ButtonProps } from './Button.types';

export const buttonVariants = cva(
  'flex items-center justify-center rounded font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-slate-900 border-primary border-2 hover:border-slate-900',
      },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export default function Button({
  variant,
  size,
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin">⟳</span>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
