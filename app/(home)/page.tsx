import PhenomenaCards from "@/components/phenomena-cards"

export default function Home() {
  return (
    <>
      <section className="pt-12">
        <h1 className="text-center">Deep Learning Phenomena</h1>
        <p className="text-justify indent-8 text-pretty">
          Deep learning has transformed AI, but its inner workings remain
          complex and mysterious. Unlocking these mysteries is crucial for
          building safer, more effective AI systems. By studying
          phenomena—observable patterns revealed through controlled
          experiments—we gain insights into deep learning&apos;s complexity,
          much like scientists uncover natural laws through careful observation.
          This platform is a hub for researchers to explore, share, and discuss
          key deep learning phenomena. Through well-documented, reproducible
          experiments, we aim to spark curiosity, bridge theory and practice,
          and drive collective progress in the field. Join us to discover open
          questions and advance AI together.
        </p>
      </section>
      <hr />
      <PhenomenaCards />
    </>
  )
}
