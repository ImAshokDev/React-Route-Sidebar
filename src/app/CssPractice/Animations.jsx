import { makeStyles } from "@material-ui/core";
import React from "react";

export function Animations() {
  const classes = aniStyles();
  return (
    <div>
      <h3>Animations</h3>
      <div className={classes.parent}>
        <div className={classes.child}>child</div>
      </div>
    </div>
  );
}

const aniStyles = makeStyles((theme) => ({
  parent: {
    width: 300,
    height: 300,
    backgroundColor: "blue",
    textAlign: "center",
    // margin: 50,

    "&:hover $child": {
      backgroundColor: "red",
      animation: `$myChild 3000ms ${theme.transitions.easing.easeIn}`,
    },
  },
  child: {
    width: 100,
    height: 100,
    backgroundColor: "pink",
    // transition: `$myChild 1000ms ${theme.transitions.easing.easeIn}`,
    // animation: `$myChild 3000ms ${theme.transitions.easing.easeIn}`,
  },
  "@keyframes myChild": {
    "0%": {
      transform: "translateX(0)",
    },
    "25%": {
      transform: "translateX(0) translateY(100%)",
    },
    "50%": {
      transform: "translateX(100%) translateY(100%)",
    },
    "75%": {
      transform: "translateX(100%) translateY(0)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  //   "@keyframes myChild": {
  //     "0%": {
  //       transform: "translateX(0)",
  //     },
  //     "30%": {
  //       transform: "translateY(100%)",
  //     },
  //     "60%": {
  //       transform: "translateX(100%)",
  //     },
  //     "100%": {
  //       transform: "translateY(100%)",
  //     },
  //   },
}));
