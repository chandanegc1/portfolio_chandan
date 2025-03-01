import React from "react";
import Menu from "./Menu";
import Theme from "./Theme";
import { motion } from "framer-motion";

const Sidebar = ({socialLink}) => {
  return (
    <motion.aside
      className="flex flex-col"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.6,
      }}
    >
      <Theme />
      <Menu socialLink = {socialLink} />
    </motion.aside>
  );
};

export default Sidebar;
