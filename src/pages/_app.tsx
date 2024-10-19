import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { Manrope } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'

const manRope: NextFont = Manrope({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-manrope',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={manRope.className}>
            <Component {...pageProps} />
        </main>
    )
}
