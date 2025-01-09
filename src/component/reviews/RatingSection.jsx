import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const RatingSection = () => {
  return (
    <div className="text-center  my-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
          alt="Google Logo"
          className="w-32"
        />
        <div>
          <h2 className="text-xl md:text-2xl text-left font-medium text-gray-600">
            Google Rating
          </h2>
          <div className="flex items-center gap-2 text-2xl text-yellow-500">
            <strong className="text-gray-900 text-4xl font-bold">4.7</strong>
            <FaStar className="text-4xl" />
            <FaStar className="text-4xl" />
            <FaStar className="text-4xl" />
            <FaStar className="text-4xl" />
            <FaStarHalfAlt className="text-4xl" />
          </div>

          <p className="text-sm text-left mt-3 text-gray-500">
            See all our reviews (111)
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
