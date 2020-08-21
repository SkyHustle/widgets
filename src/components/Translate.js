import React, { useState } from 'react';
import DropDown from './DropDown';

const options = [
    {
        label: "The Spanish language",
        value: "Spanish"
    },
    {
        label: "The Russian language",
        value: "Russian"
    },
    {
        label: "The Swedish language",
        value: "Swedish"
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
        </div>

    )
};

export default Translate;