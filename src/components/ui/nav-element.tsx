import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { UrlObject } from "url";
import Button from "./button";

export interface Element {
  image: StaticImageData;
  href: string | UrlObject;
  alt: string;
}

const NavElement = ({ image, href, alt }: Element) => {
  return (
    <Button size="icon" className="size-10" variant="ghost" asChild>
      <Link href={href} className="p-[6px]" target="_blank">
        <Image src={image} alt={alt} />
      </Link>
    </Button>
  );
};

export default NavElement;
