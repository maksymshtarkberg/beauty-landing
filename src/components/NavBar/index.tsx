"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MobileMenu from "../MobileMenu";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div onClick={() => router.push("/")} className={styles.logo}>
        <Image
          width={150}
          height={150}
          src={"/2.png"}
          alt="DR.ELENA-KHUDIAKOVA"
        />
      </div>

      {!isMobile && (
        <ul className={styles.nav} aria-label="Main Navigation">
          <li className={styles.nav__item}>
            <p
              onClick={() => router.push("/about")}
              className={styles.nav__link}
            >
              ABOUT
            </p>
          </li>
          <li className={styles.nav__item}>
            <p
              onClick={() => router.push("/services")}
              className={styles.nav__link}
            >
              SERVICES
            </p>
          </li>
          <li className={styles.nav__item}>
            <p
              onClick={() => router.push("/photos")}
              className={styles.nav__link}
            >
              PHOTOS
            </p>
          </li>
          <li className={styles.nav__item}>
            <p
              onClick={() => router.push("/contacts")}
              className={styles.nav__link}
            >
              CONTACTS
            </p>
          </li>
        </ul>
      )}

      {isMobile && (
        <div>
          <svg
            onClick={handleMenuToggle}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="-4 -6 32 32"
          >
            <title>Menu</title>
            <path d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"></path>
          </svg>
        </div>
      )}

      {isMenuOpened && <MobileMenu handleMenuToggle={handleMenuToggle} />}
    </nav>
  );
};

export default Navbar;
