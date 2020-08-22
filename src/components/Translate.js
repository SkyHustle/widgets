import React, { useState, useEffect } from 'react';
import DropDown from './DropDown';
import Convert from './Convert';

const options = [
    {
        label: "Spanish",
        value: "es"
    },
    {
        label: "Russian",
        value: "ru"
    },
    {
        label: "Bosnian",
        value: "bs"
    }
]

const Translate = () => {
    const [text, setText] = useState("Hello")
    const [language, setLanguage] = useState(options[0]);
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 1000)

        return () => {
            // Execute this code on the subsequent re-render
            clearTimeout(timerId);
        };
    }, [text, debouncedText]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <DropDown
                label={"Select A Language"}
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={debouncedText} language={language} />
        </div>

    )
};

export default Translate;