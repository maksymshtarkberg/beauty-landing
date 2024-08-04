import CardService from "../../components/CardService";
import styles from "./page.module.css";

const Services = () => {
  const services = [
    {
      title: "Mesotherapy",
      slug: "mesotherapy",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, tempore!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, tempore!",
      img: "./face.webp",
    },
    {
      title: "Biorevitalization",
      slug: "biorevitalization",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, tempore!",
      img: "./face.webp",
    },
    {
      title: "Non-hycurgic contour plastic of face and body",
      slug: "non-surgical-contour-plastic",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, tempore!",
      img: "./face.webp",
    },
  ];

  return (
    <>
      <div className={styles.services__container}>
        <h2 className={styles.title}>Services</h2>
        <div className={styles.services}>
          {services.map((service, index) => {
            return <CardService service={service} key={index} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
