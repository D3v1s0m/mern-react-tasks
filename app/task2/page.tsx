'use client';

import BackButton from '../BackButton';
import Calculator from './Calculator';

export default function Page() {
    return (
        <div>
            <title>Task 2</title>
            <BackButton />
            <h1 style={{textAlign: 'center'}}>Simple Calculator</h1>
            <Calculator />
        </div>
    );
}