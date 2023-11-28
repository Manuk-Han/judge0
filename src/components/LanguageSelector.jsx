import React from 'react';
import languageList from '../json/languages.json'

const LanguageSelector = ({ onChange }) => {
    const languages = languageList;

    const findIdByName = (name) => {
        const language = languageList.find(item => item.name === name);
        return language ? language.id : null;
    };

    const handleLanguageChange = (event) => {
        const newLanguage = findIdByName(event.target.value)
        onChange(newLanguage, event.target.value)
    };

    return (
        <div style={{marginLeft: '16%'}}>
            <label>Select Language: </label>
            <select onChange={handleLanguageChange}>
                {languages.map((lang) => (
                    <option key={lang.id} value={lang.name} >
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
