'use client'

import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
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
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover"
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
    <Magnetic intensity={0.2} actionArea="global" range={200}>
      <Link
        href={link}
        className="text-sm underline underline-offset-4 hover:text-black dark:hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <div className="relative mx-auto min-h-screen max-w-3xl px-8 pb-16 pt-24 md:pb-32 md:pt-32">
      <Spotlight
        className="left-0 top-40 md:-top-80"
        fill="rgba(255, 255, 255, 0.5)"
      />
      <motion.section
        className="mb-24"
        initial="hidden"
        animate="visible"
        variants={VARIANTS_CONTAINER}
      >
        <motion.h1
          className="mb-8 text-4xl font-bold md:text-5xl"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          Chi Tran
        </motion.h1>
        <motion.p
          className="max-w-xl text-sm leading-relaxed md:text-base"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          Machine Learning Engineer at Qualcomm AI Research specializing in edge AI, 
          multimodal learning, and large language models. Published at NeurIPS 2025 
          and EMNLP 2023. Creator of the first Vietnamese MLLM (LaVy) and co-author of 
          PhoGPT. Passionate about building efficient AI systems for real-world applications.
        </motion.p>
      </motion.section>

      <motion.section
        className="mb-24"
        initial="hidden"
        animate="visible"
        variants={VARIANTS_CONTAINER}
      >
        <motion.h2
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-8 text-xs font-bold uppercase tracking-widest"
        >
          Expertise
        </motion.h2>
        <motion.div
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="flex flex-wrap gap-2"
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="mb-24"
        initial="hidden"
        animate="visible"
        variants={VARIANTS_CONTAINER}
      >
        <motion.h2
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-8 text-xs font-bold uppercase tracking-widest"
        >
          Selected Projects
        </motion.h2>
        <motion.ul
          className="space-y-4"
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
        >
          <AnimatedBackground
            defaultValue={PROJECTS[0].id}
            className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {PROJECTS.map((project) => (
              <motion.li
                key={project.id}
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                data-id={project.id}
                className="p-2"
              >
                <MorphingDialog
                  transition={{
                    type: 'spring',
                    bounce: 0.05,
                    duration: 0.25,
                  }}
                >
                  <MorphingDialogTrigger>
                    <Link
                      href={project.link}
                      className="block p-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="font-medium">{project.name}</p>
                      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        {project.description}
                      </p>
                    </Link>
                  </MorphingDialogTrigger>
                  <MorphingDialogContainer>
                    <MorphingDialogContent
                      style={{
                        borderRadius: '12px',
                      }}
                      className="relative h-auto w-[500px] border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
                    >
                      {project.video && (
                        <ProjectVideo src={project.video} />
                      )}
                      <div className="flex flex-col gap-1.5 p-6">
                        <h3 className="font-semibold">{project.name}</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {project.description}
                        </p>
                      </div>
                      <MorphingDialogClose className="text-zinc-950 dark:text-zinc-50" />
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              </motion.li>
            ))}
          </AnimatedBackground>
        </motion.ul>
      </motion.section>

      <motion.section
        className="mb-24"
        initial="hidden"
        animate="visible"
        variants={VARIANTS_CONTAINER}
      >
        <motion.h2
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-8 text-xs font-bold uppercase tracking-widest"
        >
          Work Experience
        </motion.h2>
        <motion.ul
          className="space-y-6"
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
        >
          {WORK_EXPERIENCE.map((job) => (
            <motion.li
              key={job.id}
              variants={VARIANTS_SECTION}
              transition={TRANSITION_SECTION}
            >
              <p className="font-medium">{job.title}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {job.company}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {job.start} - {job.end}
              </p>
              <Link
                href={job.link}
                className="text-sm underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      <motion.section
        className="mb-24"
        initial="hidden"
        animate="visible"
        variants={VARIANTS_CONTAINER}
      >
        <motion.h2
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-8 text-xs font-bold uppercase tracking-widest"
        >
          Publications
        </motion.h2>
        <motion.ul
          className="space-y-4"
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
        >
          {BLOG_POSTS.map((post) => (
            <motion.li
              key={post.uid}
              variants={VARIANTS_SECTION}
              transition={TRANSITION_SECTION}
            >
              <Link
                href={post.link}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-medium">{post.title}</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {post.description}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={VARIANTS_CONTAINER}
      >
        <motion.h2
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="mb-8 text-xs font-bold uppercase tracking-widest"
        >
          Connect
        </motion.h2>
        <motion.div
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="space-y-4"
        >
          <p className="text-sm">
            Feel free to contact me at{' '}
            <Link
              href={`mailto:${EMAIL}`}
              className="underline underline-offset-4"
            >
              {EMAIL}
            </Link>
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
