import useToggle from "../useToggle";

const DemoUseToggle = () => {
  const [isOn, toggle] = useToggle(false);

  return (
    <div className="App">
      <button onClick={toggle}>Toggle</button>
      {isOn ? "on" : "off"}
    </div>
  );
};

export default DemoUseToggle;
