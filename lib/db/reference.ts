export type Reference = {
  type: "journal" | "conference"
  title: string
  authors: { family: string; given: string }[]
  journal: string
  year: number
  description?: string
  tags?: string[]
  arxiv?: string
  doi?: string
  supplementary?: string
  url?: string
  pdfLink?: string
}
