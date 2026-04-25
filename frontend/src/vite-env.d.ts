/// <reference types="vite/client" />

declare module '@/components/ui/card' {
  import { ComponentType } from 'react';
  const Card: ComponentType<{ className?: string; children?: React.ReactNode }>;
  const CardHeader: ComponentType<{ className?: string; children?: React.ReactNode }>;
  const CardContent: ComponentType<{ className?: string; children?: React.ReactNode }>;
  const CardFooter: ComponentType<{ className?: string; children?: React.ReactNode }>;
  export { Card, CardHeader, CardContent, CardFooter };
}

declare module '@/components/ui/badge' {
  import { ComponentType } from 'react';
  interface BadgeProps {
    className?: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    children?: React.ReactNode;
  }
  export type { BadgeProps };
  const Badge: ComponentType<BadgeProps>;
  export { Badge };
}

declare module '@/components/ui/button' {
  import { ComponentType } from 'react';
  interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link';
    size?: 'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
  }
  export type { ButtonProps };
  const Button: ComponentType<ButtonProps>;
  export { Button };
}

declare module '@/components/ui/input' {
  import { ComponentType } from 'react';
  interface InputProps {
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  export type { InputProps };
  const Input: ComponentType<InputProps>;
  export { Input };
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}