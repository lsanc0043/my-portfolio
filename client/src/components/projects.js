import { useState } from "react";
import Recipe from "./projects/recipe";
import JSGames from "./projects/jsgames";
import ReactGames from "./projects/reactgames";
import BookAPI from "./projects/bookapi";
import WeatherAPI from "./projects/weatherapi";

const Projects = () => {
  const projectNames = [
    "Recipe",
    "JS-HTML Game Series",
    "React Game Series",
    "Book Library API",
    "Weather API",
  ];
  const projectPages = [
    <Recipe />,
    <JSGames />,
    <ReactGames />,
    <BookAPI />,
    <WeatherAPI />,
  ];
  return (
    <>
      <div className="projects">
        {projectNames.map((project, index) => {
          return <button key={index}>{project}</button>;
        })}
      </div>
      <Recipe />
    </>
  );
};

export default Projects;
