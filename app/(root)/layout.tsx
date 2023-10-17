
import Topbar from '@/components/shared/Topbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Screening Doc',
  description: 'Screening Doc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
  >
    <html lang='en'>
      <body className={inter.className}>
        {/* <Topbar /> */}
        {/* <div className="border-b border-gray-400"></div> */}
        <main className='flex flex-row min-h-screen bg-gradient-to-r from-indigo-950 via-indigo-500 to-indigo-600 '>
          <section className='main-container'>
            <div className='w-full max-w-4xl mx-4'>{children}</div>
          </section>
        </main>

      </body>
    </html>
  </ClerkProvider>
  )
}
