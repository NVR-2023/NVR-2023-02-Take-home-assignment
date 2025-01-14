import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      Homepage
      <Link to="/private/dashboard">To Dashboard</Link>
      <Link to="/private/compliance">To Compliance</Link>
      <Link to="/private/invoice">To Invoice</Link>
    </div>
  );
};

export default Homepage;
