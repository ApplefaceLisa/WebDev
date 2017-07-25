import React from "react";

export default class RecipeDetail extends React.Component {
    render() {
        const recipe = this.props.recipe;
        const confirmDelete = () => {
          if (confirm("Are you sure to delete recipe?")) {
            this.props.onDelete(recipe);
          }
        }
        
        return (
            <div>
              {recipe ?
                <div>
                  <h2>{recipe.name}</h2>
                  
                  <h3>Ingredients:</h3>
                  <p style={{whiteSpace:'pre-wrap'}}>{recipe.ingredients}</p>
                  
                  <h3>Instructions:</h3>
                  <p style={{whiteSpace:'pre-wrap'}}>{recipe.instructions}</p>
                  
                  <button 
                    type="button" 
                    className="btn btn-info"
                    style={{marginRight : '5px'}}
                    onClick={this.props.onEdit}
                  >edit</button>
                  
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    style={{marginLeft : '5px'}}
                    onClick={confirmDelete}
                  >delete</button>
                </div>
                :
                <div>Choose a recipe from the left hand side, or create a new one</div>
              }
            </div>
        );
    }
}
