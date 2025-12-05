type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'LaVy',
    description: 'First Vietnamese Multimodal Large Language Model (7B parameters) with model weights, training pipeline, and LaVy-Bench benchmark.',
    link: 'https://github.com/baochi0212/LaVy',
    id: 'project1',
  },
  {
    name: 'PhoGPT',
    description: 'Open-source Vietnamese LLM series (4B-7.5B parameters) achieving state-of-the-art performance on Vietnamese NLP benchmarks.',
    link: 'https://github.com/VinAIResearch/PhoGPT',
    id: 'project2',
  },
  {
    name: 'MISCA',
    description: 'State-of-the-art multi-intent detection and slot filling model achieving SOTA accuracy on MixATIS and MixSNIPS benchmarks.',
    link: 'https://github.com/VinAIResearch/MISCA',
    id: 'project3',
  },
  {
    name: 'Portrayer',
    description: 'MLLM optimized for long-form generation (1000+ tokens) in image-text QA scenarios with dynamic context window.',
    link: 'https://github.com/baochi0212/Portrayer',
    id: 'project4',
  },
  {
    name: 'VinAI Writer',
    description: 'Production-grade Vietnamese writing assistant for grammar error correction serving 10,000+ users with 92% accuracy.',
    link: 'https://www.youtube.com/watch?v=fUkC6dft7ps',
    id: 'project5',
  },
  {
    name: 'TourxQA',
    description: 'End-to-end tourism chatbot system utilizing BERT-based models for intent classification (95% accuracy) and extractive QA.',
    link: 'https://github.com/baochi0212/tourxQA',
    id: 'project6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Qualcomm AI Research',
    title: 'Machine Learning Engineer',
    start: 'Jan 2025',
    end: 'Present',
    link: 'https://www.qualcomm.com/research/artificial-intelligence/ai-research',
    id: 'work1',
  },
  {
    company: 'VinAI Research',
    title: 'Research Engineer',
    start: 'Feb 2023',
    end: 'Aug 2024',
    link: 'https://www.vinai.io/',
    id: 'work2',
  },
  {
    company: 'BKAI Research Center',
    title: 'Research Assistant',
    start: 'Jun 2022',
    end: 'Aug 2024',
    link: 'https://bkai.ai/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'LaVy: Vietnamese Multimodal Large Language Model',
    description: 'First Vietnamese MLLM addressing low-resource multimodal challenges. Published in arXiv 2024.',
    link: 'https://arxiv.org/abs/2404.07922',
    uid: 'blog-1',
  },
  {
    title: 'Improved Training Technique for Shortcut Models',
    description: 'Novel approaches to training shortcut models for efficient inference. Published at NeurIPS 2025.',
    link: 'https://openreview.net/pdf?id=ovUuNzZZbK',
    uid: 'blog-2',
  },
  {
    title: 'MISCA: A Joint Model for Multiple Intent Detection and Slot Filling',
    description: 'State-of-the-art on MixATIS & MixSNIPS benchmarks. Published at EMNLP 2023.',
    link: 'https://aclanthology.org/2023.findings-emnlp.841/',
    uid: 'blog-3',
  },
  {
    title: 'PhoGPT: Generative Pre-training for Vietnamese',
    description: 'First open-source Vietnamese LLM with comprehensive training and inference code.',
    link: 'https://arxiv.org/abs/2311.02945',
    uid: 'blog-4',
  },
  {
    title: 'AccurateRAG: Building Accurate Retrieval-Augmented QA Applications',
    description: 'Framework for building accurate retrieval-augmented question-answering applications.',
    link: 'https://arxiv.org/abs/2510.02243',
    uid: 'blog-5',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/baochi0212',
  },
  {
    label: 'Google Scholar',
    link: 'https://scholar.google.com/citations?user=D6WZnA0AAAAJ&hl=en',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chi-tran', // Update with your actual LinkedIn URL
  },
]

export const EMAIL = 'chitb.work@gmail.com'
