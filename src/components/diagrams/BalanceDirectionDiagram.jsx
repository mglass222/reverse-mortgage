import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Forward loan balance falls to zero; reverse loan balance rises over time.
export default function BalanceDirectionDiagram() {
  const { pick } = useLanguage()
  const labels = {
    forward: { en: 'Forward mortgage', ko: '정모기지' },
    reverse: { en: 'Reverse mortgage', ko: '역모기지' },
    time: { en: 'Time', ko: '시간' },
    balance: { en: 'Loan balance', ko: '대출 잔액' },
    aria: {
      en: 'Chart: a forward-mortgage balance falls toward zero over time while a reverse-mortgage balance rises over time.',
      ko: '차트: 시간이 지남에 따라 정모기지 잔액은 0을 향해 줄고 역모기지 잔액은 늘어납니다.',
    },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 200" role="img" aria-label={pick(labels.aria)}>
        <line x1="40" y1="170" x2="300" y2="170" stroke="#bcae92" />
        <line x1="40" y1="20" x2="40" y2="170" stroke="#bcae92" />
        <polyline points="40,40 300,160" fill="none" stroke="#234b3e" strokeWidth="3" />
        <polyline points="40,160 300,40" fill="none" stroke="#9c6a34" strokeWidth="3" />
        <text x="150" y="150" fontSize="11" fill="#234b3e">{pick(labels.forward)}</text>
        <text x="150" y="60" fontSize="11" fill="#9c6a34">{pick(labels.reverse)}</text>
        <text x="150" y="190" fontSize="10" fill="#8a8170">{pick(labels.time)}</text>
      </svg>
    </figure>
  )
}
