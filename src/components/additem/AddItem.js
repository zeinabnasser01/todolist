import React, { Component } from "react";

class AddItem extends Component {
  state = {
    content: "",
    category: ""
  };

  addItemHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      content: "",
      category: ""
    });
  };
  render() {
    return (
      <div>
        Add Task
        <form className="row" onSubmit={this.submitHandler}>
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              id="content"
              value={this.state.content}
              placeholder="enter content"
              onChange={this.addItemHandler}
            />
          </div>
          <div className="col-md-3 mb-2">
            <input
              type="text"
              className="form-control"
              id="category"
              value={this.state.category}
              placeholder="enter category"
              onChange={this.addItemHandler}
            />
          </div>
          <div className="col-md-3 mb-2">
            <button className="btn btn-primary btn-block" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItem;
