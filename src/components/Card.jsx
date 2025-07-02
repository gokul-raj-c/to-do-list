const Card =(props) =>{
    const handelComplete=()=>{
        props.onDeleteTask(props.task.task_id)
    };
    return (
        <div className='card'>
            <p>{props.task.task_name}</p>
            <button onClick={handelComplete}>Complete</button>
          </div>
    )
}

export default Card;