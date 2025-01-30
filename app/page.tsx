'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const BASE_PATH = '/';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 opacity-90 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)] z-20"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="bg-blue-500/20 backdrop-blur-sm text-blue-200 text-sm font-medium px-4 py-2 rounded-full">
                92% de réussite sur plus de 50K pronostics
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Expert Pronostics Football
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100">
              Spécialistes des pronostics football avec plus de 10 ans d'expertise. 
              Notre focus unique sur le football maximise vos chances de gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`${BASE_PATH}/offres`}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
              >
                Voir nos offres
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`${BASE_PATH}/resultats`}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition"
              >
                Nos résultats
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-200">Années d'expérience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">92%</div>
              <div className="text-blue-200">Taux de réussite</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-blue-200">Clients satisfaits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-200">Pronostics réalisés</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre expertise et notre méthodologie rigoureuse font la différence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto transform transition-transform group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Expertise Football</h3>
              <p className="text-gray-600 text-center">
                Focus exclusif sur le football pour une analyse approfondie et des résultats optimaux
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">ROI Immédiat</h3>
              <p className="text-gray-600 text-center">
                Rentabilisez votre abonnement dès la première journée grâce à nos pronostics ciblés
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Support dédié</h3>
              <p className="text-gray-600 text-center">
                Une équipe d'experts à votre écoute pour vous accompagner
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos membres satisfaits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">MB</span>
                </div>
                <div>
                  <h4 className="font-semibold">Mohammed Barak</h4>
                  <p className="text-gray-600 text-sm">Client depuis 2 ans</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Je suis impressionné par la qualité des analyses et la régularité des résultats. 
                Grâce à Expert Pronostics, j'ai considérablement amélioré ma gestion de bankroll 
                et mes performances."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">IL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Inès Liz</h4>
                  <p className="text-gray-600 text-sm">Cliente depuis 1 an</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Les analyses sont toujours très détaillées et les pronostics sont d'une grande précision. 
                Le focus sur le football permet vraiment d'avoir des analyses pointues et pertinentes."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">SE</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sacha Elbez</h4>
                  <p className="text-gray-600 text-sm">Client depuis 6 mois</p>
                </div>
              </div>
              <p className="text-gray-600">
                "L'expertise football est vraiment impressionnante. Les conseils de gestion de bankroll 
                sont précieux et m'ont permis de progresser rapidement. Un vrai plus pour tout parieur sérieux."
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Prêt à optimiser vos paris sportifs ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez plus de 5000 clients satisfaits et profitez de notre expertise
            </p>
            <a
              href={`${BASE_PATH}/offres`}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Voir nos offres
            </a>
          </motion.div>
        </div>
      </section>

            {/* Séparateur décoratif avant le footer */}
            <div className="relative h-24 bg-gradient-to-b from-gray-50 to-gray-900">
        <div className="absolute inset-0">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24C480 74 960 74 1440 24V74H0V24Z" fill="currentColor" className="text-gray-900"/>
          </svg>
        </div>
      </div>
    </main>
  )
}
