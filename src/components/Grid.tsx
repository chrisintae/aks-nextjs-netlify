import Link from 'next/link'

import styles from '../styles/components/grid.module.scss'

// import { PostContent } from "../lib/posts";

type Props = {
    projects: [];
}

const Grid = ({ projects }: Props) => {
    return (
        <section className={`wrapper ${styles.grid}`}>
            {projects.slice(0, 4).map(({ title, type, slug }, i) => (
                <Card 
                key={i}
                title={title}
                type={type}
                slug={slug}
                />
            ))}
        </section>
    )
}

export default Grid


const Card = ({ title, type, slug }) => {
    return (
        <div className={styles.card}>
            <Link href={`/projects/${slug}`}>
                <a>
                    <div className={styles.container}>
                        <div className={styles.inner}>
                            <h2>{title}</h2>
                            <h4>{type}</h4>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}