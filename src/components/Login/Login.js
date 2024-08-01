import * as React from 'react';
// import { Link } from 'gatsby'
import * as styles from './Login.module.scss';




const Login = () => (
    <section className={styles.blog_categories_wrapper}>
        {categories.map((category) => (
            <div
                key={category.id}
                className={styles.category}
                style={{
                    backgroundImage: `url(${imageMapping[category.image]})`,
                }}
            >
                <div className={styles.inner_box}>
                    <span className={styles.top}></span>
                    <span className={styles.right}></span>
                    <span className={styles.bottom}></span>
                    <span className={styles.left}></span>
                    <p>{category.text}</p>
                </div>
            </div>
        ))}
    </section>
)

export default Login