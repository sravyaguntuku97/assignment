import React, { Component } from "react";
import { Avatar, Row, Col } from "antd";


const UsersUI = (props) => {
  return (
    <React.Fragment>
      <Col span={8} offset={8}>
        <div className="flex">
          <div className="mar">
            <Avatar size={64} src={props.pic} />
          </div>
          <div className="mar">
            <h3>
              <b>{props.name}</b>
            </h3>
            <h4>{props.designation}</h4>
            <h4>
              {props.department},{props.address}
            </h4>
          </div>
        </div>
      </Col>
      <style jsx="true">
        {`
          .flex {
            display: flex;
            margin: 1rem;
            border: 2px solid #ccc;
          }
          .mar {
            margin: 1rem;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default UsersUI;
