export default {
  slug: 'introduction',
  title: { en: 'Introduction — Reframing the Loan You Already Know', ko: '소개 — 이미 아는 대출을 다시 보기' },
  intro: {
    en: 'You already underwrite forward mortgages and CRE deals in your sleep. A HECM is not a new asset class so much as a familiar one run in reverse: the amortization sign flips, repayment ability gives way to an actuarial draw against equity, and the credit decision shifts from the borrower’s income to the collateral and the FHA insurance fund. This course maps reverse mortgage mechanics onto the concepts you already command.',
    ko: '귀하는 이미 정방향 모기지와 상업용 부동산(CRE) 거래를 능숙하게 심사합니다. HECM은 완전히 새로운 자산군이라기보다 익숙한 대출을 거꾸로 운용하는 것입니다. 상각의 부호가 뒤집히고, 상환 능력 심사가 자본(에쿼티)에 대한 보험계리적 인출로 대체되며, 신용 결정의 초점이 차주의 소득에서 담보와 FHA 보험기금으로 이동합니다. 이 과정은 역모기지의 메커니즘을 귀하가 이미 숙달한 개념 위에 대응시킵니다.',
  },
  sections: [
    {
      heading: { en: 'The structural inversion', ko: '구조적 역전' },
      body: [
        {
          en: 'In every forward loan you originate, the borrower contracts to retire principal on a schedule, and your credit analysis is fundamentally a repayment-capacity question — DTI, residual income, DSCR. A HECM inverts that contract: there is no required monthly principal-and-interest payment, the balance accretes, and the loan self-liquidates only at a defined maturity event. The risk you are pricing is no longer "can they pay?" but "will the collateral, net of accruals, cover the balance at termination?"',
          ko: '귀하가 취급하는 모든 정방향 대출에서 차주는 일정에 따라 원금을 상환하기로 약정하며, 신용 분석은 본질적으로 상환능력 문제(DTI, 잔여소득, DSCR)입니다. HECM은 그 약정을 뒤집습니다. 의무적인 월 원리금 상환이 없고, 잔액이 누적되며, 대출은 정해진 만기 사유에서만 자체 청산됩니다. 귀하가 가격을 매기는 위험은 더 이상 "차주가 갚을 수 있는가?"가 아니라 "누적액을 차감한 담보가 종료 시점의 잔액을 충당할 것인가?"입니다.',
        },
      ],
    },
    {
      heading: { en: 'Why the product exists', ko: '이 상품이 존재하는 이유' },
      diagram: 'equityGap',
      body: [
        {
          en: 'The borrower profile is the mirror image of your typical CRE sponsor: high equity, thin or fixed cash flow, and a strong incentive to avoid disposition. Think of a 74-year-old with a free-and-clear $1.1M property in Hancock Park whose income is Social Security plus a modest pension. A cash-out refinance fails the ATR/QM residual-income test; a HELOC can be frozen or called and still demands amortizing payments. The HECM monetizes the equity without a repayment obligation and without forcing a sale — that is the niche it fills.',
          ko: '차주 프로필은 전형적인 CRE 스폰서의 정반대입니다. 높은 자본, 얇거나 고정된 현금흐름, 그리고 처분을 피하려는 강한 유인입니다. 핸콕파크에 담보가 전혀 없는 110만 달러 부동산을 보유하고 소득은 사회보장연금과 적은 연금뿐인 74세 차주를 생각해 보십시오. 현금인출 재융자는 ATR/QM 잔여소득 기준을 통과하지 못하고, HELOC은 동결되거나 회수될 수 있으며 여전히 상각 상환을 요구합니다. HECM은 상환 의무 없이, 매각을 강요하지 않고 자본을 현금화합니다. 바로 이 틈새를 채웁니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'A HECM is a forward loan run in reverse: no scheduled P&I, an accreting balance, self-liquidating at maturity.',
      ko: 'HECM은 정방향 대출을 거꾸로 운용하는 것입니다. 예정된 원리금 상환이 없고, 잔액이 누적되며, 만기에 자체 청산됩니다.',
    },
    {
      en: 'The credit question moves from repayment capacity to collateral sufficiency backstopped by FHA insurance.',
      ko: '신용 판단의 초점이 상환능력에서 FHA 보험으로 보강된 담보 충분성으로 이동합니다.',
    },
    {
      en: 'It serves the equity-rich, cash-constrained owner who fails ATR/QM or wants to avoid a forced sale.',
      ko: 'ATR/QM을 통과하지 못하거나 강제 매각을 피하려는, 자본은 많지만 현금이 제약된 소유자를 위한 상품입니다.',
    },
  ],
}
