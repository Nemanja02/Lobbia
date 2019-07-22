import React, { Children } from "react";
import { mergeClasses } from "@material-ui/styles";
import classes from "./Messages.module.scss";

function Message (props) {
  return (
    <span className={`${classes.message} ${classes[props.sender]}`}>{props.children}</span>
  );
}

function Messages() {
  return (
    <div className={classes.messages}>
      <div className={classes.input}>
        <input placeholder="Write message..." type="text"/>
        <i className="fas fa-paper-plane"/>
      </div>
      <div className={classes.scroll}>
        <Message sender="me">fuigheur ueig heuiorg eoiug oeirg owuiergiueogf iesygorihgsoerrighh</Message>
        <Message>fuigheur ueig heuiorg eoiug oeirg owuiergiueogf iesygorihgsoerrighh</Message>
        <Message>fuigheur ueig heuiorg eoiug oeirg owuiergiueogf iesygorihgsoerrighh</Message>
        <Message>fuigheur ueig heuiorg eoiug oeirg owuiergiueogf iesygorihgsoerrighh</Message>
        <Message>fuigheur ueig heuiorg eoiug oeirg owuiergiueogf iesygorihgsoerrighh</Message>
        <Message>fuigheur ueig heuiorg eoiug oeirg owuiergiueogf iesygorihgsoerrighh</Message>
        <Message>fuigheur ueig heuiorg eoiug oeirg owuiergiueogf iesygorihgsoerrighh</Message>
      </div>
    </div>
  );
}

export default Messages;
