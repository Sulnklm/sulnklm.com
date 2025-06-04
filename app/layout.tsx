import NavBar from './components/Navbar';
import './globals.css';
import { ReactNode } from 'react'

export const metadata = {
  title: 'Suin Kim | Portfolio',
  keywords: ['Portfolio', 'Suin Kim', 'UX/UI Designer', 'Web Developer', 'Graphic Designer'],
  authors: [{ name: 'Suin Kim', url: 'https://sulnklm.com' }],
  creator: 'Suin Kim',
  description: 'Welcome to my portfolio!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-primary font-Sans">
       
      <NavBar />

        <main>{children}</main>

        <footer>
        </footer>
      </body>
    </html>
  )
}