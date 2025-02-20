"use client";
import styles from "./sidebar.module.scss";
import { HomeIcon, MapIcon, LogoIcon } from "@/assets";
import SidebarItem from "./sidebarItem";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <LogoIcon className={styles.logo} />
      <nav className={styles.sidebar_items}>
        <SidebarItem href="/home" icon={HomeIcon} label="Home" />
        <SidebarItem href="/map" icon={MapIcon} label="Map" />
      </nav>
    </aside>
  );
}
