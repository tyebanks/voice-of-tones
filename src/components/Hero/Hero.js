// src/components/Hero/Hero.js
import React from 'react'
import * as styles from './Hero.module.scss' // Assuming you have CSS modules set up

const Hero = () => (
    <section className={styles.hero}>
        <div className={`${styles.content} ${styles.overlay}`}>
            <h1> Welcome to Voice of Tones!</h1>
        </div>
    </section>
)

export default Hero
