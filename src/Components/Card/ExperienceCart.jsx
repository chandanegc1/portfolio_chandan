import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceCart = ({
  id,
  description,
  technologies,
  Projects,
  companyWebLink,
  logo,
  companyName,
  start,
  end,
  total,
  certificate,
}) => {
  return (
    <div className="flex flex-col h-auto text-l_textColor dark:text-d_textColor overflow-hidden gap-2 overflow-ellipsis">
      <img
        width={700}
        height={700}
        className="object-cover aspect-video"
        src={logo}
        alt={companyName}
      />
      <div className="flex flex-col px-4 py-2 h-auto">
        <figcaption className="font-bold text-xl">{companyName}</figcaption>
        {/* <p className="text-sm">{id}</p> */}
        <section className="flex">
          <p className="text-sm">
            <strong>Start: </strong>
            <i>{start}</i>{" "}
          </p>
          <p className="text-sm">
            <strong>&nbsp; End: </strong>
            <i>{end}</i>
          </p>
        </section>
        <p className="text-sm">
          <strong>Duration: </strong>
          {total}
        </p>
        {technologies&&<p className="text-sm">
          <strong>Skills: </strong>
          {technologies}
        </p>}
        <p className="text-sm">"{description}"</p>
        <div className="  justify-between place-items-center h-20 md:lg:flex-row md:justify-evenly link">
          <a
            href={companyWebLink || "/"}
            target="_blank"
            className="flex place-items-center text-sm bg-l_primary dark:bg-d_primary py-1 px-4 rounded-2xl border duration-300 transition-all hover:text-red-500 box "
            rel="noreferrer"
          >
            Company <FaExternalLinkAlt size={15} className="ml-2" />
          </a>
          {certificate && (
            <a
              href={certificate || "/"}
              target="_blank"
              className="flex place-items-center text-sm bg-l_primary dark:bg-d_primary py-1 px-4 rounded-2xl border duration-300 transition-all hover:text-red-500 box "
              rel="noreferrer"
            >
              Certificate <FaExternalLinkAlt size={15} className="ml-2" />
            </a>
          )}
          {Projects?.map((item,index) => (
            <a key={index}
              href={item.link || "/"}
              target="_blank"
              className="flex place-items-center text-sm bg-l_primary dark:bg-d_primary py-1 px-4 rounded-2xl border duration-300 transition-all hover:text-red-500 box "
              rel="noreferrer"
            >
              Project:{+index+1} <FaExternalLinkAlt size={15} className="ml-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCart;
