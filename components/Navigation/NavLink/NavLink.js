import React from "react";
import classes from "./NavLink.module.scss";
import NextLink from "next/link";
import ProfileShowcase from "../../ProfileShowcase/ProfileShowcase";


function NavLink({ path, type, title, id, statePath, icon }) {

  const [isOpen, setOpen] = React.useState(false);

  let linkClass = 'link';
  if (path === statePath || path === "/user/" && statePath === "/user/[id]")
    linkClass = 'link-active';
  return type === "link" ? (
    <NextLink href={path}>
      <a className={classes[linkClass]}>
        <i className={`${classes[linkClass + 'Icon']} ${icon}`} /> {title}
      </a>
    </NextLink>
  ) : (
      <>
        <a className={classes[linkClass]} onClick={() => setOpen(true)}>
          <i className={`${classes[linkClass + 'Icon']} ${icon}`} /> {title}
        </a>
        {isOpen ? <ProfileShowcase id={id} isOpen={isOpen} onClose={() => setOpen(false)} /> : null}
      </>
    )
}

export default NavLink;
