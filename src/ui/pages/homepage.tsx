import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      Homepage
      <Link to="/private/dashboard">To Dashboard</Link>
      <Link to="/private/compliance-tracker">To Compliance</Link>
      <Link to="/private/invoicer">To Invoice</Link>
     
      <p className="font-[100]"> Aa 123</p>
      <p className="font-[200]"> Aa 123</p>
      <p className="font-[300]"> Aa 123</p>
      <p className="font-[450] italic"> Italic</p>
      <p className="font-[550]"> 550</p>
      <p className="font-[600]"> Aa 123</p>
      <p className="font-[700]"> Aa 123</p>
      <p className="font-[800]"> Aa 123</p>
      <p className="font-[900]"> Aa 123</p>
    </div>
  );
};

export default Homepage;
