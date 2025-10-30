import { phenomena } from "@/.source"
import {
  type InferMetaType,
  type InferPageType,
  loader,
} from "fumadocs-core/source"
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons"

export const source = loader({
  baseUrl: "/phenomena",
  source: phenomena.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
})

export type Page = InferPageType<typeof source>
export type Meta = InferMetaType<typeof source>
