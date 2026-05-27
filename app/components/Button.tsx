import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "secondary" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  label,
  onClick,
  type,
  variant,
  size,
  icon,
  iconPosition,
  fullWidth,
  disabled,
  className,
  children,
}: ButtonProps) {

  // ── Variant styles ──────────────────────────────────────────────
  const variants = {
    // Yellow filled — primary CTA  e.g. "Admissions Open", "Enrol Your Child Today"
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-md hover:shadow-lg",

    // Purple filled — e.g. "Enquire Now"
    secondary:
      "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-light)] shadow-md hover:shadow-lg",

    // Yellow border + yellow text — e.g. "Read More About Us"
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-bg-yellow)]",

    // No background — text link style — e.g. nav ghost actions
    ghost:
      "bg-transparent text-[var(--color-secondary)] hover:text-[var(--color-secondary-light)] hover:bg-[var(--color-bg-purple)]",

    // White filled — used on dark/colored section backgrounds
    white:
      "bg-white text-[var(--color-secondary)] hover:bg-[var(--color-offwhite)] shadow-md hover:shadow-lg",
  };

  // ── Size styles ─────────────────────────────────────────────────
  const sizes = {
    sm: "text-sm px-4 py-2 rounded-full",
    md: "text-sm px-6 py-3 rounded-full",
    lg: "text-base px-8 py-4 rounded-full",
  };

  const variantClass  = variant  ? variants[variant]  : "";
  const sizeClass     = size     ? sizes[size]         : "";
  const widthClass    = fullWidth ? "w-full"           : "";
  const disabledClass = disabled  ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold
        transition-all duration-200 cursor-pointer
        ${variantClass}
        ${sizeClass}
        ${widthClass}
        ${disabledClass}
        ${className ?? ""}
      `.trim()}
    >
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      {label ?? children}
      {icon && iconPosition !== "left" && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
}