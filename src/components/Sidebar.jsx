import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'
import chapters from '../content/chapters-index.js'

export default function Sidebar() {
  const { pick } = useLanguage()
  return (
    <nav className="sidebar" aria-label={pick(ui.nav.chapters)}>
      <p className="sidebar-heading">{pick(ui.nav.chapters)}</p>
      <ol className="sidebar-list">
        {chapters.map((ch, i) => (
          <li key={ch.slug}>
            <NavLink to={`/chapter/${ch.slug}`}>
              {i + 1}. {pick(ch.title)}
            </NavLink>
          </li>
        ))}
      </ol>
      <NavLink className="sidebar-calc-link" to="/calculator">
        {pick(ui.nav.calculator)}
      </NavLink>
    </nav>
  )
}
