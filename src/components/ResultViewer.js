import React from 'react';

const ResultViewer = ({result}) => {
    return (
        <div>
            <div style={{
                backgroundColor: 'rgb(85 237 88)',
                color: 'white',
                textAlign: 'center',
                padding: '2px',
                marginTop: '20px',
                marginLeft: '10px',
                width: '15%',
                minHeight: '3px',
                height: '3vh',
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <p>result</p>
            </div>
            <div style={{
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                padding: '2px',
                margin: '0px 10px',
                width: '97%',
                minHeight: '170px',
                height: '10%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '2px solid rgb(85 237 88)'
            }}>
            <pre style={{
                width: '100%',
                height: '80%',
                margin: 'auto',
                overflow: 'auto',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word'
            }}>
        {result}
      </pre>
            </div>
        </div>
    );
};

export default ResultViewer;
