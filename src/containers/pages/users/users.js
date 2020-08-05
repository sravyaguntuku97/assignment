import React, { Component } from "react";
import UsersUi from "../../../components/user/users";
import Employees from "../../../json/usersJson";
import { Link } from "react-router-dom";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employees: Employees,
      search:null
    };

  }
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }


  render() {
    const elementStyle ={
      border:'2px solid #ccc',
      borderRadius:'10px',
      position:'relative',
      left:'27.5rem',
      height:'3rem',
      width:'25rem',
      marginTop:'2rem',
      marginBottom:'2rem'
    }

  const employees = Employees.filter((emp)=>{
    if(this.state.search == null)
        return emp
    else if(emp.emp_name.toLowerCase().includes(this.state.search.toLowerCase()) || emp.emp_department.toLowerCase().includes(this.state.search.toLowerCase())){
        return emp
    }
  }).map(emp=>{
    return(
    <div>
      <Link to={"/user_data/" + emp.emp_id}>
              <UsersUi
                key={emp.emp_id}
                name={emp.emp_name}
                pic={emp.emp_photo_path}
                department={emp.emp_department}
                designation={emp.emp_designation}
                address={emp.emp_address}
              />
            </Link>
    </div>
    )
  })


    return (
      <div>
      <input type="text" placeholder="   Search Here !!" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {employees }
      </div>


    );
  }
}
