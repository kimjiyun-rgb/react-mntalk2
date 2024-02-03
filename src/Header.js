import styles from './Header.module.css';
const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <div id="headerIn" className={styles.headerIn}>
                <h1 className={styles.logo}>
                    <a href="#">
                        <img src="/img/logo.jpg" alt="멍냥토크" />
                    </a>
                </h1>
                <div className={styles.search}>
                    <input type="text" className={styles.src} />
                    <label>검색하기</label>
                    <select className={styles.h_category}>
                        <option>전체</option>
                        <option>멍톡</option>
                        <option>냥톡</option>
                        <option>잡담</option>
                        <option>헬프</option>
                    </select>
                    <a href="#" className={styles.srcimg}>
                        <img src="/img/srcimg.jpg" alt="검색" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;