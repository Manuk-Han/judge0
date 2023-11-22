import React, { useState } from 'react';

const CodeEditor = ({ onCodeChange }) => {
    const [code, setCode] = useState('');

    const handleCodeChange = (event) => {
        const newCode = event.target.value;
        setCode(newCode);
        onCodeChange(newCode);
    };

    return (
        <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '20px', margin: '20px 10px', width: '40%', minHeight: '250px', height: '60vh' }}>
            <h2>코드 입력 영역</h2>
            <textarea style={{ width: '100%', height: '100%' }} value={code} onChange={handleCodeChange} />
        </div>
    );
};


export default CodeEditor;
