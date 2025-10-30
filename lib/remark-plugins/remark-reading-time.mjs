import { toString as mdaToString } from "mdast-util-to-string"
import getReadingTime from "reading-time"

export default function remarkReadingTime() {
  return (tree, vfile) => {
    const textOnPage = mdaToString(tree)
    const readingTime = getReadingTime(textOnPage)
    vfile.data.readingTime = readingTime
  }
}
