import { Link } from "react-router-dom";
import { errorpage } from "../../assets";

const ErrorPage = () => {
  return (
    <div className=" h-screen flex pb-5 flex-col items-center gap-3">
      <img className=" h-screen " src={errorpage} alt="ERROR 404" />
      <Link to="/">
        <button
          className="bg-purple-600  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Back To Homepage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
