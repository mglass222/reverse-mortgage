export default {
  slug: 'how-much',
  title: { en: 'Sizing the Loan — The Principal Limit', ko: '대출 규모 산정 — 원금한도' },
  intro: {
    en: 'Think of the Principal Limit as an actuarially-derived maximum LTV. It is the present value of the lender’s commitment, discounted at the expected rate over a duration implied by the youngest borrower’s age. Two inputs you control on the file — the capped value and the expected rate — and one table do all the sizing.',
    ko: '원금한도는 보험계리적으로 산출된 최대 LTV라고 생각하십시오. 이는 최연소 차주의 나이로 도출된 기간에 걸쳐 예상금리로 할인한 대출기관 약정의 현재가치입니다. 파일에서 귀하가 통제하는 두 가지 입력값(한도가 적용된 가치와 예상금리)과 하나의 표가 규모 산정을 모두 결정합니다.',
  },
  sections: [
    {
      heading: { en: 'PLF as a duration-and-discount construct', ko: '기간·할인 구조로서의 PLF' },
      body: [
        {
          en: 'Principal Limit = Maximum Claim Amount × PLF. The PLF (0–1) rises with age and falls as the expected rate rises — exactly what present-value intuition predicts: a shorter expected duration (older borrower) and a lower discount rate (lower expected rate) both leave more room before the compounding balance is projected to overtake value. The FHA tables bake in mortality, MIP accrual, and a target ending LTV. Treat the PLF as the program’s risk-based LTV grid, not a black box.',
          ko: '원금한도 = 최대 청구 금액(MCA) × PLF. PLF(0~1)는 나이가 많을수록 커지고 예상금리가 높을수록 작아집니다. 이는 현재가치 직관과 정확히 일치합니다. 기대 기간이 짧을수록(고령 차주), 할인율이 낮을수록(낮은 예상금리), 복리 잔액이 가치를 추월하기까지 여유가 더 큽니다. FHA 표에는 사망률, MIP 누적, 목표 종료 LTV가 반영되어 있습니다. PLF를 블랙박스가 아니라 프로그램의 위험 기반 LTV 그리드로 다루십시오.',
        },
      ],
    },
    {
      heading: { en: 'Maximum Claim Amount and the national cap', ko: '최대 청구 금액과 전국 한도' },
      body: [
        {
          en: 'MCA = lesser of appraised value and the FHA HECM limit (one national figure, [$1,249,125 for 2026](https://www.hud.gov/sites/dfiles/hudclips/documents/2025-22hsgml.pdf) — note it is a single nationwide cap, not the county-by-county schedule you use on forward FHA). For HECM for Purchase, the MCA is the lesser of appraised value or sales price, still subject to that national limit. Value above the cap is simply unmonetizable through the HECM; that is where a proprietary "jumbo reverse" enters the conversation. The MCA also sets the up-front MIP base and the 98% assignment threshold, so it is the anchor figure on the file.',
          ko: 'MCA = 감정가와 FHA HECM 한도 중 낮은 금액(전국 단일 수치, [2026년 $1,249,125](https://www.hud.gov/sites/dfiles/hudclips/documents/2025-22hsgml.pdf) — 정방향 FHA에서 쓰는 카운티별 표가 아니라 전국 단일 한도임에 유의). 주택 구입용 HECM(HECM for Purchase)의 경우 MCA는 감정가 또는 매매가 중 낮은 금액이며, 여전히 전국 한도가 적용됩니다. 한도를 초과하는 가치는 HECM으로는 현금화할 수 없으며, 바로 이 지점에서 독자(프로프라이어터리) "점보 리버스"가 논의에 들어옵니다. MCA는 선납 MIP 기준과 98% 양도 임계치도 정하므로 파일의 기준 수치입니다.',
        },
      ],
    },
    {
      heading: { en: 'From Principal Limit to net availability', ko: '원금한도에서 순가용액으로' },
      diagram: 'principalLimit',
      body: [
        {
          en: 'The Principal Limit is gross. Net it down by mandatory obligations: any existing liens to be retired (the HECM must close in first position, so a payoff of the current mortgage is typically the largest), financed closing costs, up-front MIP, and any LESA set-aside. First-year draw limits also apply (generally 60% of the Principal Limit, or mandatory obligations plus 10%, whichever is greater). What remains is what the borrower can actually access — model it before you quote.',
          ko: '원금한도는 총액입니다. 필수 의무로 차감하십시오. 상환할 기존 담보권(HECM은 1순위로 마감되어야 하므로 현재 모기지 상환이 보통 가장 큼), 자금조달된 마감 비용, 선납 MIP, LESA 적립액입니다. 1차년도 인출 한도도 적용됩니다(일반적으로 원금한도의 60%, 또는 필수 의무 + 10% 중 큰 금액). 남는 금액이 차주가 실제로 받을 수 있는 액수입니다. 견적 전에 모델링하십시오.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Principal Limit = MCA × PLF; read the PLF as a risk-based, age-and-rate-indexed maximum LTV.',
      ko: '원금한도 = MCA × PLF. PLF는 나이와 금리로 색인된 위험 기반 최대 LTV로 읽으십시오.',
    },
    {
      en: 'MCA uses one national cap ($1,249,125, 2026), not county limits; excess value needs a proprietary jumbo.',
      ko: 'MCA는 카운티 한도가 아닌 전국 단일 한도($1,249,125, 2026)를 씁니다. 초과 가치는 독자 점보가 필요합니다.',
    },
    {
      en: 'Net the Principal Limit for lien payoff, costs, MIP, LESA, and the first-year 60% draw rule before quoting.',
      ko: '견적 전에 선순위 상환, 비용, MIP, LESA, 1차년도 60% 인출 규칙으로 원금한도를 차감하십시오.',
    },
  ],
}
