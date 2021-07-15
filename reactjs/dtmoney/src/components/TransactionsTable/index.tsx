import { useEffect } from "react";
import { api } from "../../services";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then(({ data }) => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Alugule</td>
            <td className="withdraw">R$ 1.100</td>
            <td>Casa</td>
            <td>16/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>


        </tbody>
      </table>
    </Container>
  )
}