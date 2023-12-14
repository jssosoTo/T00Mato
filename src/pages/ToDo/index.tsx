import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import Card from '../../components/Card';
import { Empty } from 'antd';
import EditToDoModal from '../../components/EditToDoModal';
import DetailModal from '../../components/DetailModal';
import ToDoItem from '../../components/ToDoItem';

export type ModalProps = {
  open: boolean;
  id: number | null;
  title: string | undefined;
  focusTimes: number | null;
  timeLong: number | null;
  giveUpTimes: number | null;
  tomatoLong: number | null;
};

export type EditModalProps = {
  open: boolean;
  isEdit: boolean;
  id?: number | null;
  title: string | undefined;
  tomatoLong: number | null;
  countTimeType: string;
};

export type ToDoProps = {
  id: number | null;
  title: string | undefined;
  focusTimes: number;
  timeLong: number;
  giveUpTimes: number;
  tomatoLong: number | null;
  src?: string;
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
};
const initialEditModalContent = {
  open: false,
  title: undefined,
  isEdit: false,
  tomatoLong: 25,
  countTimeType: '1',
};

function ToDo() {
  const [toDos, setToDos] = useState<ToDoProps[]>([
    {
      id: 1,
      title: '吃饭',
      focusTimes: 2,
      timeLong: 60,
      giveUpTimes: 0,
      tomatoLong: 25,
    },
    {
      id: 2,
      title:
        'testsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      focusTimes: 1,
      timeLong: 60 * 6,
      giveUpTimes: 0,
      tomatoLong: 30,
    },
  ]);
  const [modalContent, setModalContent] =
    useState<ModalProps>(initialModalContent);
  const [editModalContent, setEditModalContent] = useState<EditModalProps>(
    initialEditModalContent
  );

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
      title="待办页面"
      className="mainContainer my-3 flex-1 flex-column gap-3"
      action={
        <button
          className="btn"
          style={{
            border: 'none',

            padding: '1rem 1.2rem',
          }}
          onClick={() =>
            setEditModalContent({ ...initialEditModalContent, open: true })
          }
        >
          <PlusOutlined />
        </button>
      }
    >
      {toDos.map((item) => {
        return (
          <ToDoItem
            key={item.id}
            {...item}
            onClick={setModalContent}
            src="/timeClock"
          />
        );
      })}
      {toDos.length === 0 && (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          description={<span>当前还没有添加待办，点击右上角"+"添加吧</span>}
        />
      )}

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
    </Card>
  );
}

export default ToDo;
