// dropdown types
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../Button';

export type DropdownProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label: string;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
