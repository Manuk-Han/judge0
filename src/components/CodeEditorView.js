import React, {useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

const CodeEditorView = ({onChange, language}) => {
    const [code, setCode] = useState('');

    const handleCodeChange = (value) => {
        const newValue = typeof value === 'string' ? value : '';

        setCode(value.target.value);
        onChange(value.target.value);
    };

    return (
        <div>
            <div style={{
                backgroundColor: '#337ab7',
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
                <p>code</p>
            </div>
            <div style={{
                backgroundColor: '#337ab7',
                color: 'white',
                textAlign: 'center',
                padding: '2px',
                margin: '0px 10px',
                width: '97%',
                minHeight: '200px',
                height: '50vh'
            }}>
                <CodeEditor
                    value={code}
                    language={language}
                    placeholder="Enter your code."
                    padding={15}
                    style={{
                        fontSize: 12,
                        backgroundColor: "white",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        height: '100%'
                    }}
                    options={{
                        lineNumbers: true,
                        scrollbar: {
                            vertical: 'auto',
                            horizontal: 'auto'
                        }
                    }}
                    onChange={handleCodeChange}
                />
            </div>
        </div>
    );
};

export default CodeEditorView;
