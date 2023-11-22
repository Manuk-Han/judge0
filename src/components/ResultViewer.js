import React from 'react';

const ResultViewer = ({ result }) => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '20px', margin: '20px 10px', width: '40%', minHeight: '250px', height: '60vh' }}>
            <h2>코드 실행 결과</h2>
            <pre>{result}</pre>
        </div>
    );
};

export default ResultViewer;