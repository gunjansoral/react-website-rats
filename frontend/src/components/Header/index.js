
import "./style.css";
import logoBlack from "../../assets/svg/logo-black.svg";
import logoWhite from "../../assets/svg/logo-white.svg";
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import { useEffect, useState } from "react";

const Header = ({ menuItems }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isBlack, setIsBlack] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 720); // Set isSmallScreen based on window width
      setIsBlack(window.innerWidth < 720);
    };
    window.addEventListener("resize", handleResize); // Add event listener for window resize
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <header>
      <div className="container">
        {!isSmallScreen && (<div className="header-left">
          <ul className="menu-items">
            {menuItems.slice(0, menuItems.length / 2).map((el, index) => (
              <li key={index} ><Link className="glow" key={index} to={`/${el.toLowerCase().replace(/\s+/g, '') == "home" ?
                "" :
                el.toLowerCase().replace(/\s+/g, '')
                }`}>
                {el}
              </Link></li>
            ))}
          </ul>
        </div>)}

        <div className="header-center">
          <Link to="/">
            {!isBlack ?
              (<img className="nav-logo moving-image" src={logoWhite} alt="" />)
              : (<img className="nav-logo" src={logoBlack} alt="" />)
            }


          </Link>
        </div>

        <div className="header-right">
          {isSmallScreen && (<div className="menu-button">
            <FiMenu />
          </div>)}

          <ul className="menu-items">
            {menuItems.slice(menuItems.length / 2, menuItems.length).map((el, index) => (
              <li key={index} ><Link className="glow" to={`/${el.toLowerCase().replace(/\s+/g, '')}`}>
                {el}
              </Link></li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header