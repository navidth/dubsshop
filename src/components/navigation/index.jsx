
import BrandLogo from "./Brand";
import LoginCart from "./LoginCart";
import Navbar from "./Navbar";
import Api from '@/utils/api'

const Navigation = async () => {
  const res = await fetch(`${Api}/category`,{
    cache: "force-cache"
  });
  const data = await res.json();

  return (
    <div className="shadownavbar">
      <div className="justify-content-center align-items-center">
        <div className="d-flex justify-content-between navbartop">
          <div className="d-none  d-sm-block"></div>
          <BrandLogo></BrandLogo>
          <LoginCart ></LoginCart>
        </div>
        {/* <!-- menu --> */}
        <Navbar data={data}></Navbar>
      </div>
    </div>
  );
};
export default Navigation;
