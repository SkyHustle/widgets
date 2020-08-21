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

    return (
        <DropDown
            title={"Select A Language"}
            options={options}
            selected={language}
            onSelectedChange={setLanguage}
        />
    )
};

export default Translate;