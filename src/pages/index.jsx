import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function index({ open, onClick }) {
  React.useEffect(() => {
    window.addEventListener("message", (e) => console.log(e));
  }, []);

  const hide = () => {
    console.log("function hide");
    window.parent.postMessage("hide", "*");
  };
  return (
    <Box
      position="absolute"
      top="0"
      right="0"
      height="100%"
      width="100%"
      bgcolor="red"
      sx={{
        transform: `translateX(${open ? 0 : 100}%) translateY(${
          open ? 0 : 100
        }%) translateZ(0px)`,
        opacity: open ? "100%" : "0%",
        transition: "all 200ms ease-in-out",
      }}
      // onClick={}
    >
      <div onClick={onClick}>close</div>
    </Box>
  );
}
