import BackToTop from "@/components/back-to-top"
export default function PhenomenonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="pt-14">
      <article className="mx-auto prose max-w-4xl px-8 prose-zinc md:prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-a:no-underline prose-a:hover:text-orange-500 prose-ul:list-inside prose-ul:list-disc prose-ul:pl-4 prose-img:mx-auto prose-img:mb-6 prose-img:rounded-xl prose-img:border prose-img:border-slate-300 prose-img:dark:border-zinc-700 prose-hr:mt-0 prose-hr:mb-6">
        {children}
      </article>
      <BackToTop />
    </main>
  )
}
