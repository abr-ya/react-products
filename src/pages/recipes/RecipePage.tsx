import { useParams } from "react-router-dom";

const RecipePage = () => {
  const {id} = useParams();

  return (
    <div>RecipePage {id}</div>
  )
}

export default RecipePage