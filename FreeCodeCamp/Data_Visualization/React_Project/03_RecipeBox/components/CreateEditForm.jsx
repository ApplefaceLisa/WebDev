import React from "react";

export default class CreateEditForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name : '',
            ingredients : '',
            instructions : '',
            created : false
        }
        this.updateName = this.updateName.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
        this.updateInstructions = this.updateInstructions.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
      this.setStateFromRecipe(this.props.recipe);
    };
    
    componentWillReceiveProps(nextProps) {
      this.setStateFromRecipe(nextProps.recipe);
    }
    
    setStateFromRecipe(recipe) {
      this.setState({
            name : recipe ? recipe.name : '',
            ingredients : recipe ? recipe.ingredients : '',
            instructions : recipe? recipe.instructions : ''
        });
    }
    
    updateName(event) {
        this.setState({name : event.target.value, created : false});
    }
    
    updateIngredients(event) {
        this.setState({ingredients : event.target.value, created : false});
    }
    
    updateInstructions(event) {
        this.setState({instructions : event.target.value, created : false});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const { name, ingredients, instructions, created } = this.state;
        
        if (this.props.recipe) {
          this.props.onUpdate(name, ingredients, instructions);
        } else {
          this.props.onCreate(name, ingredients, instructions);
          this.resetForm();
          this.refs.name.focus();
        }
    }
    
    resetForm() {
        this.setState(
          {
            name : '',
            ingredients : '',
            instructions : '',
            created : true
          }
        );
    }
    
    render () {
        const { name, ingredients, instructions, created } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            {created && <div className="alert alert-success">You recipe was created</div>}
            <div className="form-group">
              <label htmlFor="name">Recipe name: </label>
              <input
                 type="text"
                 className="form-control"
                 id="name"
                 placeholder="enter recipe name here"
                 value={name}
                 onChange={this.updateName}
                 ref="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ingredient">Ingredients: </label>
              <textarea
                className="form-control"
                rows="5"
                id="ingredients"
                placeholder="enter ingredients here, one per line"
                value={ingredients}
                onChange={this.updateIngredients}
              />
            </div>
            <div className="form-group">
              <label htmlFor="instruction">Instruction: </label>
              <textarea
                className="form-control"
                rows="10"
                id="instructions"
                placeholder="enter instructions here, one step per line"
                value={instructions}
                onChange={this.updateInstructions}
              />
            </div>
            <input 
              className="btn btn-success" 
              type="submit" 
              value={this.props.recipe ? "Update" : "Create"}
            />
          </form>
        );
    }
}
