"use client";

import SVGStripes from "@/ui/svg/stipes";
import styles from "./page.module.css";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <main className={styles.main}>
      <section className={styles.landing}>
        <div className={styles.landing__right}></div>
        <div className={styles.image__containerOuter}>
          <div className={styles.image__containerInner}>
            <img
              src="./face.webp"
              alt="woman's face"
              className={styles.image__img}
            />
          </div>
        </div>
        <div className={styles.heading__containerOuter}>
          <div className={styles.heading__containerInner}>
            <div className={styles.heading__overlayContainer}>
              <div className={styles.heading__overlay_text}></div>
              <h1 className={styles.heading}>WE CHANGE THE WORLD</h1>
              <h1 className={styles.heading__sub}>ONE EYEBROW AT A TIME</h1>
            </div>
            <div className={styles.heading__overlayContainer}>
              <div className={styles.heading__overlay_link}></div>
              <p className={styles.heading__bookAppointment}>
                <a href="#" className={styles.bookAppointment__link}>
                  {isMobile ? "Services" : "Explore Our Services"}
                  <span
                    aria-hidden="true"
                    className="bookAppointment__link--icon"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="16"
                      viewBox="0 -5 24 24"
                    >
                      <title>arrow-thin-right</title>
                      <path d="M16.172 9l-6.071-6.071 1.414-1.414 8.485 8.485-8.485 8.485-1.414-1.414 6.071-6.071h-16.172v-2z"></path>
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.decorationSlashLines__containerOuter}
          aria-hidden="true"
        >
          <div className={styles.decorationSlashLines__containerInner}>
            <SVGStripes />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
