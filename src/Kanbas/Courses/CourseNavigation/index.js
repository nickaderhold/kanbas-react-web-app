import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const navItems = [
    {
      link: "Account",
      icon: "fa-user",
    },
    {
      link: "Dashboard",
      icon: "fa-gauge",
    },
    {
      link: "Courses",
      icon: "fa-book",
    },
    {
      link: "Calendar",
      icon: "fa-calendar",
    },
    {
      link: "Inbox",
      icon: "fa-inbox",
    },
    {
      link: "History",
      icon: "fa-clock",
    },
    {
      link: "Studio",
      icon: "fa-microphone-lines",
    },
    {
      link: "Commons",
      icon: "fa-people-arrows",
    },
    {
      link: "Help",
      icon: "fa-question",
    },
  ];
  const { pathname } = useLocation();
  return (
    <div id="kanbas-navigation-sidebar" className="list-group-flush">
      {navItems.map((navItem, index) => {
        // console.log(navItem.link);
        return (
          <div
            key={index}
            id={navItem.link === "Account" ? "account-nav" : ""}
            className={`list-group-item ${
              pathname.includes(navItem.link) && "active"
            }`}
          >
            <Link
              to={`/Kanbas/${navItem.link}`}
              className="d-block text-center"
            >
              {" "}
              {/* Center align the link */}
              <div className="text-center">
                {" "}
                {/* Center align and add margin below */}
                <i
                  className={`kanbas-icon fa-solid ${navItem.icon}`}
                  id="account-icon"
                ></i>
              </div>
              {navItem.link}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default CourseNavigation;
