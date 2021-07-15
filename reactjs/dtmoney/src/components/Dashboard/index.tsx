import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Contaier } from "./styles";

export function Dashboard() {
  return (
    <Contaier>
      <Summary />
      <TransactionsTable />
    </Contaier>
  )
}