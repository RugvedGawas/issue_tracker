import './theme-config.css'
import '@radix-ui/themes/styles.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import { Container, Theme, ThemePanel } from '@radix-ui/themes';
import AuthProvider from './auth/Provider';
import { QueryClientProvider } from '@tanstack/react-query';
import ReactQueryClientProvider from './ReactQueryClientProvider';

const inter = Inter({ subsets: ['latin'],
variable: '--font-inter',
 })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      <ReactQueryClientProvider>

        <AuthProvider>

      <Theme accentColor="blue" radius="large">
        <Navbar />

        <Container>
        <main className='p-5'>  {children}</main>
        </Container>

      
        </Theme>
        </AuthProvider>
        
      </ReactQueryClientProvider>
       
      </body>
    </html>
  )
}
