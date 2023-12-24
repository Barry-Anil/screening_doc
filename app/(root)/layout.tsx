
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Head from 'next/head';

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
        {/* <main className='flex flex-row min-h-screen bg-gradient-to-r from-indigo-950 via-indigo-500 to-indigo-600 '>
          <section className='main-container'>
            <div className='w-full max-w-4xl mx-4'>{children}</div>
          </section>
        </main> */}

<Head>
				<title>Trafalgar - You health Partner</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link rel="shortcut icon" href="/public/favicon.ico" />
			</Head>
        {children}
      </body>
    </html>
  </ClerkProvider>
  )
}
