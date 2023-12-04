import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';

const backdropContainer = document.getElementById('backdrop-root');
const Backdrop: React.FC<{
  children?: ReactNode;
  hidden?: boolean;
  onClick?: () => void;
}> = ({ children, hidden, onClick }) => {
  return ReactDOM.createPortal(
    <div className={styles.Backdrop} hidden={hidden} onClick={onClick}>
      {children}
    </div>,
    backdropContainer as Element
  );
};

export default Backdrop;
