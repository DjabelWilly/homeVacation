

const Card = ({ name, location, price }) => {

  return (
    <div className="wrapper-card">
      <div className="card">
        <img className="card-images"
          src={"https://via.placeholder.com/200"}
          alt={""}
        />
        <h4>{name}</h4>
        <p>{location}</p>
        <p>prix/nuit: {price}</p>
      </div>
    </div>
  );
};

export default Card;

