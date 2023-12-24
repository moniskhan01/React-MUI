import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/moniskhan01")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Data :", data);
  //         setData(data);
  //       });
  //   });
  return (
    <div className="bg-green-400 p-4 text-center text-white text-3xl">
      Github Followers: {data.following}
      <img
        className="center"
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
      />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components

export default Github;
