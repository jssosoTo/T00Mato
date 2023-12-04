import React, { ReactNode, useEffect } from 'react';
import Backdrop from '../Backdrop';
import styles from './index.module.css';
import { CloseOutlined } from '@ant-design/icons';

const Modal: React.FC<{
  children?: ReactNode;
  title?: string;
  open?: boolean;
  closeTitle?: boolean;
  onClose?: () => void;
}> = ({ children, title, open, closeTitle, onClose }) => {
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <Backdrop hidden={!open} onClick={onClose}>
      <div className={styles.CardContainer}>
        <div className={styles.ModalCard} onClick={(e) => e.stopPropagation()}>
          <header
            className={`${styles.ModalTitleContainer} container-sm`}
            style={{
              display: closeTitle ? 'none' : 'flex',
            }}
          >
            <h1>{title}</h1>
            <div>
              <CloseOutlined />
            </div>
          </header>

          <main
            className={`${!closeTitle && styles.ModalContentContainer} ${
              !closeTitle && 'container-sm'
            }`}
          >
            {children}
          </main>
        </div>
      </div>
    </Backdrop>
  );
};

export default Modal;
