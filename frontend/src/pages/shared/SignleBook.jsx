import { useLoaderData } from "react-router-dom";

import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

const SignleBook = () => {
  const data = useLoaderData();
  const { bookTitle } = data;
  console.log(data);
  return (
    <div className="mt-20">
      <Banner>
        <div className="z-50 flex justify-between w-full px-4 py-12 border-b border-gray-200  bg-amber-400">
          <div className="flex items-center mx-auto">
            <p className="flex items-center text-2xl font-normal text-black">
              <MdAnnouncement className="text-red-600 me-2" />
              <span className="text-4xl font-semibold">
                Book Name: {bookTitle}
              </span>
            </p>
          </div>
          <Banner.CollapseButton
            color="gray"
            className="px-0 bg-transparent border-0"
          >
            <HiX className="w-4 h-4" />
          </Banner.CollapseButton>
        </div>
      </Banner>

      {/* book details */}
      <div></div>
    </div>
  );
};

export default SignleBook;
