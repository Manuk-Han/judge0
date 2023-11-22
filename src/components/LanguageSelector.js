import React from 'react';

const LanguageSelector = ({ onLanguageChange }) => {
    const languages = ['JavaScript', 'Python', 'Java', 'C++'];

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        onLanguageChange(selectedLanguage);
    };

    return (
        <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '20px', margin: '20px 10px', width: '10%', minHeight: '250px', height: '60vh' }}>
            <h2>언어 선택</h2>
            <select onChange={handleLanguageChange} style={{ width: '100%', height: '30px' }}>
                {languages.map((language, index) => (
                    <option key={index} value={language}>
                        {language}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;