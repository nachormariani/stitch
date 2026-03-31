import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-[1.75px]">
      <div className="shrink-0">
        <Image
          alt="Unio"
          className="h-[39px] w-[39px] shrink-0 object-contain"
          height={39}
          src="/unio-logo-dark.png"
          width={39}
        />
      </div>
      <span className="logo-wordmark text-[25px] text-[#0F172A]">
        UNIO
      </span>
    </div>
  );
}
