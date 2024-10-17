import Movie from './Movie';
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';
import { Popover, Button } from 'antd';

function Home() {
  const movies = [];
  for (let i = 0; i < 10; i++) {
    movies.push(<Movie key={i} />);
  }

  const popoverContent = (
    <div className={styles.popoverContent}>
      <span>Movie 1</span>
      <span>Movie 2</span>
      <span>Movie 3</span>
      <span>Movie 4</span>
    </div>
  );

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logocontainer}>
          <img src="logo.png" alt="Logo" />
          <img className={styles.logo} src="logoletter.png" alt="Letter logo" />
        </div>
        <Popover title="Liked movies" content={popoverContent} className={styles.popover} trigger="click">
          <Button>♥ 4 movie(s)</Button>
        </Popover>
      </div>
      <div className={styles.title}>LAST RELEASES</div>
      <div className={styles.moviesContainer}>
        {movies}
      </div>
    </div>
  );
}

export default Home;
