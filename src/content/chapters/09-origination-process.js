export default {
  slug: 'origination-process',
  title: { en: 'Origination Workflow & Underwriting', ko: '대출 개시 절차와 심사' },
  intro: {
    en: 'The pipeline will feel familiar with three insertions you do not run on forward files: mandatory counseling at the front, a Financial Assessment that ends in a LESA decision rather than an approve/decline, and FHA collateral controls including a possible second appraisal. Knowing where these sit lets you set realistic timelines and avoid surprises at the closing table.',
    ko: '파이프라인은 정방향 파일에서는 다루지 않는 세 가지 삽입 요소만 빼면 익숙하게 느껴질 것입니다. 맨 앞의 의무 상담, 승인/거절이 아니라 LESA 결정으로 끝나는 재정 평가, 그리고 2차 감정 가능성을 포함한 FHA 담보 통제입니다. 이들이 어디에 위치하는지 알면 현실적인 일정을 세우고 마감 테이블에서의 돌발을 피할 수 있습니다.',
  },
  sections: [
    {
      heading: { en: 'The sequence', ko: '절차 순서' },
      diagram: 'processFlow',
      body: [
        {
          en: 'Counseling → application and disclosures → Financial Assessment → FHA appraisal (with FHA’s Collateral Risk Assessment, which can mandate a second appraisal and use the lower value) → underwriting and LESA determination → closing with the standard rescission period → first disbursement subject to the first-year draw cap. The counseling certificate is a hard prerequisite; the file cannot proceed without it, and it is valid for 180 days from completion — track that window against your rate lock.',
          ko: '상담 → 신청 및 공시 → 재정 평가 → FHA 감정(FHA의 담보위험평가 포함, 2차 감정을 요구하고 낮은 가치를 사용할 수 있음) → 심사 및 LESA 결정 → 표준 철회기간이 있는 마감 → 1차년도 인출 한도를 적용한 최초 지급. 상담 수료증은 필수 선행 요건입니다. 이것 없이는 파일이 진행될 수 없으며, 완료일로부터 180일간 유효하므로 금리 록과 대조해 그 기간을 추적하십시오.',
        },
      ],
    },
    {
      heading: { en: 'The Financial Assessment in practice', ko: '실무에서의 재정 평가' },
      body: [
        {
          en: 'You are not testing repayment of the HECM — you are testing the borrower’s capacity and willingness to keep property charges current over the loan’s expected life. It combines a credit and property-charge payment history review with a residual-income calculation by household size and region. Extenuating circumstances and compensating factors are documented much as on a forward manual underwrite. The output is rarely a flat decline: adequate capacity closes clean, and marginal capacity typically closes with a fully- or partially-funded LESA — though serious willingness problems or other eligibility and underwriting defects can still block the file.',
          ko: '귀하는 HECM의 상환을 검증하는 것이 아니라, 대출의 기대 수명 동안 차주가 재산 부담금을 연체 없이 유지할 능력과 의지를 검증하는 것입니다. 신용 및 재산 부담금 납부 이력 검토와 가구 규모·지역별 잔여소득 계산을 결합합니다. 참작 사유와 보완 요인은 정방향 수기 심사에서와 거의 같게 문서화됩니다. 결과가 곧바로 거절로 이어지는 경우는 드뭅니다. 능력이 충분하면 깔끔히 마감되고 한계적이면 보통 전액 또는 부분 적립 LESA로 마감되지만, 심각한 의지 문제나 그 밖의 자격·심사 결함은 여전히 파일을 막을 수 있습니다.',
        },
      ],
    },
    {
      heading: { en: 'What differs from a forward close', ko: '정방향 마감과의 차이' },
      body: [
        {
          en: 'Net the obligor analysis down to property-charge persistence, add the counseling gate, expect FHA’s second-appraisal control on questionable valuations, and build the LESA into your Principal Limit math before you quote net proceeds. The closing instruments differ too (loan agreement, repair rider, NBS documentation). None of it is exotic — it is your forward FHA discipline reweighted toward collateral and longevity rather than income.',
          ko: '채무자 분석을 재산 부담금 지속성으로 좁히고, 상담 관문을 추가하며, 의심스러운 평가에는 FHA의 2차 감정 통제를 예상하고, 순수령액을 견적하기 전에 LESA를 원금한도 계산에 반영하십시오. 마감 서류도 다릅니다(대출 약정서, 수리 특약, 비차용 배우자 문서). 어느 것도 생소하지 않습니다. 소득이 아니라 담보와 장수 쪽으로 재가중된 귀하의 정방향 FHA 규율일 뿐입니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Counseling is a hard gate with a validity window — track it against your rate lock.',
      ko: '상담은 유효기간이 있는 필수 관문입니다. 금리 록과 대조해 추적하십시오.',
    },
    {
      en: 'The Financial Assessment ends in a LESA decision, not approve/decline; it underwrites property-charge persistence.',
      ko: '재정 평가는 승인/거절이 아니라 LESA 결정으로 끝납니다. 재산 부담금 지속성을 심사합니다.',
    },
    {
      en: 'Expect FHA’s Collateral Risk Assessment / possible second appraisal using the lower value.',
      ko: 'FHA의 담보위험평가와 낮은 가치를 사용하는 2차 감정 가능성을 예상하십시오.',
    },
  ],
}
