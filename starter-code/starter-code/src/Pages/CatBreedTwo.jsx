import React from "react";
import SingleCatOverlay from "./SingleCatOverlay";

const CatBreedTwo = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await res.json();
        setCats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCatData();
  }, []);

  return (
    <>
      <div>
        <div className="">Welcome to The dog breed info list</div>
        <form>
          <input
            input="text"
            name="search"
            id="search"
            placeholder="What breed you want?"
          ></input>
        </form>
        <div>{}</div>
      </div>
      {/* <div className="containter">The dog Element</div>
      <h2>Page One</h2>
      <ul>
        <Link to="/page-one/a">A</Link>
      </ul>
      <ul>
        <Link to="/page-one/b">B</Link>
      </ul> */}
    </>
  );
};

export default CatBreedTwo;
