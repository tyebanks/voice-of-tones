import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './Blog.module.scss'

const navLinks = [
    { text: 'Home', url: '' },
    { text: 'About', url: 'about', badge: false },
    { text: 'Blog', url: 'blog' },
    { text: 'Contact', url: 'contact' },
    { text: 'Login', url: 'login' },
]

const Blog = () => (
    <nav className={styles.nav}>
        {navLinks.map((link, i) => (
            <React.Fragment key={link.url}>
                <Link className={styles.navLink} to={`/${link.url}`}>
                    {link.text}
                </Link>
            </React.Fragment>
        ))}
       
    </nav>
)

export default Blog
