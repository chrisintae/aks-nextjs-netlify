import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import styles from '../../styles/pages/project.module.scss'

import { getContentFrontMatter } from '../../lib/api'

const Project = ({frontmatter: { title, type }, content}) => {
    const bodyContent = hydrate(content, {})

    return (
        <Layout>
            <Hero 
                title={title}
                type={type}
            />
            <div className={styles.bodyContent}>
                <div className={styles.container}>
                    {bodyContent}
                </div>
            </div>
        </Layout>
    )
}

export default Project


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getContentFrontMatter('content/projects').map(it => "/projects/" + it.slug)

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params.project as string;
    const source = fs.readFileSync(join(`content/projects/${slug}.mdx`), 'utf-8')
    const {data: frontmatter, content} = matter(source)
    const mdxSource = await renderToString(content, {});

    return { 
        props: {
            frontmatter,
            slug,
            content: mdxSource
        },
    }
}
