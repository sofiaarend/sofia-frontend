import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from './index';

export type ButtonVariant = 'primary' | 'ghost';
export type ButtonSize = 'sm' | 'md';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
