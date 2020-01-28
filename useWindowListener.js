import React, { useState, useEffect } from 'react';

function useWindowListener(eventName) {
    const [event, setEvent] = useState();
    
    useEffect(() => {
        window.addEventListener(eventName, (e) => setEvent(e));
        return () => {
            window.removeEventListener(eventName, (e) => setEvent(e));
        }
    }, []);

    return [event];
}

export default useWindowListener;