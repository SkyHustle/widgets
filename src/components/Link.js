import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (event) => { 
        // Check to see if user wants to open link in another tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        // Route compnent listens for this event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
    <a onClick={onClick} href={href} className={className}>{children}</a>
    );
};

export default Link;