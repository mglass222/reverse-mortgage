export default {
  slug: 'disbursement-options',
  title: { en: 'Draw Structures & the Growing Line', ko: '인출 구조와 늘어나는 한도' },
  intro: {
    en: 'Once the net Principal Limit is fixed, the borrower elects a disbursement structure. The menu — lump sum, tenure, term, line of credit, or a hybrid — is a cash-flow and rate-risk decision, and the adjustable-rate line of credit carries a feature with no forward-side equivalent: unused availability that compounds.',
    ko: '순 원금한도가 확정되면 차주는 인출 구조를 선택합니다. 메뉴(일시금, 종신, 기간제, 신용한도, 또는 혼합)는 현금흐름과 금리위험에 관한 결정이며, 변동금리 신용한도에는 정방향에 대응물이 없는 특징이 있습니다. 미사용 가용액이 복리로 증가한다는 점입니다.',
  },
  sections: [
    {
      heading: { en: 'Lump sum and the fixed-rate trade-off', ko: '일시금과 고정금리의 절충' },
      diagram: 'disbursementOptions',
      body: [
        {
          en: 'A single full draw is the only structure available on the fixed-rate HECM. It suits a defined use — retiring a sizeable forward lien, funding a one-time obligation — but you are accruing interest and MIP on the entire balance from day one, and there is no re-draw. For a borrower whose need is staged, the fixed lump sum is usually the wrong tool even though it shows the cleanest headline rate.',
          ko: '단일 전액 인출은 고정금리 HECM에서 유일하게 가능한 구조입니다. 정해진 용도(상당한 규모의 정방향 선순위 상환, 일회성 의무 충당)에 적합하지만, 첫날부터 전체 잔액에 이자와 MIP가 누적되고 재인출이 불가능합니다. 필요가 단계적인 차주에게는 표면 금리가 가장 깔끔해 보여도 고정 일시금이 대개 잘못된 선택입니다.',
        },
      ],
    },
    {
      heading: { en: 'Tenure and term as an annuity overlay', ko: '연금 형태의 종신과 기간제' },
      body: [
        {
          en: 'Tenure pays a level monthly amount for as long as the home is the principal residence — effectively a lifetime annuity collateralized by equity, with the FHA insurance bearing the longevity tail. Term front-loads a larger payment over a fixed horizon. Both convert the Principal Limit into predictable income and are useful when the planning objective is durable cash flow rather than a capital sum — for instance, bridging to a delayed Social Security claim.',
          ko: '종신은 주택이 주 거주지인 동안 균등한 월액을 지급합니다. 사실상 주택 자본으로 담보된 평생 연금이며, 장수 위험은 FHA 보험이 부담합니다. 기간제는 정해진 기간에 더 큰 지급액을 앞당겨 줍니다. 둘 다 원금한도를 예측 가능한 소득으로 전환하며, 계획 목표가 목돈이 아니라 지속적 현금흐름일 때 유용합니다. 예를 들어 사회보장연금 수령을 미루는 동안의 가교로 쓸 수 있습니다.',
        },
      ],
    },
    {
      heading: { en: 'The line of credit and its growth feature', ko: '신용한도와 그 증가 특징' },
      body: [
        {
          en: 'The HECM LOC behaves like a HELOC you cannot freeze or cancel — but the distinctive mechanic is growth: the unused portion increases at the same rate the balance would accrue (note rate + annual MIP). Over a multi-decade horizon that compounding can materially exceed future home-price appreciation, which is why opening a line early and letting it grow is a recognized standby-liquidity strategy, not merely a rainy-day reserve. It is the one place where the program’s negative-amortization engine works in the borrower’s favor.',
          ko: 'HECM 신용한도는 동결하거나 취소할 수 없는 HELOC처럼 작동하지만, 특징적인 메커니즘은 증가입니다. 미사용 부분이 잔액이 누적될 금리(노트금리 + 연간 MIP)와 동일한 속도로 늘어납니다. 수십 년의 기간에 걸쳐 이 복리는 향후 주택가격 상승을 크게 앞지를 수 있으며, 그래서 한도를 일찍 개설해 키우는 것이 단순한 비상금이 아니라 인정받는 대기 유동성 전략입니다. 프로그램의 역상각 엔진이 차주에게 유리하게 작동하는 유일한 지점입니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Fixed-rate = lump sum only, accruing on the full balance immediately; staged needs argue for an ARM structure.',
      ko: '고정금리는 일시금만 가능하며 전체 잔액에 즉시 누적됩니다. 단계적 필요라면 ARM 구조가 유리합니다.',
    },
    {
      en: 'Tenure/term convert the Principal Limit into an equity-collateralized annuity, with FHA bearing longevity risk.',
      ko: '종신·기간제는 원금한도를 주택 자본 담보 연금으로 전환하며 장수 위험은 FHA가 부담합니다.',
    },
    {
      en: 'The unused LOC grows at note rate + MIP — a compounding standby-liquidity strategy, unique to the HECM.',
      ko: '미사용 신용한도는 노트금리 + MIP로 증가합니다. HECM 고유의 복리형 대기 유동성 전략입니다.',
    },
  ],
}
