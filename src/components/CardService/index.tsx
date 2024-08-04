import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Button from "@/ui/button";

interface Service {
  title: string;
  slug: string;
  text: string;
  img: string;
}

interface CardServiceProps {
  service: Service;
  index: number;
  key: number;
}

const CardService = ({ service, index }: CardServiceProps) => {
  const delay = `${index * 0.5}s`;
  return (
    <div className={styles.card} style={{ animationDelay: delay }}>
      <div className={styles.card__image}>
        <img
          src={service.img}
          alt={service.title}
          className={styles.card__img}
        />
      </div>
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{service.title}</h2>
        <p className={styles.card__text}>{service.text}</p>
      </div>

      <Button text="Read more" slug={service.slug} />
    </div>
  );
};

export default CardService;
