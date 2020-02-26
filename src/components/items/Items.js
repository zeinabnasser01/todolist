import React from "react";
import "./Items.css";

const Items = props => {
  const { items, deleteItem } = props;
  let length = items.length;
  const item = length ? (
    items.map(item => {
      return (
        <li key={item.id}>
          <div>{item.id}.</div>
          <div>{item.content}</div>
          <div>{item.category}</div>
          <div>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </div>
        </li>
      );
    })
  ) : (
    <div className="alert alert-danger">there is no item to show!</div>
  );

  return (
    <div>
      <ul className="list-unstyled">
        <li>
          <div>Id</div>
          <div>Content</div>
          <div>Category</div>
          <div>Action</div>
        </li>
        {item}
      </ul>
    </div>
  );
};

export default Items;
