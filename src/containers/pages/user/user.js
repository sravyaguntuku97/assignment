import React, { Component } from "react";
import Employees from "../../../json/usersJson";
import UserUi from "../../../components/user/user";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Col } from "antd";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employees: Employees,

    };
  }

  

  render() {
    console.log(this.props.match.params.id);
    return (
      <div style={{ marginTop: "5rem" }}>
        {this.state.Employees.filter(
          (emp) => emp.emp_id == this.props.match.params.id
        ).map((filteredEmp) => (
          <div>
            <UserUi
              pic={filteredEmp.emp_photo_path}
              name={filteredEmp.emp_name}
              designation={filteredEmp.emp_designation}
              department={filteredEmp.emp_department}
              address={filteredEmp.emp_address}
              experience={filteredEmp.emp_experience}
              salary={filteredEmp.emp_salary}
              id={filteredEmp.emp_id}
            />
            {/* <Col span={8} offset={8}> */}

            <Map
              google={this.props.google}
              zoom={14}
              style={{
                width: "50%",
                height: "50%",
                position: "relative",
                margin: "3rem 20rem",
              }}
            >
              <Marker
                title={"The marker`s title will appear as a tooltip."}
                name={"HYD"}
                position={{ lat: 17.414252, lng: 78.46588 }}
              />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{filteredEmp.emp_address}</h1>
                </div>
              </InfoWindow>
            </Map>
            {/* </Col> */}
          </div>
        ))}
      </div>
    );
  }
}

// export default User
export default GoogleApiWrapper({
  apiKey: "AIzaSyCUHaMwqLgAGkvOLBEYhzDlGl0oS5J9V1g",
})(User);
//   AIzaSyCZQdWZWsNyakL3OEbvVherjO4c9HcqFc8
