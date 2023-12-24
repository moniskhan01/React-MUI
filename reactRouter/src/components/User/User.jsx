import { useParams } from "react-router-dom";
function User() {
  const { userId } = useParams();
  return <div className="bg-green-600 p-4 text-center">User : {userId}</div>;
}

export default User;
