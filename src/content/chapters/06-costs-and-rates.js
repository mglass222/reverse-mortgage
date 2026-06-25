export default {
  slug: 'costs-and-rates',
  title: { en: 'Pricing, MIP & the Rate Stack', ko: '가격, MIP, 금리 구조' },
  intro: {
    en: 'HECM cost components rhyme with the forward closing you know — origination, third-party fees, title, an interest rate — plus the mortgage insurance that is the program’s structural backbone. The nuance is in how MIP is charged on both ends and how the adjustable rate is assembled from index, margin, and floor.',
    ko: 'HECM 비용 구성은 귀하가 아는 정방향 마감과 비슷합니다. 개시 수수료, 제3자 비용, 권원, 이자율에 더해 프로그램의 구조적 근간인 모기지 보험이 있습니다. 핵심은 MIP가 양쪽 끝에서 어떻게 부과되는지, 그리고 변동금리가 지수·마진·하한으로 어떻게 조립되는지에 있습니다.',
  },
  sections: [
    {
      heading: { en: 'MIP: up-front and ongoing', ko: 'MIP: 선납과 지속' },
      body: [
        {
          en: 'Initial MIP (IMIP) is 2.0% of the Maximum Claim Amount, charged at closing on value up to the national cap — not on the amount drawn. Annual MIP is 0.50% accruing on the outstanding balance, capitalized monthly into the loan rather than billed. Together they fund the MMI Fund that backs the non-recourse guarantee and the 98%-MCA assignment option. Treat IMIP as the single largest closing line and annual MIP as a 50 bp add-on to the effective accrual rate when you model the balance trajectory.',
          ko: '선납 MIP(IMIP)는 최대 청구 금액(MCA)의 2.0%로, 인출액이 아니라 전국 한도까지의 가치에 대해 마감 시 부과됩니다. 연간 MIP는 미상환 잔액에 0.50%로 누적되며, 청구되지 않고 매월 대출에 자본화됩니다. 이 둘이 비소구 보증과 MCA 98% 양도 옵션을 뒷받침하는 MMI 기금을 조성합니다. IMIP는 마감에서 가장 큰 단일 항목으로, 연간 MIP는 잔액 궤적을 모델링할 때 실효 누적금리에 더하는 50bp 가산으로 다루십시오.',
        },
      ],
    },
    {
      heading: { en: 'Origination cap and third-party costs', ko: '개시 수수료 한도와 제3자 비용' },
      body: [
        {
          en: 'The origination fee is statutorily capped: 2% of the first $200,000 of MCA plus 1% of the balance, floored at $2,500 and ceilinged at $6,000 — far tighter than the points-and-fees latitude on forward or CRE paper. Layer on the usual third-party costs (FHA appraisal, title, escrow, recording) and an ongoing servicing fee set-aside on some structures. Most of these can be financed into the Principal Limit, which is convenient but compounds — disclose the lifetime cost, not just the cash-to-close.',
          ko: '개시 수수료는 법령상 한도가 있습니다. MCA 첫 $200,000의 2%에 잔액의 1%를 더하고, 하한 $2,500, 상한 $6,000입니다. 정방향이나 CRE 문서의 포인트·수수료 재량보다 훨씬 빡빡합니다. 여기에 통상의 제3자 비용(FHA 감정, 권원, 에스크로, 등기)과 일부 구조의 지속 서비싱 적립이 더해집니다. 대부분 원금한도로 자금조달할 수 있어 편리하지만 복리로 불어납니다. 마감 현금이 아니라 생애 비용을 공시하십시오.',
        },
      ],
    },
    {
      heading: { en: 'Fixed vs. ARM: index, margin, floor', ko: '고정 vs. ARM: 지수, 마진, 하한' },
      body: [
        {
          en: 'Fixed-rate HECMs (lump sum only) price off a fixed note rate. ARMs — which unlock tenure, term, and the LOC — accrue at an index (now standardly 30-day Average SOFR, having replaced LIBOR, or a CMT index) plus the lender margin, resetting monthly or annually within periodic and lifetime caps. The same margin also feeds the expected rate used to size the PLF, subject to the expected-rate floor, so a thinner margin both lowers accrual and enlarges initial capacity. Margin is the lever that moves both pricing and proceeds — quote it deliberately.',
          ko: '고정금리 HECM(일시금만)은 고정 노트금리로 가격이 책정됩니다. 종신·기간제·신용한도를 여는 ARM은 지수(이제 LIBOR를 대체한 30일 평균 SOFR가 표준이며, 또는 CMT 지수)에 대출기관 마진을 더해 누적하며, 주기적·생애 한도 내에서 월별 또는 연별로 재설정됩니다. 동일한 마진이 PLF 산정에 쓰이는 예상금리에도 반영되되 예상금리 하한이 적용되므로, 마진이 얇으면 누적도 낮아지고 초기 가용액도 커집니다. 마진은 가격과 수령액을 모두 움직이는 레버입니다. 신중하게 제시하십시오.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'IMIP 2.0% of MCA at closing + 0.50% annual on the balance; model annual MIP as a 50 bp accrual add-on.',
      ko: 'IMIP는 마감 시 MCA의 2.0%, 연간 MIP는 잔액의 0.50%. 연간 MIP는 50bp 누적 가산으로 모델링하십시오.',
    },
    {
      en: 'Origination fee is capped 2%/1% with a $2,500–$6,000 band — much tighter than forward points-and-fees.',
      ko: '개시 수수료는 2%/1%에 $2,500~$6,000 구간으로 제한됩니다. 정방향 포인트·수수료보다 훨씬 엄격합니다.',
    },
    {
      en: 'Margin drives both the note-rate accrual and (via the expected rate) the PLF — one lever, two effects.',
      ko: '마진은 노트금리 누적과 (예상금리를 통한) PLF를 모두 좌우합니다. 레버 하나, 효과 둘입니다.',
    },
  ],
}
