import './globals.css'

export const metadata = {
  title: 'Happy Birthday Aditi',
  description: 'A cinematic birthday journey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
