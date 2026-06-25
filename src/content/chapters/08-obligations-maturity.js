export default {
  slug: 'obligations-maturity',
  title: { en: 'Covenants, Default & Maturity', ko: '의무 조항, 불이행, 만기' },
  intro: {
    en: 'No P&I payment does not mean no covenants. The HECM carries affirmative obligations whose breach triggers a "technical default" and a due-and-payable path — analytically the same covenant-and-acceleration framework you run on CRE, just with property charges and occupancy as the covenants instead of DSCR.',
    ko: '원리금 상환이 없다고 해서 의무 조항이 없는 것은 아닙니다. HECM에는 위반 시 "기술적 불이행"과 상환 의무 발생 경로를 촉발하는 적극적 의무가 있습니다. 분석적으로는 귀하가 CRE에서 운용하는 동일한 약정·기한이익상실 구조이며, 다만 약정이 DSCR이 아니라 재산 부담금과 거주입니다.',
  },
  sections: [
    {
      heading: { en: 'The standing covenants', ko: '상시 의무 조항' },
      body: [
        {
          en: 'The borrower must keep property taxes and hazard insurance current, maintain the property to FHA standards, pay any HOA dues, and occupy the home as principal residence. These are the program’s maintenance covenants. Where the Financial Assessment flagged risk, a LESA carves funds from the Principal Limit to escrow taxes and insurance — functionally a lender-controlled impound that protects the collateral position you would otherwise monitor by hand.',
          ko: '차주는 재산세와 손해보험을 연체 없이 유지하고, 부동산을 FHA 기준에 맞게 관리하며, HOA 회비를 납부하고, 주택을 주 거주지로 점유해야 합니다. 이것이 프로그램의 유지 약정입니다. 재정 평가에서 위험이 표시된 경우 LESA가 원금한도에서 자금을 떼어 세금과 보험을 에스크로합니다. 기능적으로는 대출기관이 통제하는 임포운드로, 그렇지 않았다면 수기로 감시할 담보 지위를 보호합니다.',
        },
      ],
    },
    {
      heading: { en: 'Maturity and due-and-payable events', ko: '만기 및 상환 의무 발생 사유' },
      diagram: 'maturityPaths',
      body: [
        {
          en: 'The loan becomes due and payable on a maturity event: death of the last surviving borrower, sale or transfer of title, or the property ceasing to be the principal residence for more than 12 consecutive months (including extended care). Property-charge or occupancy breaches create a default-based due-and-payable status, subject to HUD loss-mitigation and notice requirements before any acceleration. An eligible non-borrowing spouse can defer the death trigger under the deferral period rules if conditions are met.',
          ko: '대출은 만기 사유 발생 시 상환 의무가 생깁니다. 마지막 생존 차주의 사망, 소유권의 매각·이전, 또는 부동산이 12개월 연속 초과로 주 거주지가 아니게 되는 경우(장기 요양 포함)입니다. 재산 부담금 또는 거주 위반은 불이행 기반의 상환 의무 상태를 만들며, 기한이익상실 전에 HUD 손실완화 및 통지 요건이 적용됩니다. 적격 비차용 배우자는 요건 충족 시 유예기간 규정에 따라 사망 트리거를 연기할 수 있습니다.',
        },
      ],
    },
    {
      heading: { en: 'Resolution and the 95% rule', ko: '해결과 95% 규칙' },
      body: [
        {
          en: 'At maturity the estate typically sells and retires the balance, with any surplus flowing to the heirs — the non-recourse cap means there is never a deficiency to chase. Heirs who want to retain the property pay the lesser of the full balance or [95% of current appraised value](https://www.consumerfinance.gov/ask-cfpb/with-a-reverse-mortgage-loan-can-my-heirs-keep-or-sell-my-home-after-i-die-en-242/), or refinance into a forward loan. HUD timelines govern: roughly six months to resolve with possible extensions. This is where you, as the forward/CRE banker in the family’s orbit, often re-enter — structuring the heirs’ takeout.',
          ko: '만기 시 상속재산은 보통 매각하여 잔액을 상환하고 잉여는 상속인에게 귀속됩니다. 비소구 한도 때문에 추징할 부족분은 결코 없습니다. 부동산을 보유하려는 상속인은 전체 잔액과 [현재 감정가의 95%](https://www.consumerfinance.gov/ask-cfpb/with-a-reverse-mortgage-loan-can-my-heirs-keep-or-sell-my-home-after-i-die-en-242/) 중 낮은 금액을 지불하거나 정방향 대출로 재융자합니다. HUD 기한이 적용됩니다. 대략 6개월 이내 해결, 연장 가능성이 있습니다. 바로 이 지점에서 가족의 궤도에 있는 정방향·CRE 뱅커인 귀하가 상속인의 차환을 구조화하며 다시 등장하는 경우가 많습니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Covenants = taxes, insurance, maintenance, HOA, occupancy; breach is a technical default, not just a missed bill.',
      ko: '약정 = 세금, 보험, 관리, HOA, 거주. 위반은 단순 미납이 아니라 기술적 불이행입니다.',
    },
    {
      en: 'Maturity events: last borrower’s death, sale, or 12-month non-occupancy; NBS deferral may apply.',
      ko: '만기 사유: 마지막 차주 사망, 매각, 또는 12개월 비거주. 비차용 배우자 유예가 적용될 수 있습니다.',
    },
    {
      en: 'Heirs retain by paying the lesser of balance or 95% of appraised value — a forward-takeout opportunity for you.',
      ko: '상속인은 잔액과 감정가의 95% 중 낮은 금액으로 보유합니다. 귀하에게는 정방향 차환 기회입니다.',
    },
  ],
}
