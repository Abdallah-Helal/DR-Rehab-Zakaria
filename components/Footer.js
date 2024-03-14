import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      &copy; All Right Reserved
      <p>
        Designed 2024 & Operated by
        <a
          href="https://www.linkedin.com/in/abdalla-emad-40732b1b6/"
          target="_blank"
        >
          <span> Abdullah Emad</span>
        </a>
      </p>
    </div>
  );
}
