import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function NonRecourseDiagram() {
  const { pick } = useLanguage()
  const L = {
    balance: { en: 'Loan balance', ko: '대출 잔액' },
    owed: { en: 'Max owed (home value)', ko: '최대 상환액 (주택 가치)' },
    cap: { en: 'FHA insurance covers the gap', ko: 'FHA 보험이 차액을 보전' },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 180" role="img" aria-label={pick(L.cap)}>
        <rect x="60" y="30" width="60" height="120" fill="#e3d6bb" />
        <rect x="200" y="80" width="60" height="70" fill="#234b3e" />
        <text x="90" y="20" fontSize="9" textAnchor="middle" fill="#8a8170">{pick(L.balance)}</text>
        <text x="230" y="70" fontSize="9" textAnchor="middle" fill="#234b3e">{pick(L.owed)}</text>
        <text x="160" y="170" fontSize="9" textAnchor="middle" fill="#9c6a34">{pick(L.cap)}</text>
      </svg>
    </figure>
  )
}
