import React, { useState } from "react";
import { Button, Grow, Box, FormControlLabel, Switch } from "@mui/material";
import Pages from "@/pages";
import FloatingButton from "@/components/FloatingButton";

export default function index() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [stateShow, setStateShow] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  // LISTEN HEIGHT WINDOW
  React.useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = () => {
    setOpenChat(!openChat);
    window.parent.postMessage(openChat? "hide" : "show", "*");
  };
  return (
    <Box height={windowHeight} overflow="hidden">
      <FloatingButton open={!openChat} onClick={handleChange} />
      <Pages open={openChat} onClick={handleChange} />
    </Box>
  );
}
