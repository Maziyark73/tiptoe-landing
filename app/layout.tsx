import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Tiptoe Social — The Platform That Works For You',
  description: 'Keep 65% to 90% of what your fans spend. No shadowbans, no restrictions. Meet Aura — your AI producer who never sleeps.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} bg-background`}>
      <head>
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.45.01%E2%80%AFAM.png-2giNZ2PRSmi5Cdtrgh5qHQ3u6zgrbF.jpeg" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.46.13%E2%80%AFAM-pDJd8SUe4EG8kSYkVDP7uoxo5p1J4o.png" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.48.35%E2%80%AFAM-7cpVs7q2bNg4hgJMaasN9IeTb3dZ7S.png" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.49.22%E2%80%AFAM-3SX8t4mm3TEc9fBqqjcAvFGUPMFJus.png" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.50.02%E2%80%AFAM-hL39Jchwjr3kbMiptcp5vm6yc5rYwb.png" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.51.45%E2%80%AFAM-XcjUv8vvywPfxBYEiZqavTtvXKHYtg.png" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.53.09%E2%80%AFAM-aj3RzOitFywCTJMaySO7Bt6Pp1aB0A.png" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.56.05%E2%80%AFAM-uToTvmASLXDBAmQXzJTozjtjQJst55.png" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.56.17%E2%80%AFAM-Qx6O6dEQiZ1VDWfnkNr88uc1GVdoaD.png" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
