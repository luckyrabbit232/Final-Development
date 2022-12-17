import logo from './logo.svg';
import './css/App.css';
import PortofolioBox from './components/PortfolioBox';
import data from './assets/portfolio-data.json'
import { useState } from 'react';

// TODO:
// 1: Create Header
// 2: Create Button and image introduction
// 3: Write Introduction
// 4: Write Problem
// 5: Write Goals
// 6: Write Design
// 7: Write reflection
// 8: Do you may also like components

function App() {
  const [displayPortofolio, setPortfolio] = useState(data);

  return (
    <div className="App">
      <div className = "Header">
        <div className = "UpperHeader">
          <div className = "Logo">
            <b> My Portfolio</b>
          </div>
          <div className = "Menu">
            <div className = "Menu_Child">
              <a href = "https://luckyrabbit232.github.io/Final-Portoflio/">
                Home
              </a>
            </div>
            <div className = "Menu_Child2">
              <a href = "https://luckyrabbit232.github.io/Final-Portoflio/">
                About Me
              </a>
            </div>
          </div>
        </div>
        <div className = "LowerHeader">
          <i>Home/Development</i>
        </div>
      </div>
      <div className = "Introduction">
        <div className = "Button_Container">
          <div className = "TextBox_text">
            Development
          </div>
          <a href = 'https://luckyrabbit232.github.io/Development/'>
            <button  className = "Button">Website Link</button>
          </a>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Introduction
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            The goal of this assignment was to develop an interactive interface utilizing interface components with 
            internal data states. We utilized React package for javascript to create this website. The main purpose 
            of this assignment were to create buttons to aggregate, filter, and sort. For the choice of the theme of 
            this assignment, I went for a cooking aggregator that aggregates the ingredient price, cooking time, and 
            preperation time for chefs to use.
            </p>
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Problem
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            The problem that I am trying to solve from a 
            practical perspective is to aid chefs in scheduling 
            their meal preperation throughout the cookinc cycle. 
            I believe that it is important for a chef to know how much to budget for each meal,
            plan their preperation time, and also their cooking time. No one likes to be kept waiting while hungry!
            </p>
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Goals
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            The technical goals of this assignment are as follows:
            </p>
            <ul>
              <li>Creating item boxes that recursively output data from a .json file</li>
              <li>Create a sorting button</li>
              <li>Create a filter button</li>
              <li>Create an aggregator for the items</li>
            </ul> 
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Design
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            Theory:
            </p>
            <p>
            Throughout the task, I tried to implement affordances for the user so 
            that navigating the webpage would be easier. For example, I placed the 
            aggregator on the right, and the filter section on the left, so that users 
            can quickly navigate to these sections whenever they need to filter or look at their cart.
            </p>
            <div className = "indentation"></div>
            <p>
            Item Listing:
            </p>
            <p>
            In the center, the items are listed in the order given in the .json file. By using a mapping 
            function, the .json was read and outputted recursively in the item box. The mapping function 
            utilized a component to make the formatting regulated.
            </p>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Main.png" className = "Basic_Image1"></img>
            </div>
            <div className = "indentation"></div>
            <p>Aggregator:</p>
            <p>
            For the aggregator, I used states to remember the number of choices made for each 
            .json item. I kept track by incrementing the number that the index of the cart state represented, 
            then outputting the price associated with the item.
            </p>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Aggregator.png" className = "Basic_Image2"></img>
            </div>
            <div className = "indentation"></div>
            <p>Filter:</p>
            <p>The filter function was made by creating a checking function when mapping the items, to remove any 
              items that did not fit the criteria.</p>
            <div className = "indentation"></div>
            <p>Sorting:</p>
            <p>The sorting function was done through a checking function when mapping the items again. This time, 
              the .json file was read based on the sorting criteria, and will output the items in the order of the 
              criteria.</p>
            <div className = "Basic_ImageContainer">
              <img src = "./Images/Sorting.png" className = "Basic_Image1"></img>
            </div>
            <div className = "indentation"></div>          
          </div>
        </div>
      </div>

      <div className = "Divider">
        <div className = "Divider_Title">
          <div className = "Title_Divider">
            <img src = "./Images/divider.png" className = "Divider_Image"></img>
          </div>
          <div className = "Title_Text">
            Reflection
          </div>
          <div className = "Title_Divider">
            <img src="./Images/divider.png" className = "Divider_Image"></img>
          </div>
        </div>
        <div className = "Basic_TextBox">
          <div className = "TextBox_Child">
            <p>
            I felt that this assignment taught me alot 
            about front-end functionality using React and Javascript. I took away 
            the skills to develop a webpage locally, and to debug my webpage using npm. 
            </p>
            <div className = "indentation"></div>
            <p>
            I felt that I could have done more on the webpage. For example, I could use checkboxes 
            to add multiple filtering conditions for the items. Moreover, I felt that I could use more 
            components, especially for the sorting and the filtering criterias, to make these choices more 
            dynamic and easier to debug. 
            </p>
            <div className = "indentation"></div>

          </div>
        </div>
      </div>

      <div className = "OtherProjects_Divider">
        <div className = "Other_ProjectsTitle">
          <div className = "Other_ProjectsTitle">
            <div className = "OtherProjectsTitle_Text">
            You May Also Like...
            </div>
          </div>
        </div>
        <div className = "Other_ProjectsComponents">
          <div className = "Other_ProjectsChild">
            {displayPortofolio.map((item)=> (
              <PortofolioBox
              item = {item}/>
            ))}
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
