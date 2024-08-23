/* eslint-disable react/no-unescaped-entities */
import BannerCard from "../shared/BannerCard";

export const Banner = () => {
  return (
    <div className="flex items-center px-4 bg-teal-100 lg:px-24">
      <div className="flex flex-col items-center justify-between gap-12 py-40 md:flex-row-reverse">
        {/* right side */}
        <div className="h-full md:w-1/2">
          <BannerCard />
        </div>

        {/* left side */}
        <div className="space-y-8 bg-teal-100 md:w-1/2">
          <h1 className="mb-5 text-5xl font-bold leading-snug text-black lg:text-6xl lg:leading-tight">
            Buy and sell your books{" "}
            <span className="text-blue-700">for the best prices</span>
          </h1>
          <p>
            Find and read more books you'll love, and keep track of the books
            you want to read. Be part of the world's largest community of book
            lovers on Goodreads.
          </p>
          <div>
            <input
              type="search"
              placeholder="Search a book here"
              className="px-2 py-2 rounded-s-sm"
            />
            <button className="px-6 py-2 font-medium text-white transition-all duration-200 ease-in bg-blue-700 hover:bg-black">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
