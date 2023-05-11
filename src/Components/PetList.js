export const PetList = ({pets}) => {
  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
      <p> { pets.map(pet => { return pet.name }).join(", ")}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
