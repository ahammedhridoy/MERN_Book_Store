import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[100vh]">
      <h1 className="mb-4 text-5xl text-green-700">
        Thank You! Your Payment is Successful
      </h1>
      <Link to={"/"}>
        <button className="px-5 py-2 font-semibold text-white transition-all duration-300 bg-blue-700 rounded hover:bg-black ">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Success;
