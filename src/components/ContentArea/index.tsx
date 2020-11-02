import React, { useEffect, useState } from 'react';

import './styles.css'

const ContentArea = (props: any) => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className={!loaded ? 'main-content' : 'main-content-animate'}>
            {props.children}
        </div>
    )
}

export default ContentArea;