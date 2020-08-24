import React from 'react';
import Accordion from './components/Accordion';
// import Search from './components/Search';
// import DropDown from './components/DropDown';
// import Translate from './components/Translate';

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework"
    },
    {
        title: "Why use React",
        content: "Because I said so"
    },
    {
        title: "How do you use React?",
        content: "You don't React uses you!"
    }
]

// const options = [
//     {
//         label: "The Color Red",
//         value: "red"
//     },
//     {
//         label: "The Color Green",
//         value: "green"
//     },
//     {
//         label: "The Color Blue",
//         value: "blue"
//     }
// ]

const renderComponent = () => {
    const pathname = window.location.pathname;
    switch (pathname) {
        case "/":
            return <Accordion items={items} />;
        default:
            console.log("Default");
    }
}

export default () => {
    return (
        <div>
            {renderComponent()}
        </div>
        
    )
};
