import Card from '../UI/Card'
import './List.css'
import ListItem from './ListItem'

function List() {
  return (
    <Card className="list-container">
      <ul>
        <ListItem />
      </ul>
    </Card>
  )
}

export default List
