import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

export async function loadAllMarkdown(dirPath) {
  // Read all .md files from dir, parse frontmatter and content (HTML)
  try {
    const dir = path.join(process.cwd(), dirPath)
    const files = fs.readdirSync(dir)
      .filter(f=>f.endsWith('.md'))
    const data = await Promise.all(files.map(async fname=>{
      const file = fs.readFileSync(path.join(dir, fname), 'utf8')
      const { data, content } = matter(file)
      try {
        const processed = await remark().use(html).process(content)
        return {
          ...data,
          slug: data.slug || fname.replace('.md','').toLowerCase(),
          contentHtml: processed.toString().trim()
        }
      } catch (err) {
        return {...data, slug: fname.replace('.md',''), contentHtml: "<em>Error processing content.</em>" }
      }
    }))
    return data
  } catch (err) {
    console.error("loadAllMarkdown() failed:", err)
    return []
  }
}