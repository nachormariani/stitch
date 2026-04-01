import Image from "next/image";

export function Logo() {
  return (
    <Image
      alt="Unio"
      className="h-16 w-auto"
      height={64}
      src="/unio-isologo.png"
      width={64}
    />
  );
}
