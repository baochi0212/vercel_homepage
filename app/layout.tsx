import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

