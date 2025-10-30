import { createMDX } from "fumadocs-mdx/next"
import type { NextConfig } from "next"

const withMDX = createMDX({})

const nextConfig: NextConfig = {
  reactCompiler: true,
}

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
