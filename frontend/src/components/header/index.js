import "./style.css";
import { Link } from "react-router-dom";
import {
  Friends,
  FriendsActive,
  Home,
  HomeActive,
  Notifications,
} from "../../svg";
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useState } from "react";

export default function Header({ page, getAllPosts }) {
  const { user } = useSelector((user) => ({ ...user }));
  const color = "#65676b";
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <h1 style={{
            color: "#1877F2",
            letterSpacing: "10px",
            fontSize: "1.5rem"
          }}>MyBLog</h1>
        </Link>
      </div>
      {showSearchMenu && (
        <SearchMenu
          color={color}
          setShowSearchMenu={setShowSearchMenu}
          token={user.token}
        />
      )}
      <div className="header_middle">
        <Link
          to="/"
          className={`middle_icon ${page === "home" ? "active" : "hover1"}`}
          onClick={() => getAllPosts()}
        >
          {page === "home" ? <HomeActive /> : <Home color={color} />}
        </Link>
        <Link
          to="/friends"
          className={`middle_icon ${page === "friends" ? "active" : "hover1"}`}
        >
          {page === "friends" ? <FriendsActive /> : <Friends color={color} />}
        </Link>
        <Link to="/" className="middle_icon">
        </Link>
        <Link to="/" className="middle_icon">
        </Link>
        <Link to="/" className="middle_icon">
        </Link>
      </div>
      <div className="header_right">
        <Link
          to="/profile"
          className={`profile_link hover1 ${page === "profile" ? "active_link" : ""
            }`}
        >
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
        </Link>
        <div className="circle_icon hover1">
          <Notifications />
          <div className="right_notification">5</div>
        </div>
      </div>
    </header>
  );
}
