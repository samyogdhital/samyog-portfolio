import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import cryptoLg from "../../../Assets/img/Portfolio items/img/coin700.jpg";
import cryptoSm from "../../../Assets/img/Portfolio items/img/coin400.jpg";
import portfolioLg from "../../../Assets/img/Portfolio items/img/portfolio700.jpg";
import portfolioSm from "../../../Assets/img/Portfolio items/img/portfolio400.jpg";
import todolistLg from "../../../Assets/img/Portfolio items/img/todolist700.jpg";
import todolistSm from "../../../Assets/img/Portfolio items/img/todolist400.jpg";
import blogLg from "../../../Assets/img/Portfolio items/img/blog700.jpg";
import blogSm from "../../../Assets/img/Portfolio items/img/blog400.jpg";

import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";

const ProjectContainer = () => {
  const { isLight } = useContext(ThemeContext);
  const projects = [
    {
      image: [cryptoSm, cryptoLg],
      alt: "CryptoChecker",
      heading: "CryptoChecker",
      p1: "CryptoChecker displaying different coin data.",
      l1: "",
      a1: "Github page for a project.",
      l2: "",
      a2: "CryptoChecker app live website.",
    },
    {
      image: [portfolioSm, portfolioLg],
      alt: "Portfolio website",
      heading: "Portfolio",
      p1: "My portfolio website.",
      l1: "",
      a1: "Github page for a Portfolio website project.",
      l2: "",
      a2: "Portfolio project live website.",
    },
    {
      image: [todolistSm, todolistLg],
      alt: "Todolist website",
      heading: "Todolist",
      p1: "Todolist website with backend and database.",
      l1: "",
      a1: "Github page for a project.",
      l2: "",
      a2: "Todolist project live website.",
    },
    {
      image: [blogSm, blogLg],
      alt: "Blog website",
      heading: "Blog",
      p1: "Blog website to write simple blogs.",
      l1: "",
      a1: "Github page for a project.",
      l2: "",
      a2: "Blog live website",
    },
  ];
  return (
    <div className={`${styles.projectContainer} ${!isLight && styles.dark}`}>
      {projects.map((data, index) => {
        return <ProjectItem data={data} index={index} key={index} />;
      })}
    </div>
  );
};

export default ProjectContainer;
