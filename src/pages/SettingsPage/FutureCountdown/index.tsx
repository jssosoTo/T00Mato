import styles from './index.module.css';
import Card from '../../../components/Card';
import {
  PlusOutlined,
  SnippetsOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import { Modal } from 'antd';
import { useState } from 'react';

function FutureCountdown() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    date: string;
    isFinished: boolean;
  }>({
    title: '',
    date: '',
    isFinished: false,
  });

  const arr = [
    { title: 'bonjour', date: '2022-10-17', isFinished: true },
    { title: 'bonjour', date: '2023-11-28', isFinished: false },
    { title: 'bonjour', date: '2023-11-29', isFinished: false },
    { title: 'bonjour', date: '2023-11-30', isFinished: false },
  ];

  return (
    <Card
      title="未来时间轴"
      className={`mt-5`}
      action={
        <button className={`btn ${styles.btnSquare}`}>
          <PlusOutlined />
        </button>
      }
    >
      {arr.length === 0 ? (
        <div>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <SnippetsOutlined style={{ fontSize: '10rem', color: '#aaa' }} />
          </h2>
          <h3
            style={{
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: '1rem',
              marginBottom: '1rem',
              color: '#aaa',
            }}
          >
            未来倒计时是您的未来小目标，您可以在这里添加"考研","高考"等等计划，并设定这些计划的截止日期
          </h3>
        </div>
      ) : (
        <div className={`${styles.countdownItems} flex-column`}>
          {arr.map((item, idx: number) => {
            const { title, date, isFinished } = item;

            const distinction = moment(date).valueOf() - moment().valueOf();
            const countdownContent =
              distinction > 0 ? (
                <>
                  还剩 <span>{Math.ceil(distinction / 3600 / 1000 / 24)}</span>{' '}
                  天
                </>
              ) : (
                <>
                  已过去{' '}
                  <span>
                    {Math.trunc(Math.abs(distinction / 3600 / 1000 / 24))}
                  </span>{' '}
                  天
                </>
              );

            return (
              <div
                key={idx}
                className={styles.cdItem}
                onClick={() => {
                  setModalContent({
                    title,
                    date,
                    isFinished,
                  });
                  setIsModalOpen(true);
                }}
              >
                <div className={styles.cdItemTitleContainer}>
                  <h3>
                    {isFinished ? (
                      <span style={{ textDecoration: 'line-through' }}>
                        {title} (已完成)
                      </span>
                    ) : (
                      <span>{title}</span>
                    )}
                  </h3>
                </div>
                <div className={styles.cdItemOtherContentContainer}>
                  <h3>{countdownContent}</h3>
                  <h4>{moment(date).format('YYYY-MM-DD')}</h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        closeIcon={null}
        footer={null}
      >
        <header className={`${styles.titleHeader} container-sm`}>
          <div className={styles.titleHeaderTitle}>
            <h2>{modalContent.title}</h2>
            <h4>{moment(modalContent.date).format('YYYY-MM-DD')}</h4>
          </div>
          <div className={styles.setFinishedContainer}>
            {modalContent.isFinished ? (
              <CloseCircleOutlined className={styles.closeIcon} />
            ) : (
              <CheckCircleOutlined className={styles.tickIcon} />
            )}
          </div>
        </header>

        <main className={styles.mainContainer}>
          <button className="btn">编辑</button>
          <button className="btn">删除</button>
          <button className="btn">
            <ClockCircleOutlined /> <span>在计时页面显示</span>
          </button>
        </main>
      </Modal>
    </Card>
  );
}

export default FutureCountdown;
