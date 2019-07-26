import React from "react";
import classes from "./NavLink.module.scss";
import NextLink from "next/link";

function NavLink({ path, title, statePath, icon }) {
  let linkClass = 'link';
  if(path === statePath) linkClass = 'link-active';
  return (
    <NextLink href={path}>
      <a className={classes[linkClass]}>
        <i className={`${classes[linkClass + 'Icon']} ${icon}`} /> {title}
      </a>
    </NextLink>
  );
}

export default NavLink;
