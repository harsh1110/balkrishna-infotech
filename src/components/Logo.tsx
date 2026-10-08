type LogoProps = {
  size?: "nav" | "footer";
  showWordmark?: boolean;
};

const sizes = {
  nav: { box: 34, className: "h-[30px] w-[30px] md:h-8 md:w-8" },
  footer: { box: 42, className: "h-9 w-9 md:h-10 md:w-10" },
};

export function Logo({ size = "nav", showWordmark = true }: LogoProps) {
  const dims = sizes[size];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <span className="inline-flex min-w-0 items-center gap-2 sm:gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/logo.png`}
        alt="Balkrishna Infotech logo"
        width={dims.box}
        height={dims.box}
        className={`${dims.className} shrink-0 object-contain`}
      />
      {showWordmark ? (
        <span className="truncate font-[family-name:var(--font-sora)] text-[0.88rem] font-semibold tracking-tight text-[var(--text)] sm:text-[0.95rem] md:text-base">
          <span className="sm:hidden">Balkrishna</span>
          <span className="hidden sm:inline">Balkrishna Infotech</span>
        </span>
      ) : null}
    </span>
  );
}
