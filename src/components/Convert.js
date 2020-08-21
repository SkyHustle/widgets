import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        // The second arg to post is used to provide a body to the request
        const search = async () => {
            const { data } = await  axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params:  {
                    q: text,
                    target: language.value,
                    key: process.env.REACT_APP_GOOGLE_TRANSLATE_KEY
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
        search()    
    }, [language, text]);

    return <div>Translated: {translated}</div>;
};

export default Convert;