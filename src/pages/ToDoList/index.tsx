import { useState } from 'react';
import Card from '../../components/Card';
import {
  PlusOutlined,
  RightOutlined,
  CloseOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import styles from './index.module.css';
import ToDoItem from '../../components/ToDoItem';
import EditToDoModal from '../../components/EditToDoModal';
import DetailModal from '../../components/DetailModal';
import { Empty, Modal } from 'antd';
import { colors } from '../../globalConfig';

type ModalProps = {
  open: boolean;
  id: number | null;
  title: string | undefined;
  focusTimes: number | null;
  timeLong: number | null;
  giveUpTimes: number | null;
  tomatoLong: number | null;
};

type EditModalProps = {
  open: boolean;
  isEdit: boolean;
  id?: number | null;
  title: string | undefined;
  tomatoLong: number | null;
  countTimeType: string;
  class: string | null;
};

type ToDoProps = {
  id: number | null;
  title: string | undefined;
  focusTimes: number;
  timeLong: number;
  giveUpTimes: number;
  tomatoLong: number | null;
  class: string | null;
  onClick?: any;
};

const initialModalContent = {
  open: false,
  id: null,
  title: undefined,
  focusTimes: null,
  timeLong: null,
  giveUpTimes: null,
  tomatoLong: null,
  class: null,
};
const initialEditModalContent = {
  open: false,
  title: undefined,
  isEdit: false,
  tomatoLong: 25,
  countTimeType: '1',
  class: null,
};
const initialClassModalContent = {
  open: false,
  title: '',
  color: colors[0],
  id: null,
};

function ToDoList() {
  const [toDo, setToDo] = useState<
    {
      id: string;
      title: string;
      children: ToDoProps[];
    }[]
  >([
    {
      id: '001',
      title: 'test class',
      children: [
        {
          id: 1,
          title: '吃饭',
          focusTimes: 2,
          timeLong: 60,
          giveUpTimes: 0,
          tomatoLong: 25,
          class: '001',
        },
        {
          id: 2,
          title: '打游戏',
          focusTimes: 12,
          timeLong: 120,
          giveUpTimes: 0,
          tomatoLong: 20,
          class: '001',
        },
        {
          id: 3,
          title: '随你',
          focusTimes: 4,
          timeLong: 30,
          giveUpTimes: 0,
          tomatoLong: 30,
          class: '001',
        },
      ],
    },
    {
      id: '002',
      title: 'hello class',
      children: [
        {
          id: 5,
          title: '吃夜宵',
          focusTimes: 12,
          timeLong: 150,
          giveUpTimes: 0,
          tomatoLong: 25,
          class: '002',
        },
      ],
    },
  ]);
  const [isToDoShow, setIsToDoShow] = useState(
    toDo.map((_, idx: number) => ({ key: idx, isShow: false }))
  );
  const [modalContent, setModalContent] =
    useState<ModalProps>(initialModalContent);
  const [editModalContent, setEditModalContent] = useState<EditModalProps>(
    initialEditModalContent
  );
  const [classModalContent, setClassModalContent] = useState({
    ...initialClassModalContent,
  });

  const handleChangeEditModal = (e) =>
    setEditModalContent({
      ...editModalContent,
      [e.target.name]: e.target.value,
    });

  const handleCancel = () =>
    setEditModalContent({ ...initialEditModalContent });

  const handleCancelDetailModal = () =>
    setModalContent({ ...initialModalContent });
  const openEditModal = () => {
    const { focusTimes, giveUpTimes, timeLong, ...formatData } = modalContent;
    setEditModalContent({
      ...initialEditModalContent,
      ...formatData,
      isEdit: true,
    });
    handleCancelDetailModal();
  };

  return (
    <Card
      title="待办集"
      className={`mainContainer my-3 ${styles.CardP_0}`}
      action={
        <button
          className="btn"
          style={{
            border: 'none',

            padding: '1rem 1.2rem',
          }}
          onClick={() =>
            setClassModalContent({ ...initialClassModalContent, open: true })
          }
        >
          <PlusOutlined />
        </button>
      }
    >
      <main>
        {toDo.map((item, idx) => {
          return (
            <div className={styles.Item}>
              <div className={styles.ClassContainer}>
                <h2>{item.title}</h2>
                <div className={styles.ClassBtns}>
                  <span
                    className={isToDoShow[idx].isShow && styles.Rotate}
                    onClick={() =>
                      setIsToDoShow(
                        isToDoShow.map((item, i) => {
                          if (idx === i)
                            return { ...item, isShow: !item.isShow };
                          return item;
                        })
                      )
                    }
                  >
                    <RightOutlined />
                  </span>
                  <span
                    onClick={() =>
                      setEditModalContent({
                        ...initialEditModalContent,
                        class: item.id,
                        open: true,
                      })
                    }
                  >
                    <PlusOutlined />
                  </span>
                </div>
              </div>
              <div
                className={`${styles.ToDoItemContainer} py-3 px-5 ${
                  !isToDoShow[idx].isShow && styles.Hidden
                }`}
              >
                {item.children.map((childItem) => (
                  <ToDoItem
                    key={childItem.id}
                    {...childItem}
                    onClick={setModalContent}
                  />
                ))}
                {item.children.length === 0 && (
                  <Empty
                    description={
                      <span style={{ color: 'white' }}>
                        当前还没有添加待办，点击右上角"+"添加吧
                      </span>
                    }
                  />
                )}
              </div>
            </div>
          );
        })}
        {toDo.length === 0 && (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            description={<span>当前还没有添加待办，点击右上角"+"添加吧</span>}
          />
        )}
      </main>
      <EditToDoModal
        editModalContent={editModalContent}
        handleCancel={handleCancel}
        handleChangeEditModal={handleChangeEditModal}
      />
      <DetailModal
        modalContent={modalContent}
        handleCancelDetailModal={handleCancelDetailModal}
        openEditModal={openEditModal}
      />
      <Modal
        destroyOnClose
        open={classModalContent.open}
        onCancel={() => setClassModalContent({ ...initialClassModalContent })}
        closeIcon={null}
        footer={null}
      >
        <header className={styles.EditModalHeader}>
          <div
            className="flex flex-items-center cursor-pointer"
            onClick={() =>
              setClassModalContent({ ...initialClassModalContent })
            }
          >
            <CloseOutlined />
          </div>
          <h2>添加待办集</h2>
          <div className="flex flex-items-center cursor-pointer">
            <CheckOutlined />
          </div>
        </header>
        <main>
          <div className={styles.titleInputContainer}>
            <input
              id="title"
              name="title"
              placeholder="请输入待办集名称"
              value={classModalContent.title}
              onChange={(e) =>
                setClassModalContent({
                  ...classModalContent,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.ColorItems}>
            {colors.map((color, idx) => (
              <div
                key={idx}
                className={
                  color === classModalContent.color ? styles.selectedColor : ''
                }
                onClick={() =>
                  setClassModalContent({
                    ...classModalContent,
                    color,
                  })
                }
              >
                <div style={{ backgroundColor: color }}></div>
              </div>
            ))}
          </div>
        </main>
      </Modal>
    </Card>
  );
}

export default ToDoList;
