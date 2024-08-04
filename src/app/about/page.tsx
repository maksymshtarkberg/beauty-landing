import SVGStripes from "@/ui/svg/stipes";
import styles from "./page.module.css";

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.decorationSlashLines__containerOuter}>
          <div className={styles.decorationSlashLines__containerInner}>
            <SVGStripes />
          </div>
        </div>
        <div className={styles.about__left}>
          <h2 className={styles.about__title}>About</h2>
          <div className={styles.about__overlay_text}>
            <p className={styles.about__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repellendus vero quibusdam ipsa quas necessitatibus dolorum
              perspiciatis hic praesentium nisi.
            </p>
          </div>
          <div className={styles.about__services_container}>
            <div className={styles.about__service_item1}>
              <h3 className={styles.about__service_title}>Name of service</h3>
              <p className={styles.about__service_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, aliquam.
              </p>
            </div>
            <div className={styles.about__service_item2}>
              <h3 className={styles.about__service_title}>Name of service</h3>
              <p className={styles.about__service_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, aliquam.
              </p>
            </div>
            <div className={styles.about__service_item3}>
              <h3 className={styles.about__service_title}>Name of service</h3>
              <p className={styles.about__service_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, aliquam.
              </p>
            </div>
            <div className={styles.about__service_item4}>
              <h3 className={styles.about__service_title}>Name of service</h3>
              <p className={styles.about__service_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, aliquam.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.image__containerOuter}>
          <div className={styles.image__containerInner}>
            <img
              src="./AlbumArtSmall.jpg"
              alt="woman's face"
              className={styles.image__img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
