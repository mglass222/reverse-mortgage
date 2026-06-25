export default {
  slug: 'glossary',
  title: { en: 'Glossary — Working Definitions', ko: '용어집 — 실무 정의' },
  intro: {
    en: 'Precise terms for client and counterparty conversations, in English and Korean. Definitions are written for a lender, not a first-time borrower — they assume you know the forward analogue.',
    ko: '고객 및 거래상대방과의 대화를 위한 정확한 용어를 영어와 한국어로 정리했습니다. 정의는 처음 대출받는 차주가 아니라 대출 실무자를 위해 작성되었으며, 정방향 대응 개념을 안다고 전제합니다.',
  },
  sections: [
    {
      heading: { en: 'HECM', ko: 'HECM (주택자본전환모기지)' },
      body: [
        {
          en: 'Home Equity Conversion Mortgage — FHA’s reverse mortgage under the National Housing Act, administered by HUD and securitized via Ginnie Mae HMBS. The dominant U.S. reverse product.',
          ko: '주택자본전환모기지 — 전국주택법에 따른 FHA의 역모기지로, HUD가 관리하고 지니메 HMBS로 유동화됩니다. 미국의 지배적인 역모기지 상품입니다.',
        },
      ],
    },
    {
      heading: { en: 'Maximum Claim Amount (MCA)', ko: '최대 청구 금액 (MCA)' },
      body: [
        {
          en: 'Lesser of appraised value and the single national FHA HECM limit. Anchors the PLF calculation, the 2% IMIP base, and the 98% assignment threshold.',
          ko: '감정가와 전국 단일 FHA HECM 한도 중 낮은 금액. PLF 계산, 2% IMIP 기준, 98% 양도 임계치의 기준이 됩니다.',
        },
      ],
    },
    {
      heading: { en: 'Principal Limit', ko: '원금한도' },
      body: [
        {
          en: 'MCA × PLF — the actuarial present value of the lender’s commitment; the gross capacity before mandatory obligations, costs, and first-year draw limits.',
          ko: 'MCA × PLF — 대출기관 약정의 보험계리적 현재가치. 필수 의무, 비용, 1차년도 인출 한도 적용 전의 총 가용액입니다.',
        },
      ],
    },
    {
      heading: { en: 'Principal Limit Factor (PLF)', ko: '원금한도 계수 (PLF)' },
      body: [
        {
          en: 'FHA-tabled factor (0–1) indexed to youngest borrower age and expected rate. Effectively a risk-based maximum LTV that rises with age and falls as the expected rate rises.',
          ko: '최연소 차주 나이와 예상금리로 색인된 FHA 표 계수(0~1). 사실상 위험 기반 최대 LTV로, 나이가 많을수록 커지고 예상금리가 높을수록 작아집니다.',
        },
      ],
    },
    {
      heading: { en: 'Expected Rate', ko: '예상금리' },
      body: [
        {
          en: 'The sizing/discount rate (index + margin, subject to a floor) used solely to look up the PLF. Distinct from the note rate that accrues the balance.',
          ko: '오직 PLF 조회에만 쓰이는 산정·할인 금리(지수 + 마진, 하한 적용). 잔액을 누적하는 노트금리와 구별됩니다.',
        },
      ],
    },
    {
      heading: { en: 'IMIP / Annual MIP', ko: '선납 MIP / 연간 MIP' },
      body: [
        {
          en: 'Initial MIP is 2.0% of MCA at closing; annual MIP is 0.50% capitalized on the outstanding balance. Together they fund the MMI Fund behind the non-recourse guarantee.',
          ko: '선납 MIP는 마감 시 MCA의 2.0%, 연간 MIP는 미상환 잔액에 자본화되는 0.50%입니다. 둘이 비소구 보증을 뒷받침하는 MMI 기금을 조성합니다.',
        },
      ],
    },
    {
      heading: { en: 'Non-Recourse', ko: '비소구' },
      body: [
        {
          en: 'Statutory cap limiting payoff to the lesser of balance or net sale proceeds; FHA insurance (not a guaranty or the estate) absorbs any shortfall. Effectively an FHA-written put.',
          ko: '상환을 잔액과 순매각대금 중 낮은 금액으로 제한하는 법령상 한도. 부족분은 보증이나 상속재산이 아니라 FHA 보험이 흡수합니다. 사실상 FHA가 발행한 풋옵션입니다.',
        },
      ],
    },
    {
      heading: { en: 'Negative Amortization', ko: '역상각' },
      body: [
        {
          en: 'The by-design upward compounding of the balance (draws + interest + annual MIP) absent any amortizing payment — the core HECM mechanic, treated as a defect on forward paper.',
          ko: '상각 상환 없이 잔액(인출액 + 이자 + 연간 MIP)이 설계상 위로 복리 증가하는 것. HECM의 핵심 메커니즘이며, 정방향 문서에서는 결함으로 취급됩니다.',
        },
      ],
    },
    {
      heading: { en: 'Line of Credit (Growing)', ko: '신용한도 (증가형)' },
      body: [
        {
          en: 'A non-cancelable credit line whose undrawn portion grows at the note rate + annual MIP — the program’s negative amortization working in the borrower’s favor.',
          ko: '취소할 수 없는 신용한도로, 미인출 부분이 노트금리 + 연간 MIP로 증가합니다. 프로그램의 역상각이 차주에게 유리하게 작동하는 것입니다.',
        },
      ],
    },
    {
      heading: { en: 'LESA', ko: 'LESA (생애 기대 적립금)' },
      body: [
        {
          en: 'Life Expectancy Set-Aside — funds carved from the Principal Limit, per the Financial Assessment, to escrow property taxes and insurance. A lender-controlled impound protecting collateral position.',
          ko: '생애 기대 적립금 — 재정 평가에 따라 원금한도에서 떼어 재산세와 보험을 에스크로하는 자금. 담보 지위를 보호하는, 대출기관이 통제하는 임포운드입니다.',
        },
      ],
    },
    {
      heading: { en: 'Eligible Non-Borrowing Spouse (NBS)', ko: '적격 비차용 배우자 (NBS)' },
      body: [
        {
          en: 'A spouse not on the note who, meeting HUD conditions, may defer due-and-payable status after the last borrower’s death. Does not receive proceeds; influences the PLF via the youngest age.',
          ko: '노트에 없는 배우자로, HUD 요건을 충족하면 마지막 차주 사망 후 상환 의무 발생을 유예할 수 있습니다. 자금은 수령하지 못하며, 최연소 나이를 통해 PLF에 영향을 줍니다.',
        },
      ],
    },
    {
      heading: { en: 'Assignment (98% MCA)', ko: '양도 (MCA 98%)' },
      body: [
        {
          en: 'Servicer election to assign the loan to HUD once the balance reaches 98% of MCA, transferring tail/crossover risk to FHA while the borrower’s terms continue unchanged.',
          ko: '잔액이 MCA의 98%에 도달하면 서비서가 대출을 HUD에 양도하는 선택. 차주의 조건은 그대로 유지한 채 후순위·교차점 위험을 FHA로 이전합니다.',
        },
      ],
    },
    {
      heading: { en: 'Maturity Event', ko: '만기 사유' },
      body: [
        {
          en: 'A trigger making the loan due and payable: last borrower’s death, sale/transfer, 12-month non-occupancy, or a property-charge/occupancy default subject to HUD loss-mitigation.',
          ko: '대출의 상환 의무를 발생시키는 트리거: 마지막 차주 사망, 매각·이전, 12개월 비거주, 또는 HUD 손실완화 대상인 재산 부담금·거주 불이행입니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Keep the two-rate distinction (expected vs. note) and the non-recourse put front of mind — they explain the rest.',
      ko: '두 금리 구분(예상 vs. 노트)과 비소구 풋옵션을 항상 염두에 두십시오. 나머지를 설명해 줍니다.',
    },
  ],
}
