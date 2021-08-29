import { useContext, useEffect } from "react"
import { Can } from "../components/Can"

import { AuthContext } from "../context/AuthContext"
import { useCan } from "../hooks/useCan"
import { setupAPIClient } from "../services/api"
import { api } from "../services/apiClient"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  const useCanSeeMetrics = useCan({ permissions: ['metrics.list'] })

  console.log({ useCanSeeMetrics })

  useEffect(() => {
    api.get('/me')
      .then(response => console.log('[useEffect]', response.data))
  })

  return (
    <>
      <h1>
        Dashboard {user?.email}
      </h1>
      <Can permissions={['metrics.list']} >
        <div> Métricas </div>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')

  console.log(response.data)

  return {
    props: {}
  }
})