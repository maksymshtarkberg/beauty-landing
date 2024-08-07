import { useRouter } from "next/navigation";
import styles from "./page.module.css";

interface MobileMenuProps {
  handleMenuToggle: () => void;
}

const MobileMenu = ({ handleMenuToggle }: MobileMenuProps) => {
  const router = useRouter();

  const redirect = (path: string) => {
    router.push(path);
    handleMenuToggle();
  };
  return (
    <div className={styles.menu__overlayOuter}>
      <div className={styles.menu__overlayInner}>
        <nav className={styles.menu__header}>
          <ul
            className={`${styles.nav} ${styles.menu__nav_header}`}
            aria-label="Menu Navigation"
          >
            <li className={`${styles.nav__item} ${styles.menu__navItem}`}>
              <div
                onClick={handleMenuToggle}
                id="close"
                className={styles.menu__btn_close}
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>clear</title>
                  <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                </svg>
              </div>
            </li>
          </ul>
        </nav>
        <ul
          className={`${styles.nav} ${styles.menu__nav_main}`}
          aria-label="Main Navigation"
        >
          <li className={`${styles.nav__item} ${styles.menu__navItem}`}>
            <div
              onClick={() => redirect("/about")}
              className={styles.nav__link}
            >
              ABOUT
            </div>
          </li>
          <li className={`${styles.nav__item} ${styles.menu__navItem}`}>
            <div
              onClick={() => redirect("/services")}
              className={styles.nav__link}
            >
              SERVICES
            </div>
          </li>
          <li className={`${styles.nav__item} ${styles.menu__navItem}`}>
            <div
              onClick={() => redirect("/photos")}
              className={styles.nav__link}
            >
              PHOTOS
            </div>
          </li>
          <li className={`${styles.nav__item} ${styles.menu__navItem}`}>
            <div
              onClick={() => redirect("/contacts")}
              className={styles.nav__link}
            >
              CONTACTS
            </div>
          </li>
        </ul>
        <ul
          className={`${styles.nav} ${styles.menu__nav_social}`}
          aria-label="Links to social media"
        >
          <li
            className={`${styles.nav__item} ${styles.menu__navItem} ${styles.nav__icon}`}
          >
            <a href="#" className={styles.nav__link_icon}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <title>facebook</title>
                <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
              </svg>
            </a>
          </li>
          <li
            className={`${styles.nav__item} ${styles.menu__navItem} ${styles.nav__icon}`}
          >
            <a href="#" className={styles.nav__link_icon}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                preserveAspectRatio="xMidYMid meet"
              >
                <title>instagram</title>
                <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
              </svg>
            </a>
          </li>
          <li
            className={`${styles.nav__item} ${styles.menu__navItem} ${styles.nav__icon}`}
          >
            <a href="#" className={styles.nav__link_icon}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <title>yelp</title>
                <path d="M19.027 20.421c-0.54 0.545-0.083 1.535-0.083 1.535l4.065 6.788c0 0 0.668 0.895 1.246 0.895 0.581 0 1.155-0.477 1.155-0.477l3.214-4.594c0 0 0.324-0.58 0.331-1.087 0.012-0.722-1.077-0.92-1.077-0.92l-7.609-2.444c-0 0-0.746-0.198-1.242 0.303zM18.642 17c0.389 0.66 1.463 0.468 1.463 0.468l7.592-2.219c0 0 1.035-0.421 1.182-0.982 0.145-0.561-0.171-1.238-0.171-1.238l-3.628-4.274c0 0-0.314-0.54-0.967-0.595-0.719-0.061-1.162 0.809-1.162 0.809l-4.29 6.75c0 0-0.379 0.672-0.020 1.28zM15.055 14.368c0.894-0.22 1.036-1.519 1.036-1.519l-0.061-10.808c0 0-0.135-1.333-0.734-1.695-0.94-0.57-1.218-0.272-1.487-0.233l-6.303 2.342c0 0-0.617 0.204-0.939 0.719-0.459 0.73 0.466 1.798 0.466 1.798l6.551 8.93c0 0 0.647 0.669 1.47 0.465zM13.498 18.742c0.023-0.834-1.001-1.334-1.001-1.334l-6.775-3.423c0 0-1.004-0.414-1.491-0.126-0.373 0.221-0.704 0.62-0.737 0.973l-0.441 5.432c0 0-0.066 0.941 0.178 1.369 0.345 0.608 1.482 0.184 1.482 0.184l7.909-1.748c0.307-0.207 0.846-0.225 0.876-1.328zM15.465 21.673c-0.679-0.349-1.491 0.373-1.491 0.373l-5.296 5.83c0 0-0.661 0.892-0.493 1.439 0.158 0.513 0.42 0.768 0.791 0.948l5.319 1.679c0 0 0.645 0.134 1.133-0.008 0.693-0.201 0.565-1.286 0.565-1.286l0.12-7.894c-0 0-0.027-0.76-0.648-1.082z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
