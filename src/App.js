import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
    return (
        <div>
            <br />
            <Accordion items={items} />
        </div>
        
    )
};
