import React from "react";

import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";

import Header from "./components/Header";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import classes from "./PersonEditorPage.module.scss";

const PersonEditorPage: React.FC = () => {
  return (
    <div className={classes.HomePage}>
      <Header />
      <Content>
        <Row>
          <Col md={12} xs={24}>
            <PersonsList />
          </Col>
          <Col md={12} xs={24}>
            <PersonForm />
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default PersonEditorPage;
