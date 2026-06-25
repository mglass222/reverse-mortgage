export default {
  slug: 'balance-growth',
  title: { en: 'Loan Balance Growth & Non-Recourse', ko: '대출 잔액 증가와 비소구' },
  intro: {
    en: 'Because no monthly payments are made, a reverse mortgage balance grows over time instead of shrinking. The FHA insurance behind the loan caps what is ultimately owed, protecting borrowers and heirs.',
    ko: '월 상환금이 없기 때문에 역모기지 잔액은 줄어드는 대신 시간이 지나면서 늘어납니다. 대출을 뒷받침하는 FHA 보험이 최종 부담액을 제한하여 차용인과 상속인을 보호합니다.',
  },
  sections: [
    {
      heading: { en: 'Negative amortization', ko: '역상각' },
      diagram: 'balanceGrowth',
      body: [
        {
          en: 'The balance equals the funds disbursed plus accrued interest plus ongoing MIP. Since nothing is paid down, interest compounds on a rising balance — the opposite of a forward loan. This is called negative amortization.',
          ko: '잔액은 지급된 자금에 누적 이자와 지속적인 MIP를 더한 값입니다. 아무것도 상환되지 않기 때문에 이자가 늘어나는 잔액에 복리로 붙습니다. 이는 정모기지와 반대이며 역상각이라고 합니다.',
        },
      ],
    },
    {
      heading: { en: 'The non-recourse guarantee', ko: '비소구 보증' },
      diagram: 'nonRecourse',
      body: [
        {
          en: 'A HECM is non-recourse: when the loan is repaid by selling the home, the borrower or heirs never owe more than the home’s value at that time, even if the balance has grown larger. FHA insurance covers any shortfall to the lender.',
          ko: 'HECM은 비소구입니다. 주택을 매각하여 대출을 상환할 때, 잔액이 더 커졌더라도 차용인이나 상속인은 그 시점의 주택 가치 이상을 부담하지 않습니다. 부족분은 FHA 보험이 대출 기관에 보전합니다.',
        },
      ],
    },
    {
      heading: { en: 'The crossover point', ko: '교차점(크로스오버)' },
      body: [
        {
          en: 'The "crossover point" is where the rising loan balance approaches or exceeds the home’s value. Past this point, the FHA insurance is what protects everyone — which is exactly what the MIP paid for.',
          ko: '"교차점"은 늘어나는 대출 잔액이 주택 가치에 근접하거나 이를 초과하는 지점입니다. 이 지점을 넘으면 FHA 보험이 모두를 보호하며, 이것이 바로 MIP로 지불한 대가입니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'A reverse mortgage balance grows through negative amortization: disbursements + interest + MIP.',
      ko: '역모기지 잔액은 역상각을 통해 늘어납니다: 지급액 + 이자 + MIP.',
    },
    {
      en: 'Non-recourse means the borrower or heirs never owe more than the home’s value at sale.',
      ko: '비소구란 차용인이나 상속인이 매각 시 주택 가치 이상을 결코 부담하지 않음을 의미합니다.',
    },
    {
      en: 'FHA insurance (funded by MIP) covers any balance above the home’s value past the crossover point.',
      ko: '(MIP로 조달되는) FHA 보험은 교차점 이후 주택 가치를 초과하는 잔액을 보전합니다.',
    },
  ],
}
