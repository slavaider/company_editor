import React, { FC } from "react";

import notFoundImage from "@assets/no_avatar.jpg";
import { selectPerson } from "@store/actions/personsActions";
import { IPerson } from "@store/model/PersonModel";
import { RootState } from "@store/store";
import { Avatar, List } from "antd";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import classes from "./PersonsList.module.scss";

const PersonsList: FC = () => {
  const selectedPersonId = useSelector(
    (state: RootState) => state.persons.selectedPersonId
  );
  const persons = useSelector((state: RootState) => state.persons.persons);
  const dispatch = useDispatch();

  const onCLickHandler = (id: string) => {
    dispatch(selectPerson(id));
  };

  return (
    <div className={classes.PersonsList}>
      <List
        bordered
        header={<h3>Список сотрудников</h3>}
        itemLayout="horizontal"
        dataSource={persons}
        renderItem={(item: IPerson) => (
          <List.Item
            className={cn(
              classes.Hover,
              item.id === selectedPersonId ? classes.activeItem : ""
            )}
            onClick={() => onCLickHandler(item.id)}
          >
            <List.Item.Meta
              avatar={<Avatar src={notFoundImage} />}
              title={<p className={classes.HoverText}>{item.username}</p>}
              description={
                <div className={classes.HoverText}>
                  <p>
                    gender: {item.gender ? "female" : "male"} &nbsp; position:{" "}
                    {item.position} &nbsp; birthday:{" "}
                    {item.birthday.toLocaleDateString()} &nbsp;
                    {item.retired && "retired"}
                  </p>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PersonsList;
