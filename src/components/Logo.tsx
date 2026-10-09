type LogoProps = {
  variant?: "auto" | "mark" | "lockup" | "stacked";
  size?: "nav" | "footer";
};

const basePath = () => process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Logo({ variant = "auto", size = "nav" }: LogoProps) {
  const root = basePath();
  const navHeight = size === "footer" ? 40 : 32;

  if (variant === "mark") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${root}/brand/logo-main.png`}
        alt="Balkrishna Infotech"
        height={navHeight}
        style={{ height: navHeight, width: "auto", display: "block" }}
      />
    );
  }

  if (variant === "stacked") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${root}/brand/logo-mark.png`}
        alt="Balkrishna Infotech"
        style={{ width: 120, height: "auto", display: "block" }}
      />
    );
  }

  if (variant === "lockup") {
    const h = size === "footer" ? 36 : 32;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${root}/brand/logo-lockup.png`}
        alt="Balkrishna Infotech"
        height={h}
        style={{ height: h, width: "auto", maxWidth: 220, display: "block" }}
      />
    );
  }

  return (
    <span className="inline-flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${root}/brand/logo-main.png`}
        alt="Balkrishna Infotech"
        height={32}
        className="logo-mobile"
        style={{ height: 32, width: "auto" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${root}/brand/logo-lockup.png`}
        alt="Balkrishna Infotech"
        height={34}
        className="logo-desktop"
        style={{ height: 34, width: "auto", maxWidth: 220 }}
      />
    </span>
  );
}
