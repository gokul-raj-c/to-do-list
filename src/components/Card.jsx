const Card =(props) =>{
    return (
        <div className='card'>
            <p>{props.task.text}</p>
            <button>Complete</button>
          </div>
    )
}

export default Card;