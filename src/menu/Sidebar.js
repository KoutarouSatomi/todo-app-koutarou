import React, { useState } from 'react';
import {
  FaBars,
  FaCommentAlt,
  FaTh,
  FaThList,
  FaUserAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/css/sidebar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />,
    },
    {
      path: '/comment',
      name: 'Comment',
      icon: <FaCommentAlt />,
    },
    {
      path: '/todos',
      name: 'Todo',
      icon: <FaThList />,
    },
  ];
  return (
    <div className="containers">
      <div style={{ width: isOpen ? '300px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Menu
          </h1>
          <div
            style={{ marginLeft: isOpen ? '100px' : '0px' }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
            title={item.name}
          >
            <div className="icon">{item.icon} </div>
            <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
