import "./Card.css"

const Card = ({img,title,description}) => {
  return (
    <div className="card">
        <div className="cardBody">
            <img src={img} alt="" />
            <div className="about">
                <h2 className="cardTitle">{title}</h2>
                <p className="cardDescription">{description}</p>
            </div>
        <button>See The Details</button>
        </div>
    </div>
  )
}

export default Card