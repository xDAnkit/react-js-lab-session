import { signal } from "@preact/signals-react";
import { memo } from "react";

const count = signal(1);
const todos = signal([{ text: "Buy groceries", id: new Date().getTime() }]);

const ReactSignals = memo(() => {
  console.log("Render ReactSignals");
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
});

const ReactSignalV2 = () => {
  console.log("Render ReactSignalV2");

  function addTodo() {
    todos.value = [
      ...todos.value,
      { text: "Ankit Jain", id: new Date().getTime() },
    ];
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count.value++}>click me</button>
      <button onClick={addTodo}>Add Product</button>
      {todos.value.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.text}</p>
          </div>
        );
      })}
      <ReactSignals />
    </div>
  );
};

export default ReactSignalV2;
