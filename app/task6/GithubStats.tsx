'use client'
import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.css';

interface Event {
    type: string;
}

export default function GithubStats() {
    const [repositories, setRepositories] = useState([]);
    const [contributions, setContributions] = useState(0);

    useEffect(() => {
        // Fetch repositories
        fetch('https://api.github.com/users/D3v1s0m/repos')
            .then((response) => response.json())
            .then((data) => setRepositories(data));

        // Fetch contributions
        fetch('https://api.github.com/users/D3v1s0m/events/public')
            .then((response) => response.json())
            .then((data) => {
                const count = data.filter((event : Event) => event.type === 'PushEvent').length;
                setContributions(count);
            });
    }, []);

    return (
        <div className={styles.githubStats}>
            <h2>GitHub Statistics (Only public repositories)</h2>
            <p>Repositories: {repositories.length}</p>
            <p>Total Contributions: {contributions}</p>
        </div>
    );
}
