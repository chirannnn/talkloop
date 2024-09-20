import React from "react";
import { Link, Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <Link to="/postpage/1">Page 1</Link>
      <br />
      <Link to="/postpage/2">Page 2</Link>
      <br />
      <Link to="/postpage/3">Page 3</Link>
      <br />
      <Link to="/postpage/newpost">New Post</Link>
      <Outlet />
    </>
  );
};

export default PageLayout;
