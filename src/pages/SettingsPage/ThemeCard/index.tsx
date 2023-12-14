import { useContext } from 'react';
import Card from '../../../components/Card';
import styles from './index.module.css';
import { colorMap, colors } from '../../../globalConfig';
import { AppContext } from '../../../components/Context/AppContext';

function ThemeCard() {
  const { handleColorChange } = useContext(AppContext);

  return (
    <Card
      title="主题颜色搭配"
      className={`mt-5`}
      action={
        <div style={{ display: 'flex', gap: '.6rem', alignItems: 'center' }}>
          <h6 className={styles.colorTitle}>当前主题色: </h6>
          <div className={styles.colorShow}></div>
        </div>
      }
    >
      <main className={styles.colorContainer}>
        {colors.map((color: string, idx: number) => (
          <div key={idx} onClick={() => handleColorChange(colorMap[color])}>
            <div style={{ backgroundColor: color }}></div>
          </div>
        ))}
        <div className="flex flex-center flex-align-center">
          <h4 style={{ textAlign: 'center' }}>waiting update...</h4>
        </div>
      </main>
    </Card>
  );
}

export default ThemeCard;
