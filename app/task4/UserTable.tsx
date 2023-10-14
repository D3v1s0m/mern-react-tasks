'use client'
import React, { useEffect, useState } from 'react';
import styles from './UserTable.module.css';

interface User {
    id: number;
    image: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    username: string;
    domain: string;
    ip: string;
    university: string;
}

export default function UserTable() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [popupImage, setPopupImage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                setUsers(data.users);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    const openPopup = (image: string) => {
        setPopupImage(image);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    useEffect(() => {
        const handleEscapeKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closePopup();
            }
        };

        document.addEventListener('keydown', handleEscapeKeyPress);

        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress);
        };
    }, []);

    if (loading) {
        return <p className={styles.loading}>Loading...</p>;
    }

    return (
        <div>
            <h1>User Table</h1>
            <p>Note: Click the profile picture to open a popup. You can also click the email and domain.</p>
            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>
                                <div className={styles.profilePicContainer}>
                                    <img
                                        src={user.image}
                                        alt={`${user.firstName}'s Profile Pic`}
                                        className={styles.profilePic}
                                        onClick={() => openPopup(user.image)}
                                    />
                                </div>
                            </td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>
                                <a href={`mailto:${user.email}`}>{user.email}</a>
                            </td>
                            <td>{user.username}</td>
                            <td>
                                <a href={`https://${user.domain}`} target="_blank" rel="noopener noreferrer">
                                    {user.domain}
                                </a>
                            </td>
                            <td>{user.ip}</td>
                            <td>{user.university}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {popupImage && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <img src={popupImage} alt="Popup" />
                        <button onClick={closePopup} className={styles.closeButton}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
