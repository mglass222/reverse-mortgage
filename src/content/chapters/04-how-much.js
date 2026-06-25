export default {
  slug: 'how-much',
  title: { en: 'How Much Can a Borrower Receive', ko: '차용인이 받을 수 있는 금액' },
  intro: {
    en: 'The amount available from a HECM is driven by three levers: the borrower’s age, the home’s value (capped by the FHA limit), and the expected interest rate. These feed the Principal Limit — the master number from which proceeds and costs are subtracted.',
    ko: 'HECM에서 받을 수 있는 금액은 세 가지 요소에 의해 결정됩니다: 차용인의 나이, 주택 가치(FHA 한도로 제한됨), 예상 이자율입니다. 이 요소들이 원금한도(Principal Limit)를 결정하며, 여기서 수령액과 비용이 차감됩니다.',
  },
  sections: [
    {
      heading: { en: 'Principal Limit and the PLF', ko: '원금한도와 PLF' },
      body: [
        {
          en: 'The Principal Limit equals the Maximum Claim Amount multiplied by the Principal Limit Factor (PLF). The PLF is a number between 0 and 1 from FHA tables. It rises with the borrower’s age and falls as the expected interest rate rises — older borrowers and lower rates unlock more money.',
          ko: '원금한도는 최대 청구 금액(Maximum Claim Amount)에 원금한도 계수(PLF)를 곱한 값입니다. PLF는 FHA 표에서 가져온 0과 1 사이의 값입니다. 차용인의 나이가 많을수록 커지고 예상 이자율이 높을수록 작아집니다. 즉, 나이가 많고 이자율이 낮을수록 더 많은 금액을 받을 수 있습니다.',
        },
      ],
    },
    {
      heading: { en: 'Maximum Claim Amount and the FHA lending limit', ko: '최대 청구 금액과 FHA 대출 한도' },
      body: [
        {
          en: 'The Maximum Claim Amount is the lesser of the home’s appraised value and the national FHA HECM lending limit (for 2025, $1,209,750). A home appraised above the limit is treated as if it were worth the limit for this calculation.',
          ko: '최대 청구 금액은 주택 감정가와 전국 FHA HECM 대출 한도(2025년 기준 $1,209,750) 중 더 낮은 금액입니다. 한도를 초과하는 감정가의 주택은 이 계산에서 한도 금액만큼의 가치가 있는 것으로 처리됩니다.',
        },
      ],
    },
    {
      heading: { en: 'Expected interest rate', ko: '예상 이자율' },
      body: [
        {
          en: 'The expected interest rate is used only to look up the PLF. It is not necessarily the rate charged on the balance (the note rate). A higher expected rate lowers the PLF, reducing how much the borrower can access up front.',
          ko: '예상 이자율은 오직 PLF를 조회하는 데에만 사용됩니다. 잔액에 부과되는 실제 이자율(노트 금리)과 반드시 같지는 않습니다. 예상 이자율이 높을수록 PLF가 낮아져 차용인이 초기에 받을 수 있는 금액이 줄어듭니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Principal Limit = Maximum Claim Amount × PLF.',
      ko: '원금한도 = 최대 청구 금액 × PLF.',
    },
    {
      en: 'PLF rises with age and falls as the expected rate rises.',
      ko: 'PLF는 나이가 많을수록 커지고 예상 이자율이 높을수록 작아집니다.',
    },
    {
      en: 'The home value used is capped at the FHA lending limit. Try the Calculator to see the levers interact.',
      ko: '사용되는 주택 가치는 FHA 대출 한도로 제한됩니다. 계산기로 각 요소의 상호작용을 확인해 보세요.',
    },
  ],
}
