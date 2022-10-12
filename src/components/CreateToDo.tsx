import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoState } from "../atoms";
import { MdOutlineAdd } from "react-icons/md";

interface IForm {
  toDo: string;
}

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  padding-left: 40px;
`;

const Input = styled.input`
  border: 1px solid red;
  border-radius: 16px;
  width: 75%;
  height: 36px;
  padding: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background: #181818;
  border: 1px solid white;
  box-shadow: none;
  border-radius: 12px;
  padding: 8px 12px;
  overflow: visible;
  cursor: pointer;
  font-size: 18px;
  color: white;
  margin-left: 12px;
  &:hover {
    color: #181818;
    background-color: #2ecc71;
    transition: all 0.3s;
  }
`;

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [...oldToDos, { text: toDo, id: Date.now(), category }]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      {category !== Categories.DONE && (
        <Input
          {...register("toDo", {
            required: "할 일을 입력하세요",
            // minLength: {
            //   value: 2,
            //   message: "길이가 2 이상이어야 합니다",
            // },
          })}
          placeholder={
            category === Categories.TO_DO
              ? "해야 할 일을 추가하세요"
              : "현재 진행 중인 작업을 추가하세요"
          }
        />
      )}

      {category !== Categories.DONE && <Button>Add</Button>}
    </Form>
  );
}
