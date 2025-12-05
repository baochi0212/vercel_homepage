import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Tran - Machine Learning Engineer',
  description: 'Machine Learning Engineer at Qualcomm AI Research. Specializing in edge AI, multimodal learning, and LLMs. Published at NeurIPS and EMNLP.',
  openGraph: {
    title: 'Chi Tran - Machine Learning Engineer',
    description: 'Machine Learning Engineer specializing in edge AI and multimodal learning',
    siteName: 'Chi Tran Portfolio',
    locale: 'en_US',
    type: 'website',
  },
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

// Then in the render:
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
