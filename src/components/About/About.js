// src/components/About/About.js
import * as React from 'react'
import * as styles from './About.module.scss'
import '../../styles/global.scss' // Import global styles
import tonesBioImage from '../../images/author-four.jpg'
import tonesBlogImage from '../../images/author-three.jpg'

const WelcomeMsg = () => (
    <section className={styles.welcome_msg}>
        <p>
            {' '}
            Welcome to my blog! Here you'll find my voice as I share my thoughts
            and experiences on a plethoria of topics!
        </p>
    </section>
)

const AuthorBio = () => (
    <section className={styles.author_bio_wrapper}>
        <div className={styles.bio_image_container}>
            <img
                className={styles.bio_image}
                src={tonesBioImage}
                alt="Author Bio Pic"
            />
        </div>

        <div className={styles.bio_text_container}>
            <h2>Author Bio</h2>
            <p>
                Hello guys, I’m Toni! I am a freelance writer and rookie blogger
                whose passions include creative writing, travel, art in all its
                forms, and history.
            </p>
            <br />
            <p>
                I’m 23 years old, I graduated from the University of the West
                Indies and earned a Bachelor of Science degree in Tourism
                Management Studies. I also work *now from home*, full time on an
                insurance account.
            </p>
            <br />{' '}
            <p>
                Currently, I am sincerely attempting to simultaneously master
                personal finance, health and wellness, and the meaning of life
                (send help).
            </p>
        </div>
    </section>
)

const BlogFocus = () => (
    <section className={styles.blog_focus_wrapper}>
        <div className={styles.blog_focus_top}>
            <h2>Blog Focus</h2>
            <p>
                So I have <strong>officially</strong> entered the “blogsphere”…
            </p>
        </div>
        <div className={styles.octagon_border}>
            <div className={styles.blog_img_container}>
                <img
                    className={styles.blog_img}
                    src={tonesBlogImage}
                    alt="Author excited picture"
                />
            </div>
        </div>

        <div className={styles.blog_focus_bottom}>
            <p>
                Starting a blog has been in the back of my mind for years, but
                of course, crippling anxiety (gotta love it) always held me
                back. I always thought a blog required a certain level of
                openness and that’s just never been who I thought I was. The
                anxiety is still here <em>BUT</em> I decided to do it anyway.
                Voice of Tones blog will explore many of my personal interests,
                sharing my thoughts and experiences along the way. <br /> <br />{' '}
                The focus of this blog will include:
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Books</li>
                <li className={styles.listItem}>Wellness</li>
                <li className={styles.listItem}>Skin & Hair Care</li>
                <li className={styles.listItem}>Décor</li>
                <li className={styles.listItem}>Fashion</li>
                <li className={styles.listItem}>History</li>
                <li className={styles.listItem}>Literature</li>
                <li className={styles.listItem}>Travel</li>
                <li className={styles.listItem}>Music</li>
            </ul>
            <p>
                These interests not only define who I am but also shape the
                content of this blog. Ultimately, I want to comfortably travel
                the world while writing – both freelancing and creatively.
                Whoever you are, whenever you’re reading this, thank you for
                taking the time out of your day to stop by. Have a look around,
                and if you enjoy anything at all here, feel free to revisit.
                Lastly, in addition to my written blog posts, I may share my
                video content from time to time, so please stay tuned for my
                latest updates!
            </p>
            <p className={styles.signature}>- Tones</p>
        </div>
    </section>
)

const About = () => (
    <article className={styles.wrapper}>
        <WelcomeMsg />
        <AuthorBio />
        <BlogFocus />
    </article>
)

export default About
