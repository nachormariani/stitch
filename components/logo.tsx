import Image from "next/image";

export function Logo() {
  return (
    <Image
      alt="Unio"
      className="h-auto w-[140px]"
      height={64}
      src="/unio-isologo.png"
      width={140}
    />
  );
}
