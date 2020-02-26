import React, { Component } from "react";
import Items from "../../components/items/Items";
import AddItem from "../../components/additem/AddItem";

class Home extends Component {
  state = {
    items: [
      { id: 1, content: "Print bills", category: "done" },
      { id: 2, content: "Read a book", category: "doing" }
    ]
  };
  deleteItemHandler = id => {
    console.log(id);
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id);
    // items.splice(i, 1);
    // this.setState({ items });
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  addItemHandler = item => {
    let items = this.state.items;
    let length = this.state.items.length;
    item.id = ++length;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="home">
        <h1>TODOList</h1>
        <Items items={this.state.items} deleteItem={this.deleteItemHandler} />
        <AddItem addItem={this.addItemHandler} />
      </div>
    );
  }
}

export default Home;
