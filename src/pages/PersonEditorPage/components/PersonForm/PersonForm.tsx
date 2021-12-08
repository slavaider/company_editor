import React, { FC, useMemo } from "react";

import { addPerson, editPerson } from "@store/actions/personsActions";
import { IPerson, Position } from "@store/model/PersonModel";
import { RootState } from "@store/store";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Switch,
} from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import classes from "./PersonForm.module.scss";

const PersonForm: FC = () => {
  const selectedPersonId = useSelector(
    (state: RootState) => state.persons.selectedPersonId
  );
  const persons = useSelector((state: RootState) => state.persons.persons);
  const dispatch = useDispatch();

  const onFinish = (values: IPerson) => {
    if (selectedPersonId) {
      dispatch(editPerson(values));
    } else {
      dispatch(addPerson(values));
    }
  };

  const selectedPerson = useMemo(() => {
    return persons.find((person) => person.id === selectedPersonId);
  }, [selectedPersonId, persons]);

  const fields = useMemo(() => {
    return [
      { name: "id", value: selectedPerson?.id },
      { name: "username", value: selectedPerson?.username },
      { name: "position", value: selectedPerson?.position },
      { name: "birthday", value: moment(selectedPerson?.birthday) },
      { name: "gender", value: selectedPerson?.gender },
      { name: "retired", value: selectedPerson?.retired },
      { name: "collages", value: selectedPerson?.collages },
    ];
  }, [selectedPerson]);

  return (
    <Form
      fields={fields}
      className={classes.PersonForm}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      name="nest-messages"
      onFinish={onFinish}
    >
      <Form.Item name={["id"]} hidden>
        <Input />
      </Form.Item>

      <Form.Item name={["username"]} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name={["position"]}
        label="Position"
        rules={[{ required: true }]}
      >
        <Select>
          <Select.Option value={Position.junior}>
            {Position.junior}
          </Select.Option>
          <Select.Option value={Position.middle}>
            {Position.middle}
          </Select.Option>
          <Select.Option value={Position.senior}>
            {Position.senior}
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name={["birthday"]} label="Birthday">
        <DatePicker />
      </Form.Item>

      <Form.Item name={["gender"]} label="Gender" valuePropName="checked">
        <Switch
          checkedChildren={<p>female</p>}
          unCheckedChildren={<p>male</p>}
        />
      </Form.Item>

      <Form.Item name={["retired"]} label="Retired" valuePropName="checked">
        <Checkbox />
      </Form.Item>

      <Form.Item name={["collages"]} label="Collages">
        <Select mode="multiple" placeholder="Please select">
          {persons.map((person) => (
            <Select.Option
              key={person.id}
              label={person.username}
              value={person.username}
            >
              {person.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          md: {
            offset: 4,
          },
          xs: {
            offset: 0,
          },
          span: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          {selectedPersonId ? "Сохранить изменения" : "Добавить сотрудника"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PersonForm;
