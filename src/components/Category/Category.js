import * as React from 'react'
// import { Link } from 'gatsby'
import * as styles from './Category.module.scss'
import belleBasics from '../../images/belle_basics.jpg'
import freelancing from '../../images/freelancing.jpg'
import haircare from '../../images/haircare.jpg'
import skincare from '../../images/skincare.jpg'
import tonesAndPoetry from '../../images/tones_and_poetry.jpg'
import twoTreadTravel from '../../images/two_tread_travel.jpg'

const imageMapping = {
    'belle_basics.jpg': belleBasics,
    'freelancing.jpg': freelancing,
    'haircare.jpg': haircare,
    'skincare.jpg': skincare,
    'tones_and_poetry.jpg': tonesAndPoetry,
    'two_tread_travel.jpg': twoTreadTravel,
}

const categories = [
    {
        id: '1',
        text: 'Belle Basics',
        image: 'belle_basics.jpg',
        url: '/bellebasics',
    },
    {
        id: '2',
        text: 'Freelancing',
        image: 'freelancing.jpg',
        url: 'freelancing',
    },
    {
        id: '3',
        text: 'Haircare',
        image: 'haircare.jpg',
        url: 'haircare',
    },
    {
        id: '4',
        text: 'Skincare',
        image: 'skincare.jpg',
        url: 'skincare',
    },
    {
        id: '5',
        text: 'Tones & Poetry',
        image: 'tones_and_poetry.jpg',
        url: 'tonesandpoetry',
    },
    {
        id: '6',
        text: 'Two Tread Travel',
        image: 'two_tread_travel.jpg',
        url: 'twotreadtravel',
    },
]

const CategoryCards = () => (
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
                    <div className={styles.category_title}>
                        <p>{category.text}</p>
                    </div>
                </div>
            </div>
        ))}
    </section>
)

export default CategoryCards
