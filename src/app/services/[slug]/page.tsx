"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import SVGStripes from "@/ui/svg/stipes";

interface ServiceProps {
  params: {
    slug: string;
  };
}

const services = [
  {
    slug: "mesotherapy",
    title: "Mesotherapy",
    text: "Mesotherapy is a non-surgical technique that uses microinjections to rejuvenate and tighten skin.",
    img: "/face.webp",
  },
  {
    slug: "biorevitalization",
    title: "Biorevitalization",
    text: "Biorevitalization is a cosmetic treatment aimed at restoring skin hydration and elasticity.",
    img: "/face.webp",
  },
  {
    slug: "non-surgical-contour-plastic",
    title: "Non-Surgical Contour Plastic",
    text: "Non-surgical contour plastic procedures enhance the body's appearance without invasive surgery.",
    img: "/face.webp",
  },
];

export default function Service({ params }: ServiceProps) {
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    const matchedService = services.find((s) => s.slug === params.slug);
    setService(matchedService);
  }, [params.slug]);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <>
        <div className={styles.about}>
          <div className={styles.decorationSlashLines__containerOuter}>
            <div className={styles.decorationSlashLines__containerInner}>
              <SVGStripes />
            </div>
          </div>
          <div className={styles.about__left}>
            <h2 className={styles.about__title}>{service.title}</h2>
            <div className={styles.about__overlay_text}>
              <p className={styles.about__text}>{service.text}</p>
            </div>
          </div>
          <div className={styles.image__containerOuter}>
            <div className={styles.image__containerInner}>
              <img
                src={service.img}
                alt="woman's face"
                className={styles.image__img}
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
}
