import Image from "next/image";

export const Cover = ({ src }: { src: string }) => (
  <div className="w-full">
    <Image src={src} alt="cover" width={1600} height={900} className="w-full h-auto" />
  </div>
);
