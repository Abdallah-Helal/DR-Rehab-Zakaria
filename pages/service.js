import styles from "../styles/service.module.css";

export default function Service() {
  return (
    <section className={styles.section1}>
      <img src="../Img/cover.jpg" alt="image" />
      <div></div>
      <h2 className={styles["special-heading"]}>Services</h2>
      <p>We Provide The Following Services</p>

      <ul>
        <li>Botox</li>
        <li>Skin Boosters</li>
        <li>Dermapen</li>
        <li>Cold Peel</li>
        <li>Plasmage</li>
        <li>Fractional Laser</li>
        <li>Fillers</li>
      </ul>
      <div></div>
    </section>
  );
}
