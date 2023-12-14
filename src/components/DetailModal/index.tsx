import { Modal } from 'antd';
import styles from './index.module.css';
import { UnorderedListOutlined, PieChartOutlined } from '@ant-design/icons';
import { ModalProps } from '../../pages/ToDo';

const DetailModal: React.FC<{
  modalContent: ModalProps;
  handleCancelDetailModal: () => void;
  openEditModal: () => void;
}> = ({ modalContent, handleCancelDetailModal, openEditModal }) => {
  return (
    <Modal
      destroyOnClose
      closeIcon={null}
      footer={null}
      open={modalContent.open}
      onCancel={handleCancelDetailModal}
    >
      <header className={styles.ModalHeader}>
        <h2>{modalContent.title}</h2>
      </header>
      <main className={styles.ModalMain}>
        <div className={styles.ModalBtns}>
          <button onClick={openEditModal}>编辑</button>
          <button>删除</button>
          <button className="flex flex-align-center flex-center gap-5">
            <span className="flex flex-align-center flex-center">
              <UnorderedListOutlined />
            </span>
            <span>详情历史记录</span>
          </button>
          <button className="flex flex-align-center flex-center gap-5">
            <span className="flex flex-align-center flex-center">
              <PieChartOutlined />
            </span>
            <span>详情数据统计</span>
          </button>
        </div>
        <div className={styles.ModalData}>
          <div className={styles.ModalDataTitle}>累计数据</div>
          <div className={styles.ModalDataContent}>
            <div className={styles.ModalDataItem}>
              <h6>专注次数</h6>
              <h4>{modalContent.focusTimes}</h4>
            </div>
            <div className={styles.ModalDataItem}>
              <h6>时长</h6>
              <h4>
                {Math.trunc((modalContent.timeLong || 0) / 60)}
                <span>分钟</span>
              </h4>
            </div>
            <div className={styles.ModalDataItem}>
              <h6>放弃次数</h6>
              <h4>{modalContent.giveUpTimes}</h4>
            </div>
          </div>
        </div>
      </main>
    </Modal>
  );
};

export default DetailModal;
