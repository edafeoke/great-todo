import React from "react";

const deleteTodo = (id) => {
  const url = `http://localhost:5000/api/v1/delete_todo/${id}`;
  fetch(url,{
    method:'DELETE'
  })
  .then((res)=>res.json())
  .then((data)=> console.log(data))
  .catch(err=> console.log(err));
};

function Todo({ todo }) {
  return (
    <div
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 5,
        // background:'red',
        margin: 5,
      }}
    >
      <input type="checkbox" />
      {/* <p style={{ color: !todo.isComplted ? "#333" : "#f33", fontSize: 14 }}>
        {todo.id}
      </p> */}
      <p
        style={{
          color: !todo.isComplted ? "#333" : "#f33",
          textAlign: "left",
          marginLeft: 25,
        }}
      >
        {todo.content}
      </p>
      <p style={{ flex: 1 }}></p>
      <button onClick={()=>deleteTodo(todo.id)} style={styles.button}>Delete</button>
      <button style={{ ...styles.button, backgroundColor: "#5cb85c" }}>
        Update
      </button>
    </div>
  );
}

export default Todo;

const styles = {
  button: {
    marginRight: 10,
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    padding: 10,
    borderRadius: 10,
  },
};
