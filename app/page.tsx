'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle,
  Users,
  Heart,
  Zap,
} from 'lucide-react'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
    },
  }),
}

const cards = [
  {
    icon: Heart,
    title: 'Create Real Human Connections',
    desc: 'Build genuine bonds with elderly people through conversations, companionship, and shared experiences.',
    color1: '#22c55e',
    color2: '#15803d',
    glow: 'rgba(34,197,94,0.45)',
    ring: 'conic-gradient(from 0deg, #22c55e, #86efac, #22c55e)',
  },
  {
    icon: Users,
    title: 'Support With Compassion',
    desc: 'Receive onboarding, guidance, and community support to help you confidently volunteer and contribute.',
    color1: '#3b82f6',
    color2: '#1d4ed8',
    glow: 'rgba(59,130,246,0.45)',
    ring: 'conic-gradient(from 0deg, #3b82f6, #93c5fd, #3b82f6)',
  },
  {
    icon: Zap,
    title: 'Make a Social Impact',
    desc: 'Help reduce loneliness among seniors while becoming part of a movement focused on care, dignity, and human connection.',
    color1: '#f59e0b',
    color2: '#d97706',
    glow: 'rgba(245,158,11,0.45)',
    ring: 'conic-gradient(from 0deg, #f59e0b, #fde68a, #f59e0b)',
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <section
        className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-32"
        style={{
          background:
            'linear-gradient(180deg, #fffef7 0%, #ffffff 100%)',
        }}
      >
        {/* Floating Glow */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute top-20 left-10 w-44 h-44 rounded-full blur-3xl"
          style={{ background: '#ffe08a' }}
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute bottom-10 right-10 w-52 h-52 rounded-full blur-3xl"
          style={{ background: '#f5c547' }}
        />

        {/* Floating Particles */}
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i,
            }}
            className="absolute rounded-full"
            style={{
              width: `${6 + i}px`,
              height: `${6 + i}px`,
              background: '#f5c547',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(2px)',
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* BADGES */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          >
            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: -1,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto shadow-md"
              style={{
                backgroundColor: '#fff4d6',
                color: '#8b6f1f',
              }}
            >
              <span>🤝</span>
              <span>Meaningful Volunteer Opportunities</span>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: 1,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium w-fit mx-auto shadow-md"
            >
              <span>🌍</span>
              <span>Building Human Connections Across Generations</span>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1
                  variants={fadeUp}
                  className="text-5xl md:text-6xl font-bold leading-tight"
                  style={{ color: '#1a1410' }}
                >
                  Join Us as GrandPal Buddies and
                  <br />

                  <motion.span
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                    }}
                    className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-[length:200%_200%] bg-clip-text text-transparent"
                  >
                    Bring Joy to Elderly Lives
                  </motion.span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-lg leading-relaxed"
                  style={{ color: '#4a4138' }}
                >
                  Spend meaningful time with elderly people through
                  companionship, conversations, support, and shared moments.
                  Become part of a growing volunteer community dedicated to
                  reducing loneliness and serving society with compassion.
                </motion.p>
              </div>

              {/* FEATURES */}
              <div className="space-y-4">
                {[
                  'Meaningful volunteering opportunities',
                  'Training, guidance, and community support',
                  'Make a real difference in someone’s daily life',
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle
                        style={{ color: '#f5c547' }}
                        size={22}
                      />
                    </motion.div>

                    <span style={{ color: '#4a4138' }}>{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div
                  whileHover={{
                    scale: 1.07,
                    y: -4,
                    boxShadow:
                      '0 20px 40px rgba(212,160,36,0.35)',
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    href="/join"
                    className="inline-flex items-center justify-center px-8 py-4 text-white rounded-xl transition font-semibold shadow-2xl"
                    style={{
                      background:
                        'linear-gradient(90deg, #f5c547 0%, #d4a024 100%)',
                    }}
                  >
                    <ArrowRight className="mr-2" size={20} />
                    Join Us Today
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.07,
                    y: -4,
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition font-semibold shadow-md"
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#d4a024',
                      border: '2px solid #f5c547',
                    }}
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="hidden md:flex items-center justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                whileHover={{
                  scale: 1.03,
                  rotate: 1,
                }}
                className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/family-with-caregivers.jpg"
                  alt="GrandPal Buddies"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />

                <motion.div
                  animate={{
                    x: ['-150%', '250%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-0 left-0 w-1/3 h-full skew-x-12"
                  style={{
                    background:
                      'linear-gradient(to right, transparent, rgba(255,255,255,0.45), transparent)',
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: '#1a1410' }}
            >
              Why Become a GrandPal Buddy?
            </h2>

            <p className="text-lg" style={{ color: '#6b6258' }}>
              A meaningful way to connect, contribute, and create impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, idx) => {
              const Icon = card.icon

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  className="group relative p-[1.5px] rounded-3xl overflow-hidden"
                >
                  {/* Rotating Border */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 14,
                      ease: 'linear',
                    }}
                    className="absolute inset-[-100%]"
                    style={{
                      background:
                        'conic-gradient(from 0deg, transparent, rgba(245,197,71,0.9), transparent 30%)',
                    }}
                  />

                  {/* Card */}
                  <div
                    className="relative h-full rounded-3xl p-8 backdrop-blur-xl shadow-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, #fffef7 0%, #fff7db 100%)',
                    }}
                  >
                    {/* Decorative Blob */}
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 5,
                      }}
                      className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10"
                      style={{ background: card.color1 }}
                    />

                    {/* ICON */}
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.18,
                      }}
                      transition={{ duration: 0.8 }}
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    >
                      {/* Glow Ring */}
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 10,
                          ease: 'linear',
                        }}
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: card.ring,
                          padding: '2px',
                        }}
                      >
                        <div className="w-full h-full rounded-2xl bg-[#fff8e7]" />
                      </motion.div>

                      {/* Glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.25, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.5,
                        }}
                        className="absolute w-16 h-16 rounded-2xl blur-xl"
                        style={{
                          background: card.glow,
                        }}
                      />

                      {/* Icon Box */}
                      <div
                        className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${card.color1} 0%, ${card.color2} 100%)`,
                        }}
                      >
                        <Icon
                          className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                          size={28}
                        />
                      </div>
                    </motion.div>

                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: '#1a1410' }}
                    >
                      {card.title}
                    </h3>

                    <p style={{ color: '#4a4138' }}>
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}