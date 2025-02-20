"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.scss";

export default function SidebarItem({ href, icon: Icon, label }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${styles.sidebar_item} ${
        pathname === href ? styles.sidebar_item__active : ""
      }`}
    >
      <Icon />
      {label}
    </Link>
  );
}
