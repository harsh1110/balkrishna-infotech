import Image from "next/image";

type LogoProps = {
  size?: "nav" | "footer";
  showWordmark?: boolean;
};

const sizes = {
  nav: { box: 32, className: "h-7 w-7 md:h-8 md:w-8" },
  footer: { box: 40, className: "h-9 w-9 md:h-10 md:w-10" },
};

export function Logo({ size = "nav", showWordmark = true }: LogoProps) {
  const dims = sizes[size];

  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt=""
        width={dims.box}
        height={dims.box}
        className={dims.className}
        priority={size === "nav"}
      />
      {showWordmark ? (
        <span className="font-[family-name:var(--font-sora)] text-[0.95rem] font-semibold tracking-tight text-[var(--text)] md:text-base">
          Balkrishna Infotech
        </span>
      ) : null}
    </span>
  );
}
