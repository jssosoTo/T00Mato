import { Modal } from 'antd';
import styles from './index.module.css';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Segment from '../Segment';
import { useState } from 'react';
import { EditButtonEnum } from './config';
import { EditModalProps } from '../../pages/ToDo';

const EditToDoModal: React.FC<{
  editModalContent: EditModalProps;
  handleChangeEditModal: (activeKey: number) => void;
  handleCancel: () => void;
}> = ({ editModalContent, handleChangeEditModal, handleCancel }) => {
  const [activeKey, setActiveKey] = useState<number>(0);

  return (
    <Modal
      destroyOnClose
      closeIcon={null}
      footer={null}
      open={editModalContent.open}
      onCancel={handleCancel}
    >
      <header className={styles.EditModalHeader}>
        <div
          className="flex flex-items-center cursor-pointer"
          onClick={handleCancel}
        >
          <CloseOutlined />
        </div>
        <h2>{editModalContent.isEdit ? '编辑' : '新增'}待办</h2>
        <div className="flex flex-items-center cursor-pointer">
          <CheckOutlined />
        </div>
      </header>
      <main className={styles.ModalMain}>
        <Segment
          activeKey={activeKey}
          selections={['普通番茄钟', '养习惯', '定目标']}
          onClick={setActiveKey}
        />

        <div className="px-5">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="请输入标题"
            className={styles.Input}
            value={editModalContent.title!}
            onChange={handleChangeEditModal}
          />
        </div>

        <div className={styles.Btns}>
          <button
            name="countTimeType"
            value={EditButtonEnum.countdown}
            className={`btn ${styles.btn} ${
              editModalContent.countTimeType ===
              String(EditButtonEnum.countdown)
                ? styles.selectedBtn
                : ''
            }`}
            onClick={handleChangeEditModal}
          >
            倒计时
          </button>
          <button
            name="countTimeType"
            value={EditButtonEnum.forwardTiming}
            className={`btn ${styles.btn} ${
              editModalContent.countTimeType ===
              String(EditButtonEnum.forwardTiming)
                ? styles.selectedBtn
                : ''
            }`}
            onClick={handleChangeEditModal}
          >
            正向计时
          </button>
          <button
            name="countTimeType"
            value={EditButtonEnum.untimed}
            className={`btn ${styles.btn} ${
              editModalContent.countTimeType === String(EditButtonEnum.untimed)
                ? styles.selectedBtn
                : ''
            }`}
            onClick={handleChangeEditModal}
          >
            不计时
          </button>
        </div>

        <div
          className={`${styles.TimeBarContainer} ${
            !(
              editModalContent.countTimeType ===
              String(EditButtonEnum.countdown)
            ) && styles.FadeContainer
          }`}
        >
          <h2>当前设置为 {editModalContent.tomatoLong} 分钟</h2>
          <input
            id="tomatoLong"
            name="tomatoLong"
            type="range"
            min={1}
            max={180}
            value={editModalContent.tomatoLong!}
            onChange={handleChangeEditModal}
          />
        </div>
      </main>
    </Modal>
  );
};

export default EditToDoModal;
