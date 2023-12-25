import "./Layout.css";
import { Link } from "react-router-dom";

function Layout() {
  const IsLogged = localStorage.getItem("IsLogged");
  return (
    <div className="Layout">
      <div className="Layout-Name">
        <Link to="/" className="Link-Name-L">
          <h3>
            PU<span className="Last-Name">sen</span>
          </h3>
        </Link>
      </div>
      <div className="Layout-NavBar">
        <div className="Layout-Home">
          <Link to="/" className="Layout-Link">
            HOME<span className="Line-L"></span>
          </Link>
        </div>
        <div className="Layout-Story">
          <Link to="/Story" className="Layout-Link">
            STORY<span className="Line-L"></span>
          </Link>
        </div>
        <div className="Layout-Notify">
          <Link to="/Notify" className="Layout-Link">
            NOTIFY<span className="Line-L"></span>
          </Link>
        </div>
        <div className="Layout-Login">
          {IsLogged === null ? (
            <a href="/Login" className="Layout-Link">
              LOGIN<span className="Line-L"></span>
            </a>
          ) : (
            <Link  to="/Account" className="Layout-Link">
              <i id="Layout-Icon" class="fa-regular fa-user"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
