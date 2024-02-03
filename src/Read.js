import styles from './Read.module.css';
const Read = () => {
    return(
        <>
        <div className={`${styles.mainTop} ${styles.cf}`}>
        <h2>전체</h2>
        <h3><strong>GUIDE</strong><span> 자유롭게 글을 올리실 수 있습니다. 자유로운 만큼 더욱 더 예절을 지켜주시기 바랍니다.</span></h3>
        <p className={`${styles.mainRec} ${styles.btn}`}><a href="#">추천글</a></p>
        <p className={`${styles.mainWrite} ${styles.btn}`}><a href="#">글쓰기</a></p>
        </div>
        </>
    )
}

export default Read;