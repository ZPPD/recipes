import React from "react";
import "./App.css";

import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends React.Component {
  state = {
    // recipes: [],
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=71e7bc1e0a580b76ebde11b3684907cc",
    details_id: 35375,
    pageIndex: 1
  };

  // method to get the recipes
  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      this.setState({
        recipes: jsonData.recipes
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return <RecipeList recipes={this.state.recipes} />;
      case 0:
        return <RecipeDetails id={this.state.details_id} />;
    }
  };

  render() {
    // console.log(this.state.recipes);
    return (
      <>
        {/* <RecipeList recipes={this.state.recipes} /> */}
        {/* <RecipeDetails id={this.state.details_id} /> */}
        {this.displayPage(this.state.pageIndex)}
      </>
    );
  }
}

export default App;
