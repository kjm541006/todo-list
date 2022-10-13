import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, IToDo, toDoState } from "../atoms";
import { FaTrash } from "react-icons/fa";

interface ListBtn {
  name?: String;
  onClick: Function;
  isDelete?: boolean;
}

const List = styled.ul`
  background-color: pink;
  margin-bottom: 12px;
  border-radius: 12px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 6px 12px;
  @media screen and (max-width: 767px) {
    display: block;
    padding: 12px;
  }
`;

const ListSpan = styled.span`
  @media screen and (max-width: 767px) {
    display: block;
    margin: 4px 4px 8px 4px;
    font-size: 16px;
  }
  margin: 8px 8px 16px 8px;

  color: black;
  font-weight: 400;
  font-size: 18px;
`;

const ListButtonContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-right: auto;
  }
  display: flex;
  align-items: center;
`;

const ListButton = styled.button<ListBtn>`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => (props.isDelete ? "#d63031" : "#2ecc71")};
      color: #181818;
      transition: all 0.1s;
    }
  }
  @media (hover: none) {
    &:active {
      background-color: ${(props) => (props.isDelete ? "#d63031" : "#2ecc71")};
      color: #181818;
      transition: all 0.1s;
    }
  }
  cursor: pointer;
  border: ${(props) => (props.isDelete ? "none" : "none")};
  color: ${(props) => (props.isDelete ? "#d63031" : "white")};
  font-size: ${(props) => (props.isDelete ? "16px" : "14px")};
  background-color: black;
  border-radius: 8px;
  margin-right: 8px;
  padding: 8px 16px;
  box-shadow: 2px 2px 2px #636e72;
  @media screen and (max-width: 767px) {
    padding: 6px 12px;
    font-size: 14px;
    &:last-child {
      margin-left: auto;
    }
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const setCategory = useSetRecoilState(categoryState);
  console.log(category);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      console.log(newToDo);
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };

  const onStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      console.log(newToDo);
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
    setCategory(Categories.DOING);
  };

  const onDelete = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)];
    });
  };

  return (
    <List>
      <ListItem>
        {category === Categories.DOING ? (
          <ListSpan>{text} 하는 중...</ListSpan>
        ) : category === Categories.DONE ? (
          <ListSpan>{text} 완료!!!</ListSpan>
        ) : (
          <ListSpan>{text}</ListSpan>
        )}
        <ListButtonContainer>
          {category !== Categories.DOING && category !== Categories.DONE && (
            <ListButton name={Categories.DOING} onClick={onStart}>
              시작
            </ListButton>
          )}
          {category !== Categories.TO_DO && category !== Categories.DONE && (
            <ListButton name={Categories.TO_DO} onClick={onClick}>
              미루기
            </ListButton>
          )}
          {category !== Categories.DONE && (
            <ListButton name={Categories.DONE} onClick={onClick}>
              완료
            </ListButton>
          )}
          <ListButton isDelete onClick={onDelete}>
            <FaTrash />
          </ListButton>
        </ListButtonContainer>
      </ListItem>
    </List>
  );
}

export default ToDo;
