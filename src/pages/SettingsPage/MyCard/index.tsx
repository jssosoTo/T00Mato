import Card from '../../../components/Card';
import styles from './index.module.css';

function MyCard() {
  return (
    <Card title="我的">
      <div className="account-container">
        <div className={styles.accountItem}>
          <img
            src="https://img1.baidu.com/it/u=2569372894,451658943&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1701363600&t=20ec12c15d94f2d77bec20618de1d2eb"
            alt="avatar"
            className={styles.avatar}
          />
          <div className={`${styles.accountItemContent} flex-column`}>
            <h4>
              <span
                className="main-text-color spacing-small"
                style={{
                  display: 'inline-block',
                  width: '8rem',
                  textAlign: 'left',
                }}
              >
                NAME:
              </span>
              P0PC0RN
            </h4>
            <h4>
              <span
                className="main-text-color spacing-small"
                style={{
                  display: 'inline-block',
                  width: '8rem',
                  textAlign: 'left',
                }}
              >
                GENDER:
              </span>
              MALE
            </h4>
            <h4>
              <span
                className="main-text-color spacing-small"
                style={{
                  display: 'inline-block',
                  width: '8rem',
                  textAlign: 'left',
                }}
              >
                DESCRIPTION:
              </span>
              OLALA DEVELOPER SPEAKING
            </h4>
          </div>
          <div className={`${styles.BtnContainer} flex-column`}>
            <button className="btn">Edit</button>
            <button className="btn">Update</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default MyCard;
