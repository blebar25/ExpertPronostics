import ArticleClient from './article-client'
import { articles } from '../data/articles'

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)
  
  if (!article) {
    return null
  }

  return <ArticleClient article={article} />
}