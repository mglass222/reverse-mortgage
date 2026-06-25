export default {
  slug: 'origination-process',
  title: { en: 'The Origination Process', ko: '대출 개시 절차' },
  intro: {
    en: 'The HECM process resembles a forward loan in places but starts differently — with mandatory counseling — and centers on age and equity rather than repayment ability. Knowing the sequence helps you set client expectations.',
    ko: 'HECM 절차는 일부 정모기지와 비슷하지만 시작이 다릅니다. 의무 상담으로 시작하며 상환 능력보다 나이와 자본을 중심으로 합니다. 절차의 순서를 알면 고객의 기대치를 설정하는 데 도움이 됩니다.',
  },
  sections: [
    {
      heading: { en: 'Counseling first', ko: '상담 우선' },
      diagram: 'processFlow',
      body: [
        {
          en: 'Before an application can proceed, the borrower must complete counseling with a HUD-approved counselor who explains costs, alternatives, and obligations. This consumer-protection step has no equivalent in a typical forward loan.',
          ko: '신청이 진행되기 전에 차용인은 비용, 대안, 의무를 설명하는 HUD 승인 상담사와의 상담을 완료해야 합니다. 이 소비자 보호 절차는 일반적인 정모기지에는 없는 단계입니다.',
        },
      ],
    },
    {
      heading: { en: 'Application through closing', ko: '신청부터 클로징까지' },
      body: [
        {
          en: 'After counseling: application → financial assessment → FHA appraisal → underwriting → closing → first disbursement. The financial assessment checks the borrower’s ability to keep paying taxes, insurance, and upkeep, and may require a LESA set-aside.',
          ko: '상담 후에는 신청 → 재정 평가 → FHA 감정 → 심사 → 클로징 → 최초 지급 순으로 진행됩니다. 재정 평가는 차용인이 세금, 보험, 유지비를 계속 납부할 수 있는지를 확인하며 LESA 적립을 요구할 수 있습니다.',
        },
      ],
    },
    {
      heading: { en: 'How it differs from a forward loan', ko: '정모기지와의 차이점' },
      body: [
        {
          en: 'The biggest differences are the mandatory counseling requirement, the focus on age and equity instead of income to repay, and set-asides (LESA) for taxes and insurance built into the loan structure.',
          ko: '가장 큰 차이는 의무 상담 요건, 상환 소득 대신 나이와 자본에 대한 집중, 그리고 대출 구조에 포함된 세금·보험 적립(LESA)입니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Mandatory HUD counseling comes before the application — unique to reverse mortgages.',
      ko: '의무 HUD 상담은 신청보다 먼저 이루어지며 역모기지만의 특징입니다.',
    },
    {
      en: 'Sequence: counseling → application → financial assessment → appraisal → underwriting → closing.',
      ko: '순서: 상담 → 신청 → 재정 평가 → 감정 → 심사 → 클로징.',
    },
    {
      en: 'A LESA set-aside may be required to ensure taxes and insurance are paid.',
      ko: '세금과 보험 납부를 보장하기 위해 LESA 적립이 요구될 수 있습니다.',
    },
  ],
}
