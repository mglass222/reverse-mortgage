import BalanceDirectionDiagram from './BalanceDirectionDiagram.jsx'
import DisbursementOptionsDiagram from './DisbursementOptionsDiagram.jsx'
import BalanceGrowthChart from './BalanceGrowthChart.jsx'
import NonRecourseDiagram from './NonRecourseDiagram.jsx'
import ProcessFlowDiagram from './ProcessFlowDiagram.jsx'
import PrincipalLimitWaterfall from './PrincipalLimitWaterfall.jsx'

const diagrams = {
  balanceDirection: BalanceDirectionDiagram,
  disbursementOptions: DisbursementOptionsDiagram,
  balanceGrowth: BalanceGrowthChart,
  nonRecourse: NonRecourseDiagram,
  processFlow: ProcessFlowDiagram,
  principalLimit: PrincipalLimitWaterfall,
}

export default diagrams
