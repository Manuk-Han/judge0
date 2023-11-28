import React, {useState} from 'react';
import CodeEditorView from './components/CodeEditorView';
import LanguageSelector from './components/LanguageSelector';
import ResultViewer from './components/ResultViewer';
import SubmitButton from "./components/SubmitButton";
import axios from "axios";

const App = () => {
    const [code, setCode] = useState('');
    const [languageId, setLanguageId] = useState(1);
    const [languageName, setLanguageName] = useState('');
    const [result, setResult] = useState('');

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const handleLanguageChange = (newLanguageId, newLanguageName) => {
        setLanguageId(newLanguageId);
        setLanguageName(newLanguageName)
    };


    const handleRunCode = () => {
        let token = '';

        const formData = new FormData();
        formData.append('source_code', code);
        formData.append('language_id', languageId);

        axios.post('http://34.64.34.50/submissions?base64_encoded=false&wait=false', formData)
            .then(response => {
                const token = response.data.token;

                setTimeout(() => {
                    const url = `http://34.64.34.50/submissions/${token}?base64_encoded=false&fields=stderr,stdout,status_id,language_id`;

                    axios.get(url)
                        .then(response => {
                            const result = response.data.stdout
                            setResult(result === null ? 'error' : result);
                        })
                        .catch(error => {
                            console.error('Error fetching result:', error);
                        });
                }, 1000);
            })
            .catch(error => {
                console.error('Error fetching token:', error);
            });
    };


    return (
        <div style={{backgroundColor: "gainsboro", height: '100vh', width: '100%'}}>
            <div style={{backgroundColor: "gray", height: '10vh', width: '100%'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: "lightgray", height: '50%', width: '100%'}}>
                    <LanguageSelector onChange={handleLanguageChange} />
                    <SubmitButton onClick={handleRunCode} />
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '70%', alignItems: 'center'}}>
                    <CodeEditorView onChange={handleCodeChange} language={languageName} />
                    <ResultViewer result={result} />
                </div>
            </div>
        </div>
    );
};

export default App;