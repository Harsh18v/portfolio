import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200",
    secondary:
      "border border-neutral-800 bg-transparent text-neutral-300 hover:border-neutral-600 hover:text-white",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
