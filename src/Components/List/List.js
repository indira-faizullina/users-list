import Card from '../UI/Card'
import './List.css'

function List(props) {
  return (
    <Card className="list-container">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default List
