import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export const getContentFrontMatter = (fileDir: string) => {

    // get files from project dir
    const file_dir = fs.readdirSync(fileDir)

    // get slug + frontmatter
    const files = file_dir.map((fileName) => {

        // create slug  
        // const slug = fileName.replace(/\.mdx$/, '').concat('/')

        // get frontmatter
        const markdownWithMeta = fs.readFileSync(join(fileDir, fileName), 'utf-8')

        // frontmatter object
        const { data:frontmatter } = matter(markdownWithMeta)

        return frontmatter
    })

    return files
}