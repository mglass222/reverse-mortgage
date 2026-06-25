import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext.jsx'
import ui from './i18n/ui-strings.js'
import Sidebar from './components/Sidebar.jsx'
import LanguageToggle from './components/LanguageToggle.jsx'
import DisclaimerBanner from './components/DisclaimerBanner.jsx'
import ChapterLayout from './components/ChapterLayout.jsx'
import Calculator from './calculator/Calculator.jsx'
import chapters from './content/chapters-index.js'

function Header() {
  const { pick } = useLanguage()
  return (
    <header className="app-header">
      <span className="app-title">{pick(ui.siteTitle)}</span>
      <LanguageToggle />
    </header>
  )
}

function HomeRedirect() {
  const { pick } = useLanguage()
  if (chapters.length > 0) return <Navigate to={`/chapter/${chapters[0].slug}`} replace />
  return <p className="empty-home">{pick(ui.emptyHome)}</p>
}

function ChapterRoute() {
  const { pick } = useLanguage()
  const { slug } = useParams()
  const chapter = chapters.find((c) => c.slug === slug)
  if (!chapter) return <p>{pick(ui.chapterNotFound)}</p>
  return <ChapterLayout chapter={chapter} />
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <DisclaimerBanner />
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomeRedirect />} />
              <Route path="/chapter/:slug" element={<ChapterRoute />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="*" element={<HomeRedirect />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
