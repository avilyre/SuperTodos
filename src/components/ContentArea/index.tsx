import React from 'react';

import { motion } from 'framer-motion';

import './styles.css'

const ContentArea = (props: any) => {
    return (
        <motion.section
            className="main-content"
            initial={{
                opacity: 0,
                translateY: 25
            }}
            animate={{
                opacity:  1,
                translateY: 0,
                transition: {
                    delay: 0.3
                }
            }}
        >
            {props.children}
        </motion.section>
    )
}

export default ContentArea;