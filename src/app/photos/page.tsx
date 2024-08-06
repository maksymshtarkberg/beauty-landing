import styles from "./page.module.css";

import Photos from "@/components/Photos";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Photos />
      </div>
    </>
  );
};

export default App;
