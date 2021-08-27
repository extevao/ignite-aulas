import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"
import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { withSSRGuest } from "../utils/withSSRGuest"

export default function Home() {
  const [email, setEmail] = useState('diego@rocketseat.team')
  const [password, setPassword] = useState('123456')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <button type="submit"> Entrar </button>
    </form>
  )
}


export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})
