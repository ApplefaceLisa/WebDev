import React from 'react';
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'
import CreateEditForm from './CreateEditForm'
import SearchBox from './SearchBox'

const LOCAL_STORAGE_KEY = 'recipes';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        const localStorageRecipes = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        
        this.state={
            showCreate : false,
            recipes : localStorageRecipes ? JSON.parse(localStorageRecipes) : [],
            selectedRecipe : null,
            searchText : ''
        };
        this.showCreate = this.showCreate.bind(this);
        this.handleCreateRecipe = this.handleCreateRecipe.bind(this);
        this.handleUpdateRecipe = this.handleUpdateRecipe.bind(this);
        this.handleSelectRecipe = this.handleSelectRecipe.bind(this);
        this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
        this.updateRecipes = this.updateRecipes.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleEditRecipe = this.handleEditRecipe.bind(this);
    }
    
    showCreate() {
        this.setState({
            showCreate : true,
            selectedRecipe : null
        });
    }
    
    handleCreateRecipe(name, ingredients, instructions) {
      const newRecipes = this.state.recipes.concat(
          {
              id : new Date().getTime(),
              name : name,
              ingredients : ingredients,
              instructions : instructions
          }
      );
      this.updateRecipes(newRecipes);
    }
    
    handleUpdateRecipe(name, ingredients, instructions) {
        const {recipes, selectedRecipe} = this.state;
        const updatedRecipe = Object.assign({}, selectedRecipe, {
            name, 
            ingredients, 
            instructions
        });
        
        const newRecipes = recipes.map(recipe => 
          recipe === selectedRecipe ? updatedRecipe : recipe
        );
        this.updateRecipes(newRecipes);
        this.handleSelectRecipe(updatedRecipe);
    }
    
    handleSelectRecipe(recipe) {
        this.setState({
            selectedRecipe : recipe, 
            showCreate : false
        });
    }
    
    handleDeleteRecipe(recipeToDelete) {
        const newRecipes = this.state.recipes.filter(recipe => recipe !== recipeToDelete);
        this.updateRecipes(newRecipes);
        this.setState({selectedRecipe : null});
    }
    
    updateRecipes(newRecipes) {
        this.setState({recipes : newRecipes});
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipes));
    }
    
    handleSearch(searchText) {
        this.setState({searchText : searchText});
    }
    
    handleEditRecipe () {
        this.setState({
            showCreate : true
        });
    }
    
    render() {
        const { showCreate, recipes, selectedRecipe, searchText } = this.state;
        const filteredRecipes = recipes
        .filter(recipe => recipe.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
        .sort((a,b) => a.name > b.name);
        
        return (
            <div className="container">
              <h1>Recipe Box</h1>
              
              <div className="row">
                <div className="col-xs-4">
                  <SearchBox 
                     searchText={searchText}
                     onChange={this.handleSearch}
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{width: '80%', 
                            marginBottom: '20px'}}
                    onClick={this.showCreate}
                  >Create New Recipe
                  </button>
                  <RecipeList 
                    recipes={filteredRecipes}
                    onSelectRecipe={this.handleSelectRecipe}
                  />
                </div>
                
                <div className="col-xs-8">
                  {showCreate ? 
                   <CreateEditForm 
                      recipe={selectedRecipe}
                      onCreate={this.handleCreateRecipe}
                      onUpdate={this.handleUpdateRecipe}
                   /> : 
                   <RecipeDetail 
                      recipe={selectedRecipe}
                      onDelete={this.handleDeleteRecipe}
                      onEdit={this.handleEditRecipe}
                   />}
                </div>
              </div>
            </div>
        );
    }
}

export default App;
