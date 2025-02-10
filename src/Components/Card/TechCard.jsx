import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";

const TechCard = ({ title, tech }) => {
  return (
    <motion.div
      className="lg:h-72 rounded-md flex flex-col flex-1 place-items-start gap-2 p-4 text-d_primary dark:text-l_primary bg-l_secondary dark:bg-d_secondary"
      whileHover={{ scale: 1.1 }}
    >
      <h1 className="font-bold text-center tracking-wider opacity-80">
        {title}
      </h1>
      <div className="flex flex-wrap gap-2 lg:place-items-center">
        {tech.map((item, i) => {
          return (
            <div
              key={i}
              className={cn(
                "rounded-md  text-xs bg-slate-100 dark:bg-slate-950 p-2",
                item !== "Tailwind" && "border border-blue-500/60",
                item === "Javascript" && "border border-blue-500/60",
                item === "Node Js" && "border border-green-500/60",
                item === "Java(Basics)" && "border border-black-500/60",
                item === "Express Js" && "border border-gray-500/60",
                item === "MongoDB" && "border border-blue-500/60",
                item === "Postman" && "border border-red-500/60",
                item === "Auth0" && "border border-red-500/60",
                item === "React Js" && "border border-yellow-500/60",
                item === "C++" && "border border-blue-500/60",
                item === "GitHub" && "border border-blue-500/60",
                item === "SASS" && "border border-gray-500/60",
                item === "HTML" && "border border-blue-500/60",
                item === "CSS" && "border border-green-500/60",
                item === "Redux / Toolkit" && "border border-green-500/60",
                item === "JWT" && "border border-white-500/60",
                item === "Socket.io" && "border border-blue-500/60",
                item === "Git" && "border border-white-500/60",
                item === "GitHub Copilot" && "border border-white-500/60",
                item === "Multer" && "border border-yellow-500/60",
                item === "C /C++" && "border border-yellow-500/60",
                item === "Jest Framework" && "border border-green-500/60",
                item === "React Testing Library" && "border border-gray-500/60",
                item === "Styled Component CSS" && "border border-blue-500/60",
                item === "Typescript" && "border border-yellow-500/60",
                item === "Restful API" && "border border-emerald-500/60",
                item === "API" && "border border-blue-500/60",
                item === "JSON" && "border border-blue-500/60",
                item === "Jira" && "border border-emerald-500/60",
                item === "Material UI" && "border border-red-500/60",
                item === "VS Code (Code Editor)" && "border border-red-500/60",
                item === "Data Structure & Algorithm" &&
                  "border border-green-500/60",
                item === "Object Oriented Programming" &&
                  "border border-blue-500/60",
                item === "Operating System" && "border border-black-500/60",
                item === "Networking" && "border border-yellow-500/60"
              )}
            >
              {item}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TechCard;
