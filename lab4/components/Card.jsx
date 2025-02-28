export const PokemonCard = ({ id, name, sprites = [] }) => {

  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}{" "}
      </h2>
      {/*imagenes */}
      <div>
        {sprites.map((sprite, index) => (
          <img src={sprite} key={index} alt={name} />
        ))}
      </div>
    </section>
  );
};

export default PokemonCard
