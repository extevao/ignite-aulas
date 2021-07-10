export function RespositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link} target="_blank">
        Link do repositorio
      </a>
    </li>
  )
}
