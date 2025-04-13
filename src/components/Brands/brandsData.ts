

interface BrandProps {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight: string
}

export const brandsData: BrandProps[] = [
  {
    id: 6,
    name: "Oando",
    href: "https://www.oandoplc.com/",
    image: "/images/brands/formbold.svg",
    imageLight: "/images/brands/formbold-light.svg",
  },
  {
    id: 1,
    name: "Shell",
    href: "https://www.shell.com.ng/",
    image: "/images/brands/uideck.svg",
    imageLight: "/images/brands/uideck-light.svg",
  },
  {
    id: 2,
    name: "Bell Oil",
    href: "https://belloil.com",
    image: "/images/brands/tailgrids.svg",
    imageLight: "/images/brands/tailgrids-light.svg",
  },
  {
    id: 3,
    name: "Seplat",
    href: "https://lineicons.com",
    image: '/images/logos/seplat_logo.jpeg',
    imageLight: "",
  },
  {
    id: 4,
    name: "Lekoil",
    href: "https://lekoil.com/",
    image: "/images/brands/tailadmin.svg",
    imageLight: "/images/brands/tailadmin-light.svg",
  },
  {
    id: 5,
    name: "Shoreline",
    href: "https://shorelinenaturalresources.com/",
    image: "/images/brands/plainadmin.svg",
    imageLight: "/images/brands/plainadmin-light.svg",
  },
];


