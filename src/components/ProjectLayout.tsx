import Hero from '../components/Hero'

import styles from '../styles/components/projectlayout.module.scss'

type Props = {
    title: string;
    date: Date;
    slug: string;
    tags: string[];
    author: string;
    description?: string;
    children: React.ReactNode;
}

const ProjectLayout = ({
    title,
    date,
    slug,
    author,
    tags,
    description = "",
    children,
  }: Props) => {
    return (
        <article className={styles.content}>
            <Hero 
            title={title}
            />

            <div className={styles.container}>{children}</div>
            
        </article>
    )
}

export default ProjectLayout
