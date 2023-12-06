import FutureCountdown from './FutureCountdown';
import MyCard from './MyCard';
import ThemeCard from './ThemeCard';
import styles from './index.module.css';

function SettingsPage() {
  return (
    <main
      className={`container-large ${styles.settingsContainer}`}
      style={{ marginTop: '1rem', marginBottom: '2rem' }}
    >
      <MyCard />
      <FutureCountdown />
      <ThemeCard />
    </main>
  );
}

export default SettingsPage;
