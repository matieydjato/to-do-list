import Item from "../item/Item";

const TodoList = (props) => {
    return (
        <div className="p-3">
            {props.todos.map((item, index) => <Item removeHandler={props.removeHandler} key={index} id={index} item={item}/>)}
        </div>
    );
};

export default TodoList;