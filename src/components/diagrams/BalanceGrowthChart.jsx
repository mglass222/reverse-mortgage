import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function BalanceGrowthChart() {
  const { pick } = useLanguage()
  const L = {
    balance: { en: 'Loan balance', ko: '대출 잔액' },
    home: { en: 'Home value', ko: '주택 가치' },
    time: { en: 'Time', ko: '시간' },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 200" role="img" aria-label={pick(L.balance)}>
        <line x1="40" y1="170" x2="300" y2="170" stroke="#94a3b8" />
        <line x1="40" y1="20" x2="40" y2="170" stroke="#94a3b8" />
        <polyline points="40,150 120,140 200,120 300,90" fill="none" stroke="#64748b" strokeWidth="2" />
        <polyline points="40,165 120,150 200,120 300,60" fill="none" stroke="#b45309" strokeWidth="3" />
        <text x="210" y="55" fontSize="10" fill="#b45309">{pick(L.balance)}</text>
        <text x="210" y="110" fontSize="10" fill="#475569">{pick(L.home)}</text>
        <text x="150" y="190" fontSize="10" fill="#475569">{pick(L.time)}</text>
      </svg>
    </figure>
  )
}
