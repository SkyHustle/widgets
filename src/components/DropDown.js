import React, { useState, useEffect, useRef } from 'react';

const DropDown = ({ options, selected, onSelectedChange, label }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            // If one of our renderedOptions is clicked 
            // Escape the click bubble propogation
            if (ref.current.contains(event.target)) { return; }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        // Cleanup function will be called right before the next time useEffect is called
        // It will also be envoked right before the DropDown Component is removed/hidden
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map(option => {
        if (option.value === selected.value) { return null; }
        return (
            <div 
                key={option.value} 
                onClick={() => onSelectedChange(option)} 
                className="item"
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDown;