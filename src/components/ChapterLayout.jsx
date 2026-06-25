import { useLanguage } from '../i18n/LanguageContext.jsx'
import KeyTakeaways from './KeyTakeaways.jsx'
import diagrams from './diagrams/index.js'

export default function ChapterLayout({ chapter }) {
  const { pick } = useLanguage()
  return (
    <article className="chapter">
      <h1>{pick(chapter.title)}</h1>
      <p className="chapter-intro">{pick(chapter.intro)}</p>
      {chapter.sections.map((section, i) => {
        const Diagram = section.diagram ? diagrams[section.diagram] : null
        return (
          <section key={i}>
            <h2>{pick(section.heading)}</h2>
            {section.body.map((para, j) => <p key={j}>{pick(para)}</p>)}
            {Diagram && <Diagram />}
          </section>
        )
      })}
      <KeyTakeaways items={chapter.takeaways} />
    </article>
  )
}
