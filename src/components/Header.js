import React from 'react';
import Link from './Link';

const Header = () => {
 return (
    <div className="ui secondary pointing menu">
        <Link href="/" className="item" text="Accordion" />
         <Link href="/list" className="item" text="List" />
         <Link href="/dropdown" className="item" text="Dropdown" />
         <Link href="/translate" className="item" text="Translate" />
    </div>
 );
}

export default Header;