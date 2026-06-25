import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function DisbursementOptionsDiagram() {
  const { pick } = useLanguage()
  const opts = [
    { en: 'Lump sum', ko: '일시금' },
    { en: 'Tenure', ko: '종신' },
    { en: 'Term', ko: '기간제' },
    { en: 'Line of credit', ko: '신용한도' },
  ]
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 120" role="img" aria-label="Disbursement options">
        {opts.map((o, i) => (
          <g key={i} transform={`translate(${10 + i * 78},30)`}>
            <rect width="70" height="50" rx="6" fill="#e2e8f0" stroke="#1e3a5f" />
            <text x="35" y="30" fontSize="9" textAnchor="middle" fill="#1e3a5f">{pick(o)}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
