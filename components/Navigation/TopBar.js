import React from "react";

import classes from "./TopBar.module.scss";
import FindDialog from "../FindDialog/FindDialog";

function TopBar() {
  const [isSearchModalOpen, setModalVisibility] = React.useState(false);

  const toggleSearchModal = prevValue => setModalVisibility(!prevValue);

  return (
    <div className={classes.topbar}>
      <FindDialog
        clicked={() => toggleSearchModal(isSearchModalOpen)}
        open={isSearchModalOpen}
      />
      <div className={classes.start}>
        <span className={classes.logo}>Lobbia</span>
      </div>
      <div className={classes.end}>
        <div className={classes["icon-btn-control"]}>
          <i
            onClick={() => toggleSearchModal(isSearchModalOpen)}
            className={`fas fa-compass ${classes["icon-special"]}`}
          />
          <i className="fas fa-bell" />
        </div>
        <div className={classes.sbar}>
          <input placeholder="Search" className={classes.search} />
          <i className={`fas fa-search ${classes.search_icon_input}`} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
