import { useCallback, useState } from "react";

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [isToggle, setIsToggle] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    return setIsToggle((prev) => !prev);
  }, []);

  return [isToggle, toggle];
};

export default useToggle;
