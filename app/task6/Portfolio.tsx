import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.css';
import GithubStats from './GithubStats';
import Image from 'next/image';

export default function Portfolio() {
    const portfolioItems = [
        {
            title: 'MERN - HTML CSS',
            description: 'MERN Tasks related to HTML and CSS.',
            displayLink: 'https://example.com/project1',
            sourceLink: 'https://example.com/project1',
        },
        {
            title: 'MERN - BS and JS',
            description: 'MERN Tasks related to Bootstrap and JavaScript.',
            displayLink: 'https://example.com/project2',
            sourceLink: 'https://example.com/project2',
        },
        {
            title: 'MERN - React',
            description: 'MERN Tasks related to React.',
            displayLink: 'https://example.com/project3',
            sourceLink: 'https://example.com/project3',
        },
    ];

    const skills = [
        { name: 'JavaScript', image: 'javascript.png' },
        { name: 'React', image: 'react.png' },
        { name: 'Node.js', image: 'nodejs.png' },
        { name: 'HTML', image: 'html.png' },
        { name: 'CSS', image: 'css.png' },
        { name: 'TypeScript', image: 'typescript.png' },
        { name: 'Python', image: 'python.png' },
        { name: 'Java', image: 'java.png' },
        { name: 'C++', image: 'cpp.png' },
        { name: 'TensorFlow', image: 'tensorflow.png' },
        { name: 'MongoDB', image: 'mongodb.png' },
        { name: 'PostgreSQL', image: 'postgresql.png' },
        { name: 'MySQL', image: 'mysql.png' },
    ].sort((a, b) => a.name.localeCompare(b.name));
    

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.title}>Portfolio</h1>

            <div className={styles.portfolioItems}>
                {portfolioItems.map((item, index) => (
                    <div key={index} className={styles.portfolioItem}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.displayLink} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                        <a href={item.sourceLink} target="_blank" rel="noopener noreferrer">
                            View Source
                        </a>
                    </div>
                ))}
            </div>

            <GithubStats />

            <div className={styles.skills}>
                <h2>Skills</h2>
                <div className={styles.skillImages}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skill}>
                            <Image width="40" height="40" src={`/images/${skill.image}`} alt={skill.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}