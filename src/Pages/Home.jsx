import Card from "../components/Card";

const Home = () => {
    return (
      <>
        <div className="band-homePage">
          <h3>Nos meilleures offres du moment !!!</h3>
        </div>
        <div className="main">
          <Card name={"appartement"} location={"Montpellier"} price={"89€"} />
          <Card name={"villa"} location={"Cannes"} price={"820€"} />
          <Card name={"bungalow"} location={"Annecy"} price={"120€"} />
          <Card name={"maison"} location={"Nice"} price={"100€"} />
          <Card name={"appartement"} location={"Lyon"} price={"99€"} />
          <Card name={"cabane"} location={"Eyne"} price={"130€"} />
          <Card name={"yourte"} location={"Pau"} price={"79€"} />
          <Card name={"maison"} location={"Cassis"} price={"400€"} />
          <Card name={"appartement"} location={"Marseille"} price={"89€"} />
          <Card name={"villa"} location={"Biarritz"} price={"660€"} />
        </div>
      </>
    );
}

export default Home;