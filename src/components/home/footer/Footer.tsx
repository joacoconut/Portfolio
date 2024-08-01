import styles from "../../../styles/home/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoContainer}>
        <div className={styles.dataContainer}>
          <p className={styles.title}>Información de contacto</p>

          <p className={styles.mail}>
            <i className={`far fa-envelope ${styles.icon}`}></i>{" "}
            joaquinvega241200@gmail.com
          </p>
        </div>

        <div className={styles.dataContainer}>
          <div className={styles.mtop}></div>
          <p className={styles.title}>Más de mí</p>

          <nav className={styles.rrss}>
            <a
              className={styles.mail}
              href="./CV-DEVJoaquin.pdf"
              download
              rel="noreferrer"
            >
              <i className={`fa-solid fa-download ${styles.icon}`}></i>
              Curriculum
            </a>

            <a
              className={styles.mail}
              href="https://linkedin.com/in/joaquin-vegadev"
              target="_blank"
              rel="noreferrer"
            >
              <i className={`fab fa-linkedin ${styles.icon}`}></i>
              Linkedin
            </a>

            <a
              className={styles.mail}
              href="https://github.com/joacoconut"
              target="_blank"
              rel="noreferrer"
            >
              <i className={`fab fa-github ${styles.icon}`}></i>
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
