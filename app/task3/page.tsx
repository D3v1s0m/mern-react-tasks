'use client'

import BackButton from '../BackButton';
import ColorPicker from './ColorPicker';
import styles from './color-picker.module.css';

export default function Page() {
    return (
        <div>
            <title>Task 3</title>
            <BackButton />
            <div className={styles.noteContainer}>
                <p>Note:</p>
                <p className={styles.hoverContent}>The color will stay the same when you navigate back to home page.</p>
            </div>
            <h1 style={{ textAlign: 'center' }}>Color Picker</h1>
            <ColorPicker colors={['#FF6900', '#FCB901', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF', '#FFFFFF']} />
        </div>
    );
}