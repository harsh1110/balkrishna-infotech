type LogoProps = {
  variant?: "auto" | "mark" | "lockup" | "stacked";
  size?: "nav" | "footer";
};

const basePath = () => process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Logo({ variant = "auto", size = "nav" }: LogoProps) {
  const root = basePath();

  if (variant === "mark") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${root}/brand/logo-main.png`}
        alt="Balkrishna Infotech"
        width={40}
        height={64}
        className={
          size === "footer"
            ? "h-11 w-auto object-contain"
            : "h-8 w-auto object-contain sm:h-9"
        }
      />
    );
  }

  if (variant === "stacked") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${root}/brand/logo-mark.png`}
        alt="Balkrishna Infotech"
        width={160}
        height={160}
        className="h-auto w-[7.5rem] object-contain sm:w-36"
      />
    );
  }

  if (variant === "lockup") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${root}/brand/logo-lockup.png`}
        alt="Balkrishna Infotech"
        width={220}
        height={48}
        className={
          size === "footer"
            ? "h-10 w-auto max-w-[220px] object-contain md:h-11"
            : "h-8 w-auto max-w-[200px] object-contain md:h-9"
        }
      />
    );
  }

  // auto: mark on small screens, full lockup from sm up
  return (
    <span className="inline-flex min-w-0 items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${root}/brand/logo-main.png`}
        alt="Balkrishna Infotech"
        width={40}
        height={64}
        className="h-8 w-auto object-contain sm:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${root}/brand/logo-lockup.png`}
        alt="Balkrishna Infotech"
        width={220}
        height={48}
        className="hidden h-8 w-auto max-w-[min(52vw,210px)] object-contain sm:block md:h-9 md:max-w-[240px]"
      />
    </span>
  );
}
