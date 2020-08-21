import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';

// const items = [
//     {
//         title: "What is React?",
//         content: "React is a front end javascript framework"
//     },
//     {
//         title: "Why use React",
//         content: "Because I said so"
//     },
//     {
//         title: "How do you use React?",
//         content: "You don't React uses you!"
//     }
// ]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Color Blue",
        value: "blue"
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Color DropDown</button>
            <br />
            {   showDropdown ?
                <DropDown
                    title={"Select A Color"}
                    options={options} 
                    selected={selected}
                    onSelectedChange={setSelected}
                /> : null
            }
            <Translate />
        </div>
        
    )
};
