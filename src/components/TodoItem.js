import React, { Component } from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {
    // STYLE THE ADDs TODO ITEM, A
    getStyle = () => {
        return {
            backgroundColor: "lightyellow",
            borderBottom: "1px solid black",
            padding: "10px",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }


    //  FUNCTION TO MARK COMPLETED TODO ITEM WITH LINETHROUGH ONCE CHECKED IN THE BOX
    markComplete = (e) => {
        console.log(this.props)
    }

    // NORMAL TODO ITEMS
    render() {
        // DESTRUCTURE THE THIS.PROPS TO GET ITS ID, ITEM AND OTHER
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <h3>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {" "}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </h3>
            </div>
        );
    }
}
// PROPTYPES
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// STYLE THE DELETE BUTTON
const btnStyle = {
backgroundColor: "black",
color: "white",
border: "none",
cursor: "pointer",
borderRadius: "50%",
padding: "7px 10px",
float: "right"
}
// _________________________________________
// STYLING AND HOW TO WRITE IT
// <div style={itemStyle}>
// const itemStyle = {
// backgroundColor: "lightyellow"
// }


export default TodoItem;