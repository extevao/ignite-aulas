import { RespositoryItem } from './RespositoryItem'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/extevao',
}

export function RepositoryList() {
  return (
    <section className="respository-list">
      <h1> Lista de repositórios </h1>

      <ul>
        <RespositoryItem repository={repository} />
        <RespositoryItem repository={repository} />
        <RespositoryItem repository={repository} />
      </ul>
    </section>
  )
}
