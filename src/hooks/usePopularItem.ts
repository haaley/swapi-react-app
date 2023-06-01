import { useCallback } from "react";

export const usePopularItem = () => {
  const savePopularItem = useCallback(
    (item: any) => {
      const views =
        JSON.parse(localStorage?.getItem(item.name ?? item.title)) || 0;
      localStorage.setItem(item.name ?? item.title, JSON.stringify(views + 1));
    },
    []
  );

  return {
    savePopularItem,
  };
};
