import Link from 'next/link'

import styles from '../styles/components/grid.module.scss'

import { PostContent } from "../lib/posts";

type Props = {
    projects: PostContent[];
}

const Grid = ({ projects }: Props) => {
    return (
        <section className={`wrapper ${styles.grid}`}>
            {projects.slice(0, 4).map((post, i) => (
                <Card 
                key={i}
                title={post.title}
                slug={post.slug}
                />
            ))}
        </section>
    )
}

export default Grid


const Card = ({ title, slug }) => {
    return (
        <div className={styles.card}>
            <Link href={"/posts/" + slug}>
                <a>
                    <div className={styles.container}>
                        <div className={styles.inner}>
                            <h2>{title}</h2>
                            <h4>Project Type</h4>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}