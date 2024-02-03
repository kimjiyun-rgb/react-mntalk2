import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy}>COPYRIGHT (C) <span>MNTALK.</span> ALL RIGHTS RESERVED</p>
            <ul className={`${styles.fmenu} ${styles.cf}`}>
                <li><a href="userag.html">이용약관</a></li>
                <li><a href="privacy.html"><u>개인정보 처리방침</u></a><span>|</span></li>
                <li><a href="adsform.html">광고문의</a></li>
            </ul>
        </footer>
    );
}

export default Footer;