import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';

const backdropContainer = document.getElementById('backdrop-root');
const Backdrop: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={styles.Backdrop}>{children}</div>,
    backdropContainer as Element
  );
};

export default Backdrop;
