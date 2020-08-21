import React, { useState } from 'react';
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
        value: "bs-BA"
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [term, setTerm] = useState("Hi There")

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <DropDown
                title={"Select A Language"}
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <Convert term={term} language={language.value} />
        </div>

    )
};

export default Translate;