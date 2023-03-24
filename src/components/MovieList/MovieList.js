import { Link } from "react-router-dom"
const MovieList = ({set, way}) =>{
   return <ul>
    {set.map(item => <li key={item.id}>
      <Link to = {way ? `${way}/${item.id}` : `${item.id}`}> {item.title} </Link>
      </li>)}
   </ul>
}
export default MovieList