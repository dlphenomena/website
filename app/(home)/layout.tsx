export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="pt-14">
      <article className="prose md:prose-lg prose-zinc dark:prose-invert prose-ul:pl-4 prose-ul:list-inside prose-ul:list-disc prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-a:no-underline prose-a:hover:text-orange-500 prose-img:rounded-xl prose-img:mb-6 prose-img:border prose-img:border-slate-300 prose-img:mx-auto prose-img:dark:border-zinc-700 prose-headings:font-bold prose-hr:mt-0 prose-hr:mb-6 mx-auto max-w-4xl px-8">
        {children}
      </article>
    </main>
  )
}
