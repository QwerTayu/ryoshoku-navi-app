'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

export default function Pathnavi() {
  const generatePathArray = (pathname: string) => {
    const segments: string[] = pathname.split("/").filter(Boolean);
    const result: { url: string, desc: string }[] = segments.map((segment, index) => ({
      url: index === segments.length - 1 ? "#" : ("/" + segments.slice(0, index + 1).join("/")),
      desc: segment.charAt(0).toUpperCase() + segment.slice(1) // 先頭を大文字に
    }));
    
    return [{ url: "/", desc: "Home" }, ...result];
  };
  const pathname: string = usePathname();
  const pathArray = generatePathArray(pathname);
  return (
    <Breadcrumb>
      {pathArray.map((path) => (
        <BreadcrumbItem key={path.url} isCurrentPage={path.url === '#'}>
          <BreadcrumbLink href={path.url}>{path.desc}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
