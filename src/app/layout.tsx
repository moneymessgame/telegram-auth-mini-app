import '@/styles/globals.css'

import React from 'react'

import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'

import { fontMontserrat, fontBebas } from "@/assets/fonts"
import { Header } from '@/components/layouts/header'
import { QueryProvider } from '@/components/providers/query'
import { SessionProvider } from '@/components/providers/session'
import { ThemeProvider } from '@/components/providers/theme'
import { WagmiProvider } from '@/components/providers/wagmi'
import { cn } from "@/lib/utils"
import { config } from '@/lib/wagmi'

import { getServerSession } from './api/auth/options'

// ====================

const RootLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  const session = await getServerSession()

  return (
    <html lang="en" className="dark min-h-screen">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontMontserrat.variable,
          fontBebas.variable
        )}
      >
        <SessionProvider session={session}>
          <QueryProvider>
            <WagmiProvider initialState={initialState}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <main>
                  <Header />
                  <div className="flex h-full w-full items-start justify-center">
                    {children}
                  </div>
                </main>
              </ThemeProvider>
            </WagmiProvider>
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

// ====================

const metadata: Metadata = {
  title: 'SIWE | NextAuth',
  description: 'Simple example of NextAuth with SIWE',
  icons: {
    icon: './favicon.ico',
  },
}

export { RootLayout as default, metadata }
