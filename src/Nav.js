import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav id="lnb" className={styles.lnb}>
      <ul className={styles.cf}>
        <li><a href="#">전체</a></li>
        <li><a href="#">멍톡</a></li>
        <li><a href="#">냥톡</a></li>
        <li><a href="#">잡담</a></li>
        <li><a href="#">헬프</a></li>
      </ul>
    </nav>
  );
}

export default Nav;