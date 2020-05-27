import React, { useState, createContext } from "react";
import { SECTION } from "./constants";
import Kanban from "components/Kanban";
import * as S from "./style";
import { moveToItem } from "./util";

export type IItem = {
  [title: string]: string[];
};

export type ISectionContext = {
  items: IItem;
  addItem: (title: string, content: string) => void;
  rightOnClick: (title: string, idx: number) => void;
  leftOnClick: (title: string, idx: number) => void;
};

const items: IItem = Object.fromEntries(SECTION.map((el) => [el, []]));

export const SectionContext = createContext<ISectionContext>({
  items,
  addItem: () => void 0,
  rightOnClick: () => void 0,
  leftOnClick: () => void 0,
});

function App() {
  const addItem = (title: string, content: string): void => {
    setSectionItem((prev) => {
      const result = {
        ...prev,
        items: {
          ...prev.items,
          [title]: [...prev.items[title], content],
        },
      };
      return result;
    });
  };

  const rightOnClick = (currTitle: string, currIdx: number): void => {
    const index = SECTION.indexOf(currTitle);
    const justRightTitle = SECTION[index + 1];
    setSectionItem((prev) =>
      SECTION[index] || index === 0
        ? moveToItem(prev, currTitle, justRightTitle, currIdx)
        : prev
    );
  };

  const leftOnClick = (currTitle: string, currIdx: number): void => {
    const index = SECTION.indexOf(currTitle);
    const justLeftTitle = SECTION[index - 1];
    setSectionItem((prev) =>
      SECTION[index] || index === SECTION.length - 1
        ? moveToItem(prev, currTitle, justLeftTitle, currIdx)
        : prev
    );
  };

  const initialState = {
    items,
    addItem,
    leftOnClick,
    rightOnClick,
  };

  const [sectionItem, setSectionItem] = useState<ISectionContext>(initialState);

  return (
    <SectionContext.Provider value={sectionItem}>
      <S.Container>
        {Object.entries(sectionItem.items).map(([title, itemList]) => (
          <Kanban key={title} itemList={itemList} title={title} />
        ))}
      </S.Container>
    </SectionContext.Provider>
  );
}

export default App;
