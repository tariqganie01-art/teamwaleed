import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function Button({
  href,
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800 ${className}`}
    >
      {children}
    </Link>
  );
}