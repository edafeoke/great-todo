import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos !== [] ? (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <h1 style={{ color: "#333", fontSize: 72, fontWeight: "bold" }}>
          No todo avaliable!
        </h1>
      )}
    </div>
  );
};

export default Todos;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    boxShadow: "2px 2px 15px #aaa",
    alignItems: "center",
    width: "86%",
    padding: 20,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 15,
    maxWidth: 700,
  },
};
