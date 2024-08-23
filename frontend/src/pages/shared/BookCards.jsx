/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// react icons
import { FaCartShopping } from "react-icons/fa6";

const BookCards = ({ headline, books }) => {
  return (
    <div className="px-4 my-16 lg:px-24">
      <h2 className="my-5 text-5xl font-bold text-center">{headline}</h2>

      {/* cards */}
      <div className="mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="w-full h-full "
        >
          {books.map((book) => (
            <SwiperSlide
              className="flex items-center justify-center text-center"
              key={book._id}
            >
              <div className="relative p-8 bg-gray-100 rounded-lg">
                <img src={book.imageURL} alt="" className="w-full" />
                <div className="absolute p-2 bg-blue-700 rounded top-3 right-3 hover:bg-black ">
                  <FaCartShopping className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex items-start justify-between mt-5 mb-8 space-y-2 text-left">
                <div>
                  <h3 className="font-semibold text-black">{book.bookTitle}</h3>
                  <p>{book.authorName}</p>
                </div>
                <div>
                  <p className="font-bold text-blue-700">${book?.bookPrice}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
