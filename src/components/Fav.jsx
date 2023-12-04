import { useSelector } from "react-redux"
import FavCard from "./FavCard";

const Fav = () => {
  const favItems = useSelector(state => state.product.fav); 
  return (
    <div className=" my-5 pt-16 flex flex-wrap gap-7 justify-center">
      {favItems?.map((item) => (
        <FavCard key={item?.id} product={item} />
      ))}
    </div>
  );
}

export default Fav