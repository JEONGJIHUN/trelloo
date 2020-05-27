import { ISectionContext } from "App";

export const moveToItem = (
  prev: ISectionContext,
  currTitle: string,
  rightNextTitle: string,
  currIdx: number
): ISectionContext => {
  const filteredArr = prev.items[currTitle].filter((_, i) => i !== currIdx);
  const movedResult = {
    [rightNextTitle]: [
      ...prev.items[rightNextTitle],
      ...prev.items[currTitle].slice(currIdx, currIdx + 1),
    ],
  };
  const resolvedItems = {
    ...prev.items,
    ...movedResult,
    [currTitle]: [...filteredArr],
  };
  const result = {
    ...prev,
    items: resolvedItems,
  };
  return result;
};
