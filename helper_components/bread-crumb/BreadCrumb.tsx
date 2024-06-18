"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { raleway } from "@/utils/fonts";
import { generateBreadcrumbItems } from "@/utils/generateBreadcrumbItems";
import { BreadCrumbItemProps } from "@/utils/types";

function BreadCrumb({ breadCrumbItems = generateBreadcrumbItems() }) {
  const pathName = usePathname();

  return (
    <>
      <ul className="flex flex-wrap rounded-lg bg-gray-700 p-1 shadow-lg">
        {breadCrumbItems.map((item: BreadCrumbItemProps, i: number) => (
          <li key={item.label} className={`${raleway.className} p-1`}>
            {i === breadCrumbItems.length - 1 ? (
              <Link
                href={item.href}
                className={`${pathName === item.href ? "font-semibold tracking-wider text-white" : ""}`}
              >{`${item.label}`}</Link>
            ) : (
              <Link
                href={item.href}
                className="text-gray-200"
              >{`${item.label} >`}</Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BreadCrumb;
