import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';

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

    const renderComponent = () => {
        const pathname = window.location.pathname;
        switch (pathname) {
            case "/":
                return <Accordion items={items} />;
            case "/list":
                return <Search />;
            case "/dropdown":
                return (
                    <DropDown 
                        options={options}
                        selected={selected}
                        onSelectedChange={(e) => setSelected(e)}
                        label={"Choose A Color"}
                    />
                );
            case "/translate":
                return <Translate />
            default:
                console.log("Default");
        }
    }

    return (
        <div>
            {renderComponent()}
        </div>
        
    )
};
