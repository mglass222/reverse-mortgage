export default {
  slug: 'hecm-basics',
  title: { en: 'HECM Program Architecture', ko: 'HECM 프로그램 구조' },
  intro: {
    en: 'The HECM is FHA’s reverse mortgage under Section 255 of Title II of the National Housing Act, administered by HUD and securitized through Ginnie Mae. If you have run FHA forward paper (203(b)) and understand the MMI Fund and Ginnie execution, you already know most of the plumbing — the differences are in the insurance triggers and the borrower gate.',
    ko: 'HECM은 전국주택법(National Housing Act) Title II 제255조에 따른 FHA의 역모기지로, HUD가 관리하고 지니메(Ginnie Mae)를 통해 유동화됩니다. FHA 정방향 상품(203(b))을 다뤄 보았고 MMI 기금과 지니메 실행을 이해한다면 대부분의 기본 구조는 이미 아는 셈입니다. 차이는 보험 발동 조건과 차주 진입 요건에 있습니다.',
  },
  sections: [
    {
      heading: { en: 'Insurance and secondary-market execution', ko: '보험과 2차 시장 실행' },
      body: [
        {
          en: 'HECMs are insured out of the Mutual Mortgage Insurance Fund, funded by borrower-paid MIP. The FHA insurance runs to both sides: it caps borrower/heir liability at value, and it covers lender shortfalls subject to FHA rules. Servicers may assign the loan to HUD once the balance reaches 98% of the Maximum Claim Amount, transferring tail risk to FHA. Most originations are pooled into Ginnie Mae HMBS, so your familiar Ginnie execution and the OAS on those pools drive the margins that ultimately set borrower pricing.',
          ko: 'HECM은 차주가 납부하는 MIP로 조성되는 상호모기지보험기금(MMI Fund)에서 보험이 지급됩니다. FHA 보험은 양쪽 모두에 적용됩니다. 차주·상속인의 책임을 가치 한도로 제한하고, FHA 규정에 따라 대출기관의 부족분을 보전합니다. 서비서는 잔액이 최대 청구 금액(MCA)의 98%에 도달하면 대출을 HUD에 양도하여 후순위 위험을 FHA로 이전할 수 있습니다. 대부분의 신규 대출은 지니메 HMBS로 풀링되므로, 익숙한 지니메 실행과 해당 풀의 OAS가 결국 차주 가격을 정하는 마진을 좌우합니다.',
        },
      ],
    },
    {
      heading: { en: 'Borrower and occupancy gate', ko: '차주 및 거주 요건' },
      body: [
        {
          en: 'Youngest titleholder must be 62+ (the age drives the PLF, as a proxy for expected loan duration). The subject must be the principal residence — second homes and pure investment properties are out, which removes most of your CRE playbook. Eligible non-borrowing spouses can defer due-and-payable status under post-2014 rules, but they do not receive proceeds and the PLF is set off the youngest of the borrowing/non-borrowing pair. HUD-approved counseling is a hard gate ahead of application — a consumer-protection step with no analogue in forward origination.',
          ko: '최연소 명의자는 만 62세 이상이어야 합니다(나이는 기대 대출 기간의 대리변수로서 PLF를 결정합니다). 대상 주택은 주 거주지여야 합니다. 별장이나 순수 투자용 부동산은 제외되며, 이는 귀하의 CRE 전략 대부분을 배제합니다. 2014년 이후 규정에 따라 적격 비차용 배우자는 상환 의무 발생을 유예할 수 있으나 자금을 수령하지 못하며, PLF는 차용·비차용 배우자 중 최연소자를 기준으로 설정됩니다. HUD 승인 상담은 신청에 앞선 필수 관문으로, 정방향 대출에는 대응물이 없는 소비자 보호 절차입니다.',
        },
      ],
    },
    {
      heading: { en: 'Eligible collateral', ko: '적격 담보' },
      body: [
        {
          en: 'One-to-four units with borrower occupancy of one, FHA-approved condominium projects (or single-unit approval), PUDs, and FHA-compliant manufactured homes. The property must clear FHA minimum property standards on the appraisal — expect repair set-asides where it does not, much like an FHA forward 203(b) condition, not a 203(k) rehab.',
          ko: '1~4세대(차주가 한 세대 거주), FHA 승인 콘도 프로젝트(또는 단일 세대 승인), 계획단지(PUD), FHA 기준에 부합하는 조립식 주택이 적격입니다. 부동산은 감정에서 FHA 최소주택기준을 통과해야 하며, 그렇지 못하면 수리 적립이 요구됩니다. 이는 203(k) 리모델링이 아니라 FHA 정방향 203(b) 조건과 유사합니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'FHA-insured via the MMI Fund; pooled into Ginnie Mae HMBS — the execution and economics you already know.',
      ko: 'MMI 기금을 통한 FHA 보험, 지니메 HMBS로 풀링. 귀하가 이미 아는 실행과 경제 구조입니다.',
    },
    {
      en: 'Servicer can assign to HUD at 98% of MCA, shifting tail risk to FHA.',
      ko: '서비서는 MCA의 98%에서 HUD에 양도하여 후순위 위험을 FHA로 이전할 수 있습니다.',
    },
    {
      en: 'Gate: youngest titleholder 62+, principal residence only, mandatory counseling, FHA property standards.',
      ko: '요건: 최연소 명의자 62세 이상, 주 거주지 한정, 의무 상담, FHA 주택 기준.',
    },
  ],
}
