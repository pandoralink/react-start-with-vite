import { useState, createElement } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return createElement("div", {
    children: [
      "count:" + count,
      createElement(
        "button",
        {
          key: "2",
          onClick: handleClick,
        },
        "click + 1"
      ),
    ],
  });
}

export default App;
