import './globals.css'

export const metadata = {
  title: 'Artificial Intelligence in Healthcare',
  description: '**Revolutionizing Healthcare: The Power of Artificial Intelligence**',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
