import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormGuard — Auto-backup long form inputs as you type',
  description: 'Never lose your form data again. FormGuard automatically saves your progress in the browser and syncs to the cloud for premium users.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="36387630-8e41-4bf1-9e34-dbd705e167ad"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
