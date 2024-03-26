import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0px auto 24px;
`;

const Input = styled.input`
  border: none;
  border-radius: 16px;
  width: 85%;
  height: 36px;
  padding: 4px 4px 4px 12px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  -webkit-tap-highlight-color: transparent;
  @media (hover: hover) {
    &:hover {
      color: #181818;
      background-color: #2ecc71;
      transition: all 0.3s;
    }
  }
  @media (hover: none) {
    &:active {
      color: #181818;
      background-color: #2ecc71;
      transition: all 0.3s;
    }
  }
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
          })}
          placeholder={category === Categories.TO_DO ? "할 일 추가" : "현재 진행 중인 작업 추가"}
        />
      )}

      {category !== Categories.DONE && <Button>추가</Button>}
    </Form>
  );
}
