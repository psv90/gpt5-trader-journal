import '../styles/globals.css'

export const metadata = {
  title: 'Dziennik Tradera',
  description: 'Kompaktowy dziennik tradera'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="dark">
      <body className="min-h-screen bg-bg text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
