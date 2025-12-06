'use client'

import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import Image from 'next/image'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const SKILLS = [
  'Natural Language Processing',
  'Multimodal Learning',
  'Large Language Models',
  'Edge AI',
  'Model Compression',
  'PyTorch',
  'Hugging Face',
  'TensorRT-LLM',
]

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <video
      src={src}
      className="absolute bottom-0 left-0 size-full rounded-md object-cover"
      loop
      autoPlay
      muted
      playsInline
    />
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic>
      <Link
        href={link}
        className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-900"
      >
        {children}
      </Link>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <Spotlight className="absolute left-0 top-0 z-0 size-full" />
      <motion.div
        className="relative z-10 mx-auto flex max-w-3xl flex-col gap-24 p-8 pb-32 pt-32 md:pb-64"
        initial="hidden"
        animate="visible"
        variants={VARIANTS_CONTAINER}
      >
        <motion.div
          className="flex flex-col gap-6"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
            Chi Tran
          </h1>
          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Machine Learning Engineer at Qualcomm AI Research specializing in
            edge AI, multimodal learning, and large language models. Published
            at NeurIPS 2025 and EMNLP 2023. Creator of the first Vietnamese
            MLLM (LaVy) and co-author of PhoGPT. Passionate about building
            efficient AI systems for real-world applications.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Expertise
          </h2>
          <AnimatedBackground
            className="rounded-lg bg-gray-100 dark:bg-gray-900"
            transition={{
              ease: 'easeInOut',
              duration: 0.2,
            }}
            enableHover
          >
            {SKILLS.map((skill) => (
              <div
                key={skill}
                data-id={skill}
                className="cursor-pointer rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-colors dark:text-gray-300"
              >
                {skill}
              </div>
            ))}
          </AnimatedBackground>
        </motion.div>

        {/* Work Experience Section - Moved above Projects */}
        <motion.div
          className="flex flex-col gap-8"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="grid gap-6">
            {WORK_EXPERIENCE.map((job) => (
              <MorphingDialog key={job.id}>
                <MorphingDialogTrigger>
                  <div className="group relative flex cursor-pointer flex-col gap-2 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          {job.company}
                        </p>
                      </div>
                      <Image
                        src={job.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'}
                        alt={job.company}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <p className="text-base text-gray-500 dark:text-gray-500">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent className="relative flex flex-col gap-6 overflow-hidden bg-white p-8 dark:bg-gray-950">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={job.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'}
                          alt={job.company}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {job.title}
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-400">
                            {job.company}
                          </p>
                          <p className="text-base text-gray-500 dark:text-gray-500">
                            {job.start} - {job.end}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={job.link}
                        className="inline-flex rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
                      >
                        View
                      </Link>
                      <MorphingDialogClose className="text-base text-gray-600 dark:text-gray-400" />
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            ))}
          </div>
        </motion.div>

        {/* Publications Section - Moved above Projects */}
        <motion.div
          className="flex flex-col gap-8"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Publications
          </h2>
          <div className="grid gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                href={post.link}
                className="group relative flex gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
              >
                <Image
                  src={post.image || 'https://images.unsplash.com/photo-1516116216624-53e697fedbea'}
                  alt={post.title}
                  width={120}
                  height={120}
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Selected Projects Section - Moved below Publications */}
        <motion.div
          className="flex flex-col gap-8"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Selected Projects
          </h2>
          <div className="grid gap-6">
            {PROJECTS.map((project) => (
              <MorphingDialog key={project.id}>
                <MorphingDialogTrigger>
                  <div className="group relative flex h-52 cursor-pointer flex-col justify-end overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                    <Image
                      src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'}
                      alt={project.name}
                      fill
                      className="absolute inset-0 z-0 object-cover opacity-30 transition-opacity group-hover:opacity-40"
                    />
                    {project.video && <ProjectVideo src={project.video} />}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent className="relative flex h-auto flex-col gap-6 overflow-hidden bg-white p-8 dark:bg-gray-950">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                      {project.video && (
                        <video
                          src={project.video}
                          className="size-full object-cover"
                          loop
                          autoPlay
                          muted
                          playsInline
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={project.link}
                        className="inline-flex rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
                      >
                        View Project
                      </Link>
                      <MorphingDialogClose className="text-base text-gray-600 dark:text-gray-400" />
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Feel free to contact me at{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-gray-900 underline dark:text-white"
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
