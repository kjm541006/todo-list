import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Container = styled.div`
  max-width: 1024px;
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
  width: 90%;
  max-width: 767px;
  min-height: 50vh;
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
  background-color: white;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  color: #7f8c8d;
`;

const Button = styled.button<any>`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  @media (hover: hover) {
    &:hover {
      background-color: #2c3e50;
      opacity: ${(props) => (props.isActive ? "1" : "0.8")};
      transition: all 0.3s;
      color: white;
    }
  }
  @media (hover: none) {
    &:active {
      background-color: #2c3e50;
      opacity: ${(props) => (props.isActive ? "1" : "0.8")};
      transition: all 0.3s;
      color: white;
    }
  }
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.isActive ? "#2c3e50" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#7f8c8d")};
  padding: 10px 20px;
  font-size: 16px;

  &:first-child {
    border-top-left-radius: 24px;
  }

  &:last-child {
    border-top-right-radius: 24px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 32px;
`;

const CategoryHeader = styled.header`
  font-weight: 700;
  margin-bottom: 20px;
`;

const DeleteAllBtn = styled.button`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: red;
  color: white;
  font-size: 16px;
  padding: 8px;
  width: 30%;
  align-self: flex-end;
  border: none;
`;

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const setToDos = useSetRecoilState(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: any) => {
    console.log(event.target.value);
    setCategory(event.target.value as any);
    return false;
  };
  console.log(toDos);
  console.log(category);

  const isToDoActive = () => {
    if (category === Categories.TO_DO) {
      return true;
    } else {
      return false;
    }
  };
  const isDoingActive = () => {
    if (category === Categories.DOING) {
      return true;
    } else {
      return false;
    }
  };
  const isDoneActive = () => {
    if (category === Categories.DONE) {
      return true;
    } else {
      return false;
    }
  };

  const deleteAll = () => {
    setToDos([]);
  };

  return (
    <Container>
      <Header>To Dos</Header>
      <hr />
      <Main>
        <ButtonContainer>
          <Button isActive={isToDoActive()} value={Categories.TO_DO} onClick={onInput}>
            할 일
          </Button>
          <Button isActive={isDoingActive()} value={Categories.DOING} onClick={onInput}>
            진행 중
          </Button>
          <Button isActive={isDoneActive()} value={Categories.DONE} onClick={onInput}>
            완료
          </Button>
        </ButtonContainer>
        <MainContainer>
          {category === Categories.TO_DO && <CategoryHeader>To Do</CategoryHeader>}
          {category === Categories.DOING && (
            <CategoryHeader>{toDos.length}개 진행 중</CategoryHeader>
          )}
          {category === Categories.DONE && <CategoryHeader>{toDos.length}개 완료!!</CategoryHeader>}
          {category === Categories.DONE && toDos.length !== 0 && (
            <DeleteAllBtn onClick={deleteAll}>전체 삭제</DeleteAllBtn>
          )}
          <CreateToDo />
          {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </MainContainer>
      </Main>
    </Container>
  );
}
