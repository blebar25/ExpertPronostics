'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Article } from '../data/articles'

export default function ArticleClient({ article }: { article: Article }) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="relative h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-600 mb-6">
              {article.category}
            </span>
            <h1 className="text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex items-center justify-center text-sm">
              <span>{article.readTime} min de lecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8 font-medium">
              {article.description}
            </p>
            <div className="mt-8 text-gray-700 space-y-6">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <button
              onClick={() => router.push('/articles')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Retour aux articles
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
