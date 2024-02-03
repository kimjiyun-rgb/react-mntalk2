import styles from './Read.module.css';

const Read = () => {
  return (
    <>
      <div className={`${styles.mainTop} ${styles.cf}`}>
        <h2>전체</h2>
        <h3><strong>GUIDE</strong><span> 자유롭게 글을 올리실 수 있습니다. 자유로운 만큼 더욱 더 예절을 지켜주시기 바랍니다.</span></h3>
        <p className={`${styles.mainRec} ${styles.btn}`}><a href="#">추천글</a></p>
        <p className={`${styles.mainWrite} ${styles.btn}`}><a href="#">글쓰기</a></p>
      </div>

      <div className={styles.title}>
        <table>
          <th>제목 영역</th>
          <th></th>
          <th></th>
          <th></th>
          <tbody>
            <td>작성자: 팅팅이</td>
            <td>작성일: 2019/12/03</td>
            <td>조회수: 1975</td>
            <td>추천: 11</td>
          </tbody>
        </table>
        <div className={`${styles.postArea} ${styles.cf}`}>
          <div className={styles.postMain}>
            글 들어오는 공간
          </div>
          <div className={styles.postBottom}>
            <p>추천수: <span>11</span></p>
            <p><a href="#">추천하기</a></p>
            <p><a href="#">공유하기</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Read;