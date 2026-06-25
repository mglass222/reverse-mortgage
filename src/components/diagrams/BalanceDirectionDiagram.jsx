import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Forward loan balance falls to zero; reverse loan balance rises over time.
export default function BalanceDirectionDiagram() {
  const { pick } = useLanguage()
  const labels = {
    forward: { en: 'Forward mortgage', ko: '정모기지' },
    reverse: { en: 'Reverse mortgage', ko: '역모기지' },
    time: { en: 'Time', ko: '시간' },
    balance: { en: 'Loan balance', ko: '대출 잔액' },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 200" role="img" aria-label={`${pick(labels.forward)} / ${pick(labels.reverse)}`}>
        <line x1="40" y1="170" x2="300" y2="170" stroke="#94a3b8" />
        <line x1="40" y1="20" x2="40" y2="170" stroke="#94a3b8" />
        <polyline points="40,40 300,160" fill="none" stroke="#0f766e" strokeWidth="3" />
        <polyline points="40,160 300,40" fill="none" stroke="#1e3a5f" strokeWidth="3" />
        <text x="150" y="150" fontSize="11" fill="#0f766e">{pick(labels.forward)}</text>
        <text x="150" y="60" fontSize="11" fill="#1e3a5f">{pick(labels.reverse)}</text>
        <text x="150" y="190" fontSize="10" fill="#475569">{pick(labels.time)}</text>
      </svg>
    </figure>
  )
}
