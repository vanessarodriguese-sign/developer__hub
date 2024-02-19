import React from 'react'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews">ReviewsNEW</Link>
              </li>
              <li>
                <Link href="/reviews/book">BookBook</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
