import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SideBar.css";

const Sidebar = ({ user, language = "en" }) => { 
  const isArabic = language === "ar";
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path) =>
    location.pathname === `/dashboard/${path}` ||
    (path === "overview" && location.pathname === "/dashboard");

  const menuItems = [
    { path: "overview", icon: "bxs-show", label: isArabic ? "نظرة عامة" : "Overview" },
    { path: "servers", icon: "bxs-server", label: isArabic ? "السيرفرات" : "Servers" },
    { path: "premium", icon: "bx-plus", label: isArabic ? "برميوم" : "Premium" },
    { path: "wallet", icon: "bxs-wallet", label: isArabic ? "المحفظة" : "Wallet" },
    { path: "coins", icon: "bxl-bitcoin", label: isArabic ? "العملات" : "Coins" },
  ];

  return (
    <div className="sidebar">
      {user && (
        <div className="user-info">
          <img
            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
            alt="User Avatar"
            className="avatar"
          />
          <div className="user-details">
            <h5>{user.global_name}</h5>
            <p>#{user.username}</p>
          </div>
        </div>
      )}

      <ul className="menu">
        <li className="section-title">{isArabic ? "عام" : "General"}</li>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`menu-item ${isActive(item.path) ? "active" : ""}`}
            onClick={() => navigate(item.path !== "overview" ? `/dashboard/${item.path}` : "/dashboard")}
          >
            <i className={`bx ${item.icon}`}></i>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
