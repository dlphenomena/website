import "@/app/globals.css"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Deep Learning Phenomena",
  description: "A blog about interesting phenomena in deep learning",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-background font-sans leading-normal wrap-break-word text-zinc-900 dark:bg-zinc-900 dark:text-zinc-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
