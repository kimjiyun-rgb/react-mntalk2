import styles from './Comment.module.css';

const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.showCmt}><span>6</span>개의 댓글이 있습니다.</div>
      <div className={styles.cmtList}>
        <ul>
          <li>
            <div className={styles.cuser}>
              <span className={styles.cname}> 츄레이서 </span>
              <span className={styles.ctime}>2019-12-03 15:39:23</span>
            </div>
            <div className={styles.ctext}>왜 저렇게 호달달달 떨어요ㅋㅋㅋㅋㅋㅋ 귀엽</div>
          </li>
          <li>
            <div className={styles.cuser}>
              <span className={styles.cname}> 츄레이서 </span>
              <span className={styles.ctime}>2019-12-03 15:39:23</span>
            </div>
            <div className={styles.ctext}>왜 저렇게 호달달달 떨어요ㅋㅋㅋㅋㅋㅋ 귀엽</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Comment;