import React, { FC } from "react";

import { removePerson, selectPerson } from "@store/actions/personsActions";
import { RootState } from "@store/store";
import { Button, PageHeader } from "antd";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const selectedPersonId = useSelector(
    (state: RootState) => state.persons.selectedPersonId
  );
  const dispatch = useDispatch();

  return (
    <PageHeader className="site-page-header-responsive" title="Company Editor">
      <div className={classes.Buttons}>
        <Button
          key="3"
          type="primary"
          onClick={() => dispatch(selectPerson(null))}
        >
          Добавить нового сотрудника
        </Button>
        <Button
          key="2"
          danger
          disabled={!selectedPersonId}
          onClick={() => dispatch(removePerson(selectedPersonId))}
        >
          Удалить выбранного сотрудника
        </Button>
      </div>
    </PageHeader>
  );
};

export default Header;
