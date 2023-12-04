import FutureCountdown from './FutureCountdown';
import MyCard from './MyCard';
import styles from './index.module.css';

function SettingsPage() {
  return (
    <main
      className={`container-large ${styles.settingsContainer}`}
      style={{ marginTop: '1rem', marginBottom: '2rem' }}
    >
      <MyCard />
      <FutureCountdown />
    </main>
  );
}

export default SettingsPage;
