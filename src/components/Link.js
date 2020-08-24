import React from 'react';

const Link = ({ href, text, className }) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href)
    };

    return (
        <a onClick={onClick} href={href} className={className}>{text}</a>
    );
};

export default Link;