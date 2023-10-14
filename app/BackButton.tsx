import styles from './style.module.css';
import Link from 'next/link';

export default function BackButton() {
    return (
        <Link href="/" className={styles.backButton}>
            Go Back
        </Link>
    );
}
