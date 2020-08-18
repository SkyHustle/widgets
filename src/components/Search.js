import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        console.log("Term UseEffect")
        // Set timeout for 2 seconds
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 2000);

        return () => {
            // Execute this code on the subsequent re-render
            console.log("Timer Reset")
            clearTimeout(timerId);
        };
    }, [term]);

    // This is executed the first render and then
    // Only executed again after the user starts typing and stops for 2 seconds
    // When user starts typing user is setting deboucedTerm
    useEffect(() => {
        console.log("Debounce UseEffect")
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResults(data.query.search);
        };
        if (debouncedTerm !== "") { search(); }
    }, [debouncedTerm]);

    const renderResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                    >
                    Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term} 
                        onChange={e => setTerm(e.target.value)} 
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>
    );
}

export default Search;