import Link from "next/link"

export default function About() {
  return (
    <section className="pt-12">
      <h1 className="text-center">Project: Deep Learning Phenomena</h1>
      <hr />
      <h2 className="mb-4 text-2xl font-semibold">Motivation</h2>
      <p>
        Deep learning has achieved great success, but understanding how it works
        is essential for building better and safer AI systems. Deep learning is
        a highly complex system. Studying phenomena—observable patterns in
        experiments—is a key way to understand such complexity. This approach
        mirrors how scientists study nature: through controlled experiments,
        they discover empirical laws that guide theory, which in turn leads to
        deeper understanding and useful technology.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">Objectives</h2>
      <p>
        This project collects important phenomena in deep learning and provides
        a platform for researchers to share and discuss their findings. By
        gathering well-documented phenomena with reproducible experiments, we
        aim to help researchers identify open questions, connect theory with
        practice, and advance the field together.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">Contributions</h2>
      <p>
        This project is a collaborative effort of researchers from various
        institutions. We welcome contributions from researchers and
        practitioners in the field of deep learning. You can contribute a
        phenomenon by submitting a Markdown file to the project, or submit an
        information of a related paper to an existing phenomenon. Please see
        the&nbsp;<Link href="/submission-guide">Submission Guide</Link> for more
        details. We encourage researchers to share their findings and contribute
        to the collective understanding of deep learning phenomena.
      </p>
      <div className="mt-10"></div>
    </section>
  )
}
