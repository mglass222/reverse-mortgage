export default {
  slug: 'reverse-vs-forward',
  title: { en: 'Reverse vs. Forward — A Practitioner’s Contrast', ko: '역방향 vs. 정방향 — 실무자의 대조' },
  intro: {
    en: 'The fastest way to internalize a HECM is to lay it against the forward loan file you know cold. Five axes do most of the work: payment direction, balance trajectory, the rate stack, the underwriting basis, and the maturity trigger. Get these straight and the rest of the program follows.',
    ko: 'HECM을 체득하는 가장 빠른 방법은 귀하가 훤히 아는 정방향 대출 파일과 나란히 놓는 것입니다. 다섯 가지 축이 핵심을 설명합니다. 지급 방향, 잔액 궤적, 금리 구조, 심사 기준, 만기 트리거입니다. 이것을 정리하면 나머지 프로그램은 자연히 따라옵니다.',
  },
  sections: [
    {
      heading: { en: 'Payment direction and balance trajectory', ko: '지급 방향과 잔액 궤적' },
      diagram: 'balanceDirection',
      body: [
        {
          en: 'Forward: the borrower remits, principal amortizes down, LTV improves over time and equity builds. Reverse: the lender disburses (or holds an open line), interest and MIP capitalize, and the balance climbs while equity erodes. You are underwriting negative amortization by design — the same phenomenon you treat as a red flag on a forward Option-ARM is the core mechanic here.',
          ko: '정방향: 차주가 납입하고 원금이 상각되어 줄며, 시간이 지나면서 LTV가 개선되고 자본이 쌓입니다. 역방향: 대출기관이 지급하거나(또는 개설된 한도를 보유하고) 이자와 MIP가 자본화되며, 잔액이 오르는 동안 자본이 잠식됩니다. 귀하는 설계상 역상각을 심사하는 것입니다. 정방향 옵션-ARM에서 위험 신호로 취급하던 바로 그 현상이 여기서는 핵심 메커니즘입니다.',
        },
      ],
    },
    {
      heading: { en: 'The rate stack: expected rate vs. note rate', ko: '금리 구조: 예상금리 vs. 노트금리' },
      body: [
        {
          en: 'Forward pricing gives you one rate that both sizes the payment and accrues the balance. HECM splits them. The expected rate (10-Year CMT or SOFR swap + margin, subject to a floor) is a sizing rate used only to look up the Principal Limit Factor — it is the discount rate in the actuarial draw calculation. The note rate (index + margin, reset monthly or annually on an ARM) is what actually accrues. A higher expected rate shrinks the PLF and the up-front capacity even though it never touches a payment.',
          ko: '정방향 가격은 하나의 금리로 상환액 산정과 잔액 누적을 모두 처리합니다. HECM은 이를 분리합니다. 예상금리(10년 만기 CMT 또는 SOFR 스왑 + 마진, 하한 적용)는 원금한도 계수(PLF)를 조회하는 데에만 쓰이는 산정 금리로, 보험계리적 인출 계산의 할인율입니다. 노트금리(지수 + 마진, ARM에서 월별 또는 연별 재설정)가 실제로 누적되는 금리입니다. 예상금리가 높을수록 상환액에는 영향이 없어도 PLF와 초기 가용액이 줄어듭니다.',
        },
      ],
    },
    {
      heading: { en: 'Underwriting basis: from ATR to the Financial Assessment', ko: '심사 기준: ATR에서 재정 평가로' },
      body: [
        {
          en: 'There is no DTI hurdle and no ATR/QM repayment test, because there is no required payment. In its place sits the FHA Financial Assessment: a credit history review plus a residual-income and willingness analysis confined to the borrower’s capacity to keep paying property charges (taxes, insurance, HOA). Fail or fall short and the file is not declined — it is conditioned with a LESA carve-out from the Principal Limit. The risk you used to underwrite to income, you now underwrite to property-charge persistence.',
          ko: 'DTI 기준도, ATR/QM 상환 검증도 없습니다. 의무 상환금이 없기 때문입니다. 그 자리에 FHA 재정 평가가 들어섭니다. 신용 이력 검토에 더해, 차주가 재산 부담금(세금, 보험, HOA)을 계속 납부할 수 있는 능력에 한정한 잔여소득 및 납부 의지 분석입니다. 미달하더라도 파일이 거절되지 않고 원금한도에서 LESA를 적립하는 조건이 붙습니다. 예전에 소득으로 심사하던 위험을 이제는 재산 부담금 납부의 지속성으로 심사합니다.',
        },
      ],
    },
    {
      heading: { en: 'Maturity trigger and recourse', ko: '만기 트리거와 소구권' },
      body: [
        {
          en: 'A forward loan matures on its amortization schedule or on a balloon date you set. A HECM has no maturity date — it becomes due and payable on a maturity event (last borrower’s death, sale, 12-month non-occupancy, or property-charge default). And unlike the recourse carve-outs you negotiate on CRE paper, the HECM is non-recourse by statute: the FHA insurance, not a guaranty, absorbs any balance above net sale proceeds.',
          ko: '정방향 대출은 상각 일정 또는 귀하가 설정한 만기일에 만기가 됩니다. HECM에는 만기일이 없습니다. 만기 사유(마지막 차주의 사망, 매각, 12개월 비거주, 재산 부담금 불이행) 발생 시 상환 의무가 발생합니다. 또한 CRE 문서에서 협상하는 소구권 예외 조항과 달리 HECM은 법령상 비소구입니다. 보증이 아니라 FHA 보험이 순매각대금을 초과하는 잔액을 흡수합니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Expected rate sizes the draw (PLF lookup); the note rate accrues the balance — two rates, two jobs.',
      ko: '예상금리는 인출액을 산정하고(PLF 조회), 노트금리는 잔액을 누적합니다. 금리 둘, 역할 둘입니다.',
    },
    {
      en: 'No ATR/DTI test; the Financial Assessment underwrites property-charge persistence, with LESA as the conditioning tool.',
      ko: 'ATR/DTI 검증은 없습니다. 재정 평가가 재산 부담금 납부 지속성을 심사하며, LESA가 조건 부과 수단입니다.',
    },
    {
      en: 'No maturity date — due and payable on a maturity event; non-recourse by statute, not by negotiated carve-out.',
      ko: '만기일이 없으며 만기 사유 발생 시 상환 의무가 생깁니다. 협상된 예외가 아니라 법령에 의해 비소구입니다.',
    },
  ],
}
