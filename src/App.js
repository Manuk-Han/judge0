import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import LanguageSelector from './components/LanguageSelector';
import ResultViewer from './components/ResultViewer';

const App = () => {
    const [code, setCode] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
    const [result, setResult] = useState('');

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const handleLanguageChange = (newLanguage) => {
        setSelectedLanguage(newLanguage);
    };

    const handleRunCode = () => {
        // 여기서 서버로 데이터를 보내고, 결과를 받아와서 setResult로 설정
        // 서버 요청은 예를 들면 fetch를 사용하거나 axios를 이용할 수 있습니다.
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: '70%' }}>
                <CodeEditor onCodeChange={handleCodeChange} />
                <LanguageSelector onLanguageChange={handleLanguageChange} />
            </div>
            <button onClick={handleRunCode} style={{ marginTop: '10px' }}>전송</button>
            <ResultViewer result={result} />
        </div>
    );
};

export default App;