import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Post } from "./Post";
import { Comments } from "./Comments";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.contents}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={`${styles.contents__main} ${styles.main}`}>
          <div className={styles.post}>
            <Post />
          </div>
          <div className={`${styles.main__comment} ${styles.comment}`}>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
