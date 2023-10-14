import React, { useState, useEffect } from 'react';
import styles from './color-picker.module.css';

interface ColorPickerProps {
    colors: string[];
}

const rgbToHex = (rgb : String) => {
    const parts = rgb.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
    if (parts) {
        const r = parseInt(parts[1]);
        const g = parseInt(parts[2]);
        const b = parseInt(parts[3]);

        const toHex = (c : Number) => c.toString(16).padStart(2, '0');

        return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    }
    return '#FFFFFF';
};


export default function ColorPicker({ colors }: ColorPickerProps) {
    useEffect(() => {
        // This code runs on the client side and has access to window and document.
        const pageBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
        setSelectedColor(rgbToHex(pageBackgroundColor));
    }, []);
    const [isOpen, setIsOpen] = useState(true);
    const [selectedColor, setSelectedColor] = useState<string | null>("#FFFFFF");

    const toggleColorList = () => {
        setIsOpen(!isOpen);
    };

    const handleColorClick = (color: string) => {
        setSelectedColor(color);
        setIsOpen(false);

        // Set the background color of the whole page
        if (color) {
            document.body.style.backgroundColor = color;
        } else {
            document.body.style.backgroundColor = ''; // Reset the background color
        }
    };

    return (
        <div className={styles.colorPickerContainer}>
            <button className={styles.button} onClick={toggleColorList}>Pick a color</button>
            {isOpen && (
                <ul className={styles.colorList}>
                    {colors.map((color, index) => (
                        <li
                            key={index}
                            style={{
                                backgroundColor: color,
                                border: color === selectedColor ? '2px solid black' : 'none',
                            }}
                            onClick={() => handleColorClick(color)}
                        >
                            {color === selectedColor ? (
                                <span className={styles.checkmark}>&#10003;</span>
                            ) : null}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
