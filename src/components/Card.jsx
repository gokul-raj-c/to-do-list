const Card =(props) =>{
    const handelComplete=()=>{
        props.onDeleteTask(props.task.id)
    };
    return (
        <div className='card'>
            <p>{props.task.text}</p>
            <button onClick={handelComplete}>Complete</button>
          </div>
    )
}

export default Card;