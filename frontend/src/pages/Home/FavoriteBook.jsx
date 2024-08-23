import favBook from "../../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavoriteBook = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 px-4 my-20 lg:px-24 md:flex-row">
      <div className="md:w-1/2">
        <img src={favBook} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="space-y-6 md:w-1/2">
        <h2 className="my-5 text-5xl font-bold leading-snug md:w-3/4">
          Find Your Favorite <span className="text-blue-600">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ut
          pariatur quia. Sint architecto tempore sapiente quibusdam et aliquid
          impedit ullam
        </p>
        <div className="flex flex-col justify-between gap-6 sm:flex-row md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold ">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold ">550+</h3>
            <p className="text-base">Regsiter User</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold ">1200+</h3>
            <p className="text-base">Pdf Downloaded</p>
          </div>
        </div>
        <Link to="/shop" className="block mt-8">
          <button className="px-5 py-2 font-semibold text-white transition-all duration-300 bg-blue-700 rounded hover:bg-black ">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteBook;
