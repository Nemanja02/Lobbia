import React from "react";
import classes from "./NavLink.module.scss";
import NextLink from "next/link";

function NavLink({ path, title, clicked, icon }) {
  return (
    <NextLink href={path}>
      <a className={classes.link}>
        <i className={`${classes.linkIcon} ${icon}`} /> {title}
      </a>
    </NextLink>
  );
}

export default NavLink;
