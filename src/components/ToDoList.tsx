import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Container = styled.div`
  max-width: 1024px;
  /* min-width: 680px; */
  margin: 0 auto;
`;

const Header = styled.h1`
  margin: 20px;
  font-size: 36px;
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  max-width: 512px;
  margin: 0 auto;
  background-color: #2c3e50;
  color: white;
  font-size: 24px;
  border-radius: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #2ecc71;
  border-radius: 24px;
`;

const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 10px 20px;
  font-size: 16px;
  &:hover {
    border-radius: 24px;
    background-color: white;
    transition: all 0.3s;
  }
`;

const CategoryHeader = styled.header`
  align-self: flex-start;
  padding: 20px 40px;
  font-weight: 700;
`;

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: any) => {
    console.log(event.target.value);
    setCategory(event.target.value as any);
  };
  console.log(toDos);
  console.log(category);

  return (
    <Container>
      <Header>To Dos</Header>
      <hr />
      <Main>
        {/* <select style={{ margin: "10px" }} value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>TO DO</option>
          <option value={Categories.DOING}>DOING</option>
          <option value={Categories.DONE}>DONE</option>
        </select> */}
        <ButtonContainer>
          <Button value={Categories.TO_DO} onClick={onInput}>
            해야 할 일
          </Button>
          <Button value={Categories.DOING} onClick={onInput}>
            진행 중
          </Button>
          <Button value={Categories.DONE} onClick={onInput}>
            완료
          </Button>
        </ButtonContainer>

        {category === Categories.TO_DO && <CategoryHeader>To Do</CategoryHeader>}
        {category === Categories.DOING && <CategoryHeader>진행 중</CategoryHeader>}
        {category === Categories.DONE && <CategoryHeader>{toDos.length}개 완료!!</CategoryHeader>}
        <CreateToDo />
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </Main>
    </Container>
  );
}
