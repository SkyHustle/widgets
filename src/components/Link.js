import React from 'react';

const Link = ({ href, text, className }) => {
    const onClick = (event) => {
        event.preventDefault();
    };

    return (
        <a onClick={onClick} href={href} className={className}>{text}</a>
    );
};

export default Link;