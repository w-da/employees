import Spinner from 'react-loader-spinner';

import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <Spinner type="Rings" color="teal" height={100} width={100} />
    </div>
  );
}
