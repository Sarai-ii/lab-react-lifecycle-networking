import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  //takes params: 1st param is a function, no second param = default behavior of the component
  //by default when this component mounts this useEffect gets updated
  useEffect(()=> {
    fetch(`https://resource-veterinarian-api.fly.dev/api/employees`)
    .then((response) => response.json()) //interpretting the json file
    .then((response) => { //this .then gets the 
      setEmployees(response) //updating a state === re-rendering a page
    })
    
  },[])
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {/* For each employee on the list, create one employee component */}
        {employees.map(employee => {
          return (
            <Employee 
            key={employee.id} //individual key for each employee
            employee={employee} //passing prop
            /> 
          )
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
