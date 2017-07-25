import React from "react";

export default class RecipeList extends React.Component {
    render () {
        return (
            <ul className="list-unstyled">
              {this.props.recipes.map(recipe => 
                <li key={recipe.id}>
                  <a href="#" onClick={this.props.onSelectRecipe.bind(null,recipe)}>
                    {recipe.name}
                  </a>
                </li>)
              }
            </ul>
        )
    }
}
