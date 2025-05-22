import useLocalStorage from "../useLocalStorage";

const DemoUseLocalStorage = () => {

    const { storedValue, setItem, removeItem } = useLocalStorage('userName', 'Elon Mask');

    const handleChange = () => {
        setItem('Tony Stark');
    }

    const handleRemove = () => {
        removeItem();
      };

  return (
    <>
    <div>{storedValue}</div>
    <button onClick={handleChange}>Change name</button>
    <button onClick={handleRemove}>Delete item</button>
    </>
  );
};

export default DemoUseLocalStorage;
