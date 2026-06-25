export default {
  slug: 'balance-growth',
  title: { en: 'Negative Amortization, Non-Recourse & Crossover', ko: '역상각, 비소구, 교차점' },
  intro: {
    en: 'This is the risk core of the product. The balance compounds upward by design, the FHA insurance caps recovery at collateral value, and the "crossover" — where balance overtakes value — is the event the entire premium structure is priced to absorb. Understanding it is what lets you speak credibly about who is actually bearing which risk.',
    ko: '여기가 이 상품의 위험 핵심입니다. 잔액은 설계상 복리로 증가하고, FHA 보험은 회수를 담보 가치로 제한하며, "교차점"(잔액이 가치를 추월하는 지점)은 전체 보험료 구조가 흡수하도록 가격이 책정된 사건입니다. 이를 이해해야 누가 어떤 위험을 실제로 부담하는지 신뢰성 있게 설명할 수 있습니다.',
  },
  sections: [
    {
      heading: { en: 'Compounding mechanics', ko: '복리 메커니즘' },
      diagram: 'balanceGrowth',
      body: [
        {
          en: 'The balance at any point equals cumulative draws plus capitalized interest plus capitalized annual MIP — all compounding at the note rate + 0.50%. With no amortization to offset it, the curve is convex upward; the same time-value math you apply to a forward payoff runs against the borrower here. On an open LOC, model two compounding curves at once: the drawn balance growing as debt, and the undrawn line growing as availability. Both move at the same rate, which is exactly why early line establishment is powerful.',
          ko: '특정 시점의 잔액은 누적 인출액에 자본화된 이자와 자본화된 연간 MIP를 더한 값이며, 모두 노트금리 + 0.50%로 복리 증가합니다. 이를 상쇄할 상각이 없으므로 곡선은 위로 볼록합니다. 정방향 상환에 적용하는 동일한 화폐의 시간가치 계산이 여기서는 차주에게 불리하게 작동합니다. 개설된 신용한도에서는 두 개의 복리 곡선을 동시에 모델링하십시오. 부채로 증가하는 인출 잔액과 가용액으로 증가하는 미인출 한도입니다. 둘은 같은 속도로 움직이며, 바로 그래서 한도를 일찍 개설하는 것이 강력합니다.',
        },
      ],
    },
    {
      heading: { en: 'Non-recourse: who actually bears the shortfall', ko: '비소구: 부족분은 실제로 누가 부담하는가' },
      diagram: 'nonRecourse',
      body: [
        {
          en: 'At payoff, the obligation is capped at the lesser of the balance or net sale proceeds — by statute, not by a negotiated carve-out. The borrower and heirs are never personally liable for a deficiency; the FHA insurance fund makes the lender whole. This is a genuine put option written by FHA and paid for by MIP. When a client frames the rising balance as "the bank taking the house," correct it precisely: the bank’s recovery is capped at value, and the taxpayer-backed fund — not the estate — absorbs the tail.',
          ko: '상환 시점에 채무는 잔액과 순매각대금 중 낮은 금액으로 제한됩니다. 협상된 예외가 아니라 법령에 의해서입니다. 차주와 상속인은 부족분에 대해 개인적으로 책임지지 않으며, FHA 보험기금이 대출기관을 보전합니다. 이는 FHA가 발행하고 MIP로 대가를 치른 진정한 풋옵션입니다. 고객이 늘어나는 잔액을 "은행이 집을 가져가는 것"으로 표현하면 정확히 바로잡으십시오. 은행의 회수는 가치로 제한되며, 후순위는 상속재산이 아니라 납세자가 뒷받침하는 기금이 흡수합니다.',
        },
      ],
    },
    {
      heading: { en: 'The crossover point and assignment', ko: '교차점과 양도' },
      body: [
        {
          en: 'Crossover is where the compounding balance meets projected value; past it, the loan is "underwater" and the insurance, not the collateral, governs recovery. Servicers manage this with the assignment election at 98% of MCA, transferring the loan to HUD before the shortfall widens. The PLF was set on day one precisely to make crossover statistically unlikely within expected duration — which is why older borrowers and lower expected rates (higher PLFs) are not a contradiction but the actuarial design holding together.',
          ko: '교차점은 복리 잔액이 예상 가치와 만나는 지점입니다. 그 이후 대출은 "수중(언더워터)"이 되고, 회수는 담보가 아니라 보험이 좌우합니다. 서비서는 MCA의 98%에서 양도를 선택하여 부족분이 커지기 전에 대출을 HUD로 이전함으로써 이를 관리합니다. PLF는 첫날에 바로 기대 기간 내 교차점을 통계적으로 희박하게 만들기 위해 설정됩니다. 그래서 고령 차주와 낮은 예상금리(높은 PLF)는 모순이 아니라 보험계리적 설계가 맞물려 작동하는 것입니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'The balance compounds at note rate + 0.50% MIP with no amortizing offset — a convex, upward curve.',
      ko: '잔액은 상각 상쇄 없이 노트금리 + 0.50% MIP로 복리 증가합니다. 위로 볼록한 곡선입니다.',
    },
    {
      en: 'Non-recourse is a statutory put: recovery capped at value, FHA (not the estate) absorbs the shortfall.',
      ko: '비소구는 법령상 풋옵션입니다. 회수는 가치로 제한되고 부족분은 상속재산이 아니라 FHA가 흡수합니다.',
    },
    {
      en: 'The PLF is calibrated to keep crossover unlikely within expected duration; servicers assign to HUD at 98% MCA.',
      ko: 'PLF는 기대 기간 내 교차점을 희박하게 유지하도록 보정됩니다. 서비서는 MCA 98%에서 HUD로 양도합니다.',
    },
  ],
}
