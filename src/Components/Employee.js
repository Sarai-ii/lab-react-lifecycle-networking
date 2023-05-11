import PetList from "./PetList";
import React, {useState, useEffect} from "react";
import "./Employee.css";


// URL ----> https://resource-veterinarian-api.fly.dev/api/pets?employeeid=vlJtFOU

export const Employee = ({employee}) => {

  const [showPets, setShowPets] = useState([])
  const [pets, setPets] = useState(false)

  useEffect(()=> {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
    .then((response) => response.json()) //interpretting the json file
    .then((response) => { //this .then gets the 
      setPets(response) //updating a state === re-rendering a page
    })
  }, [employee.id]) //added employee.id 

  const toggleShowPets =() => {
    setShowPets(!showPets)
  }
  let printName = (person) => {
    return `${person.prefix ? `${person.prefix} ` : ""}${person.firstName} ${person.lastName}${person.postfix ? `, ${person.postfix}` : ""}`
  }

  return (
    <article className="employee">
      <h3>{printName(employee)}</h3>
      <h4>{employee.title}</h4>
      {showPets ? (
        <div>
          <button onClick={toggleShowPets}>Show Pets</button>
        </div>
      ) : (
        <div>
          <button onClick={toggleShowPets}>Hide Pets</button>
          <PetList pets={pets} />
        </div>
      )}
    </article>
  );
};

export default Employee;
