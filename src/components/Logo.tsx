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
        className={size === "footer" ? "h-10 w-auto object-contain" : "h-8 w-auto object-contain"}
      />
    );
  }

  if (variant === "stacked") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${root}/brand/logo-mark.png`}
        alt="Balkrishna Infotech"
        className="h-auto w-28 object-contain sm:w-32"
      />
    );
  }

  if (variant === "lockup") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${root}/brand/logo-lockup.png`}
        alt="Balkrishna Infotech"
        className={
          size === "footer"
            ? "h-9 w-auto max-w-[220px] object-contain md:h-10"
            : "h-8 w-auto max-w-[210px] object-contain md:h-9"
        }
      />
    );
  }

  return (
    <span className="inline-flex h-8 items-center sm:h-9">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${root}/brand/logo-main.png`}
        alt="Balkrishna Infotech"
        className="h-full w-auto object-contain sm:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${root}/brand/logo-lockup.png`}
        alt="Balkrishna Infotech"
        className="hidden h-full w-auto max-w-[min(58vw,220px)] object-contain sm:block"
      />
    </span>
  );
}
