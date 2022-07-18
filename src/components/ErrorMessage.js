import { MdOutlineError } from "react-icons/md";

const ErrorMessage = ({error}) => {
  return (
    <div className="error flex items-center">
      <MdOutlineError className="mr-4 text-4xl text-[#f04d62]" />
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
