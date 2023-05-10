const Counter = (props) => {
    return (
        <div className="text-center pt-8">
            <p>You have {props.list.length} todos</p>
        </div>
    );
}

export default Counter;