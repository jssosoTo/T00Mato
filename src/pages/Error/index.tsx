import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Error() {
  return (
    <div className={`${styles.wholeContainer} column-flex`}>
      <span className="cool-text">404 Not Found</span>
      <Link to="/" className="btn btn-plus-YMove">
        Back Home
      </Link>
    </div>
  );
}

export default Error;
