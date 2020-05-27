import React, { FC, useContext } from "react";
import * as S from "./style";
import { SECTION } from "../../constants";
import { SectionContext } from "../../App";

const MoveItemButton: FC<{
  title: string;
  item: string;
  index: number;
}> = ({ title, index, item }) => {
  const { rightOnClick, leftOnClick } = useContext(SectionContext);
  const leftmost = SECTION.indexOf(title) === 0;
  const rightmost = SECTION.indexOf(title) === SECTION.length - 1;

  return (
    <S.Item>
      {!leftmost ? (
        <div onClick={() => leftOnClick(title, index)}>{"<"}</div>
      ) : (
        <div />
      )}
      <div>{item}</div>
      {!rightmost ? (
        <div onClick={() => rightOnClick(title, index)}>{">"}</div>
      ) : (
        <div />
      )}
    </S.Item>
  );
};

const Kanban: FC<{ itemList: string[]; title: string }> = ({
  itemList,
  title,
}) => {
  const { addItem } = useContext(SectionContext);

  const handleAddButton = (): void => {
    const isItem = window.prompt(`Add a new item in [${title}]`);
    !!isItem && addItem(title, isItem);
  };

  return (
    <S.Container>
      <S.Header>{title}</S.Header>
      <S.Body>
        {itemList?.map((item, i) => (
          <MoveItemButton title={title} item={item} index={i} key={i} />
        ))}
        <S.AddButton onClick={handleAddButton}>+</S.AddButton>
      </S.Body>
    </S.Container>
  );
};

export default Kanban;
