// src/components/Card/Card.js

import * as React from 'react'
import * as styles from './Button.module.scss'

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            {text}
        </button>
    )
}

export default Button
