import { useState, useEffect } from 'react'

import '../styles/repositories.scss'

import { RespositoryItem } from './RespositoryItem'

export function RepositoryList() {
  const [respositories, setRespositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/extevao/repos')
      .then((res) => res.json())
      .then((githubRespositories) => setRespositories(githubRespositories))
  }, [])

  return (
    <section className="respository-list">
      <h1> Lista de repositórios </h1>

      <ul>
        {respositories.map((repository) => (
          <RespositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  )
}
