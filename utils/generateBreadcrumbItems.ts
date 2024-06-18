import { usePathname } from "next/navigation";

import { BreadCrumbItemProps } from "./types";
import { capitalizeWordsRegex } from "./helperFunctions";

export const generateBreadcrumbItems = (): BreadCrumbItemProps[] => {
  const router = usePathname();

  const segments = router.split("/");

  const breadcrumbItems: BreadCrumbItemProps[] = [];

  for (let i = 0; i < segments.length; i++) {
    let breadcrumbItem: BreadCrumbItemProps = { label: "", href: "" };

    const breadcrumbSegment = capitalizeWordsRegex(
      segments[i].split("-").join(" "),
    );

    i === 0
      ? (breadcrumbItem = {
          label: "Home",
          href: segments.join("/").slice(0, i + 1),
        })
      : (breadcrumbItem = {
          label: breadcrumbSegment,
          href: segments.slice(0, i + 1).join("/"),
        });

    breadcrumbItems.push(breadcrumbItem);
  }

  return breadcrumbItems;
};
