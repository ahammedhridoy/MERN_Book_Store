/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// react icons
import { FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="px-4 my-12 lg:px-24">
      <h2 className="mb-10 text-5xl font-bold leading-snug text-center">
        Our Customers
      </h2>

      {/* reviews card */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5">
          <div className="space-y-6">
            <div className="flex gap-2 text-amber-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* texts */}
            <div className="mt-7">
              <p className="mb-5">
                The Night Circus is pure magic. Erin Morgenstern weaves a
                mesmerizing tale filled with wonder, mystery, and a touch of
                romance. The vivid descriptions of the circus make you feel as
                though you are wandering through its mystical tents. The
                characters are beautifully developed, and the plot twists kept
                me on the edge of my seat. I was completely captivated from
                start to finish
              </p>

              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-sm"> CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5">
          <div className="space-y-6">
            <div className="flex gap-2 text-amber-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* texts */}
            <div className="mt-7">
              <p className="mb-5">
                This book is a game-changer for anyone looking to build better
                habits or break bad ones. James Clear offers practical advice
                backed by science, making it easy to understand and apply to
                your daily life. The concepts of habit stacking and the 1%
                improvement really resonated with me. A must-read for personal
                development enthusiasts.
              </p>

              <h5 className="text-lg font-medium">Mark Young</h5>
              <p className="text-sm"> Writer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5">
          <div className="space-y-6">
            <div className="flex gap-2 text-amber-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* texts */}
            <div className="mt-7">
              <p className="mb-5">
                This novel is a beautiful blend of mystery, love, and survival.
                Delia Owens' writing is poetic, and her descriptions of the
                marshland are so vivid that you can almost hear the rustle of
                the reeds.
              </p>

              <h5 className="text-lg font-medium">David</h5>
              <p className="text-sm"> Developer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5">
          <div className="space-y-6">
            <div className="flex gap-2 text-amber-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* texts */}
            <div className="mt-7">
              <p className="mb-5">
                Tara Westover's memoir is a powerful and moving account of her
                journey from a strict, isolated upbringing to earning a PhD from
                Cambridge University. The story is inspiring, though some parts
                are difficult to read due to the harsh realities she faced.
                "Educated" is a testament to the resilience of the human spirit
                and the transformative power of education.
              </p>

              <h5 className="text-lg font-medium">Natalia</h5>
              <p className="text-sm"> Teacher</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5">
          <div className="space-y-6">
            <div className="flex gap-2 text-amber-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* texts */}
            <div className="mt-7">
              <p className="mb-5">
                This book is a timeless classic that speaks to the soul. Paulo
                Coelho's "The Alchemist" is a beautifully written story about
                following your dreams and listening to your heart. The
                allegorical tale of Santiago's journey to find his personal
                legend is both simple and profound. Every time I read it, I
                discover new insights. A book that everyone should read at least
                once in their lifetime.
              </p>

              <h5 className="text-lg font-medium">Vivek</h5>
              <p className="text-sm"> Unknown</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="h-20"></div>
    </div>
  );
};

export default Review;
