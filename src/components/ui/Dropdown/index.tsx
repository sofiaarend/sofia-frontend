'use client';

import { useState, useRef, useEffect } from 'react';
import Button from '../Button';
import type { DropdownProps } from './Dropdown.types';

export default function Dropdown({
  label,
  variant,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative inline-block text-left ${className}`}>
      <Button
        variant={variant}
        isLoading={isLoading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
      </Button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="bg-background ring-outline absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-hidden rounded-lg shadow-lg ring-1 focus:outline-none"
        >
          <div role="none">{children}</div>
        </div>
      )}
    </div>
  );
}
