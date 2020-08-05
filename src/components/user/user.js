import React from "react";
import { Avatar, Row, Col } from "antd";

const UserUI = (props) => {
  return (
    <React.Fragment>
      <Col span={8} offset={8}>
        <Col span={6} offset={8}>
          <Avatar size={128} src={props.pic} />
          <br />
          <h2 style={{ margin: "1rem 1rem" }}>
            <b>
              {props.name},
              <span style={{ fontSize: "10px" }}>{props.address}</span>
            </b>
          </h2>
        </Col>
        <hr />
        <div className="margin">
          <h4>
            <i>Title</i>
          </h4>
          <h3>
            {props.designation}, {props.id}
          </h3>
        </div>

        <hr />
        <div className="margin">
          <h4>
            <i>Department</i>
          </h4>
          <h3>{props.department}</h3>
        </div>

        <hr />
        <div className="margin">
          <h4>
            <i>About</i>
          </h4>
          <h3>{props.experience}</h3>
        </div>

        <hr />
        <div className="margin">
          <h4>
            <i>Salary</i>
          </h4>
          <h3>{props.salary}</h3>
        </div>
        <hr/>
      </Col>
      <style jsx="true">
        {`
          .margin {
            margin: 1rem 0rem;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default UserUI;
