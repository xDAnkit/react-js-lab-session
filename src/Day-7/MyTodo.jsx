import { useState } from "react";
import { Button, Container, Input, Row } from "reactstrap";

const MyTodo = () => {
  const [todo, setTodo] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddTodo = () => {
    const todoElement = {
      id: new Date().getTime(),
      title: newTodoTitle,
      createdAt: new Date(),
    };

    setTodo([...todo, todoElement]);
    setNewTodoTitle("");

    //
  };

  console.log("LN19:", todo);
  return (
    <>
      <Container>
        <Row>
          <label>Title</label>
          <Input
            placeholder="Enter title"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
        </Row>
        <Row>
          <Button onClick={handleAddTodo}>Add to list</Button>
        </Row>

        <p>My Todo's List</p>
        <ul>
          {todo.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </Container>
    </>
  );
};

export default MyTodo;
