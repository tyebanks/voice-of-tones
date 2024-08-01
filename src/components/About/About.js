// src/components/About/About.js
import * as React from 'react'
import * as styles from './About.module.scss'
import aboutData from '../../data/aboutData.json'

const WelcomeMsg = ({ message }) => (
    <section className={styles.welcome_msg}>
        <p>
            {' '}
            {message}
            {/* Welcome to my blog! Here you'll find my voice as I share my thoughts
            and experiences on a plethoria of topics! */}
        </p>
    </section>
)

const AuthorBio = ({ bio }) => (
    <section className={styles.author_bio_wrapper}>
        <div className={styles.bio_image_container}>
            <img
                className={styles.bio_image}
                src={require(`../../images/${bio.imageSrc}`).default}
                alt="Author headshot"
            />
        </div>

        <div className={styles.bio_text_container}>
            <h2>Author Bio</h2>
            {bio.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    </section>
)

const BlogFocus = ({ focus }) => (
    <section className={styles.blog_focus_wrapper}>
        <div className={styles.blog_focus_top}>
            <h2>Blog Focus</h2>
            <p className={styles.intro}>{focus.intro}</p>
        </div>
        <div className={styles.octagon_border}>
            <div className={styles.blog_img_container}>
                <img
                    className={styles.blog_img}
                    src={require(`../../images/${focus.imageSrc}`).default}
                    alt="Author excitedly cheering"
                />
            </div>
        </div>

        <div className={styles.blog_focus_bottom}>
            {focus.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            {/* <p>
                Starting a blog has been in the back of my mind for years, but
                of course, crippling anxiety (gotta love it) always held me
                back. I always thought a blog required a certain level of
                openness and that’s just never been who I thought I was. The
                anxiety is still here <em>BUT</em> I decided to do it anyway.
                Voice of Tones blog will explore many of my personal interests,
                sharing my thoughts and experiences along the way. <br /> <br />{' '}
                The focus of this blog will include:
            </p> */}
            <ul className={styles.list}>
                {focus.focusItems.map((item, index) => (
                    <li className={styles.listItem} key={index}>
                        {item}
                    </li>
                ))}
                {/* <li className={styles.listItem}>Books</li>
                <li className={styles.listItem}>Wellness</li>
                <li className={styles.listItem}>Skin & Hair Care</li>
                <li className={styles.listItem}>Décor</li>
                <li className={styles.listItem}>Fashion</li>
                <li className={styles.listItem}>History</li>
                <li className={styles.listItem}>Literature</li>
                <li className={styles.listItem}>Travel</li>
                <li className={styles.listItem}>Music</li> */}
            </ul>
            {focus.closing.map((item, index) => (
                <p key={index} className={styles[item.class] || ''}>
                    {item.text}
                </p>
            ))}
            {/* <p>
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
            <p className={styles.signature}>- Tones</p> */}
        </div>
    </section>
)

const About = () => (
    <article className={styles.wrapper}>
        <WelcomeMsg message={aboutData.welcomeMessage} />
        <AuthorBio bio={aboutData.authorBio} />
        <BlogFocus focus={aboutData.blogFocus} />
    </article>
)

export default About
// import tonesBioImage from '../../images/author-four.jpg'
// import tonesBlogImage from '../../images/author-three.jpg'
