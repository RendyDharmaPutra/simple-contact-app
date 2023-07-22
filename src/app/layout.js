import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: '500', subsets: ['latin'] })

export const metadata = {
  title: 'Contact App',
  description: 'Simple Contact App',
}

export default function RootLayout({ children }) {

  // const gradient = 'bg-gradient-to-br from-cyan-600 via-cyan-300 to-blue-600'
  const gradient = 'bg-gradient-to-br from-cyan-400 via-green-300 to-blue-400'
  const image = 'bg-[url("https://momentum.photos/img/a64105bc-af20-4aa2-a3ea-458ceb5d5ebd.jpg?momo_cache_bg_uuid=d5fe8a5b-f705-4470-83af-c392ff15c9a9")] bg-cover bg-no-repeat'

  return (
    <html lang="en">
      <body className={`${inter.className} ${image} h-screen bg-center`}>{children}</body>
    </html>
  )
}
