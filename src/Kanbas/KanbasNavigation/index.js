
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import {
  FaUser,
  FaBook,
  FaCalendar,
  FaInbox,
  FaClock,
  FaMicrophoneLines,
  FaPeopleArrows,
  FaQuestion,
} from 'react-icons/fa';

import { FaTachometerAlt } from 'react-icons/fa';
import { FaMicrophoneAlt } from 'react-icons/fa';



function KanbasNavigation() {
  const navItems = [
    {
      link: 'Account',
      icon: <FaUser />,
    },
    {
      link: 'Dashboard',
      icon: <FaTachometerAlt />,
    },
    {
      link: 'Courses',
      icon: <FaBook />,
    },
    {
      link: 'Calendar',
      icon: <FaCalendar />,
    },
    {
      link: 'Inbox',
      icon: <FaInbox />,
    },
    {
      link: 'History',
      icon: <FaClock />,
    },
    {
      link: 'Studio',
      icon: <FaMicrophoneAlt />,
    },
    {
      link: 'Commons',
      icon: <FaPeopleArrows />,
    },
    {
      link: 'Help',
      icon: <FaQuestion />,
    },
  ];
  const { pathname } = useLocation();

  return (
    <div id="kb-navsidebar" className="list-group-flush">
      {navItems.map((navItem, index) => {
        console.log(navItem.link); // Add this line to check the value of navItem.link
        return (
          <div
            key={index}
            id={navItem.link === 'Account' ? 'account-nav' : ''}
            className={`list-group-item ${pathname.includes(navItem.link) && 'active'}`}
          >
            <Link to={`/Kanbas/${navItem.link}`} className="d-block text-center">
              {/* Center align the link */}
              <div className="text-center">
                {/* Center align and add margin below */}
                {navItem.icon}
              </div>
              {navItem.link}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default KanbasNavigation;
