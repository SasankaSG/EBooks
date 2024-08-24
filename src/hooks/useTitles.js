import { useEffect } from "react";

export const useTitles = (title) => {
    useEffect(() => {
        document.title = `${title} - CodeBook`;
    })
  return null;
}
