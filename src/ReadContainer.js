import Comment from "./Comment";
import List from "./List";
import Read from "./Read";

import styles from './ReadContainer.module.css';

const ReadContainer = () => {
  return (
    <div className={styles.container}>
      <Read />
      <Comment />
      <List />
    </div>
  );
};

export default ReadContainer;