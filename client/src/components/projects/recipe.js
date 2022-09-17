import { useState } from "react";

const ingredientList = [
  "1 lb of ground meat",
  "choice of baby spinach of napa cabbage",
  "wonton/dumpling wrappers",
  "3 spoons of soy sauce",
  "1 spoon of dark soy sauce",
  "2 spoons of corn starch",
  "1 teaspoon of sugar",
  "a pinch of salt",
  "a pinch of white pepper",
  "a cup of water",
  "optional: mushrooms or green onions for fragrance",
];

const navBarList = [
  "Ingredients",
  "Steps to Make",
  "Links to Other Wonton Soup Recipes",
  "About Me",
];

const imageList = [
  "https://takestwoeggs.com/wp-content/uploads/2021/05/Easy-Homemade-Wonton-soup-takestwoeggs-sq.jpg",
  "https://redhousespice.com/wp-content/uploads/2022/07/chinese-pork-wonton-in-soup.jpg",
];

const creditList = [
  "https://takestwoeggs.com/homemade-wonton-soup/",
  "https://redhousespice.com/pork-wonton-soup/",
];

const Recipe = () => {
  const [isChecked, setIsChecked] = useState(0);

  const handleClick = (e) => {
    e.target.style.textDecoration = "line-through";
  };
  return (
    <>
      <button id="bttn">Back to Top</button>
      <div className="top">
        <div>
          <h1 className="title">Dad's Wonton Soup Recipe</h1>
        </div>

        <div id="navBar"></div>
      </div>
      <div className="middle">
        <div className="column left">
          <div id="image">
            <img
              id="pic"
              src="https://takestwoeggs.com/wp-content/uploads/2021/05/Easy-Homemade-Wonton-soup-takestwoeggs-sq.jpg"
              alt="wonton soup"
            />
            <button id="prev">Previous</button>
            <button id="next">Next</button>
            <p>
              Photo credit:{" "}
              <a
                id="link"
                href="https://takestwoeggs.com/homemade-wonton-soup/"
                target="_blank"
                rel="noreferrer"
              >
                Takes Two Eggs
              </a>
            </p>
          </div>
        </div>

        <div className="column right">
          <div id="blurb">
            <h2 className="title">What's the story?</h2>
            <p id="description">
              My dad has been a chef for over 50 years. During that time, he has
              come up with a variety of recipes. I've always wanted to recreate
              them, but since he is experienced, most of the measurements are
              abstract and based solely off of, "Oh, that looks about right.".
              He's been trying to find tangible measurements for the ingredients
              so that others can make the masterpieces that he has curated over
              the years. The wonton soup that he makes is cooked/seasoned to
              perfection and never fails to amaze me.
            </p>
          </div>

          <div id="Ingredients">
            <h2 className="title">Ingredients</h2>
            {ingredientList.map((ingredient, index) => {
              return (
                <li
                  style={{
                    listStyle: "none",
                    textDecoration:
                      isChecked === index ? "line-through" : "none",
                  }}
                  key={ingredient}
                  onClick={(e) => {
                    e.target.style.textDecoration = "line-through";
                  }}
                >
                  {ingredient}
                </li>
              );
            })}
          </div>
        </div>
      </div>

      <div id="StepstoMake">
        <h2 className="title">Steps to Make</h2>
        <h2 className="steps">Marinate the ground meat</h2>
        <ol>
          <li>Place ground meat to a large bowl</li>
          <li>
            Add soy sauce, dark soy sauce, corn starch, sugar, salt, and white
            pepper
          </li>
          <li>Knead and mix by hand while adding water</li>
          <li>
            Add mushrooms or green onions and thoroughly mix to distribute
          </li>
        </ol>
        <h2 className="steps">Wrapping the wonton</h2>
        <ol>
          <li>Use a small spoon to scoop the ground meat mixture</li>
          <li>Place the meal in the center of the wonton/dumpling wrapper</li>
          <li>Fold one corner diagonally towards the opposite corner</li>
          <li>
            Pinch the sides in to keep the meat secure (optional: use water to
            make it stick)
          </li>
        </ol>
        <h2 className="steps">Making the soup</h2>
        <ol>
          <li>Heat a large pot of water until it boils</li>
          <li>Drop the wontons in the boiling water</li>
          <li>Add baby spinach or napa cabbage to flavor the soup</li>
          <li>
            Wait until the wontons begin to float instead of sticking to the
            bottom
          </li>
          <li>Scoop and serve!</li>
        </ol>
      </div>

      <div className="bottom">
        <div id="LinkstoOtherWontonSoupRecipes">
          <h2 className="title">Other Wonton Soup Recipes to Try</h2>
          <p>
            <a
              href="https://www.skinnytaste.com/wonton-soup/"
              target="_blank"
              rel="noreferrer"
            >
              Gina's Wonton Soup
            </a>
          </p>
          <p>
            <a
              href="https://lovefoodies.com/chinese-wonton/"
              target="_blank"
              rel="noreferrer"
            >
              Mary's Chinese Wontons
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Recipe;
