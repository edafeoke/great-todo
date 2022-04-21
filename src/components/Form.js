import React, { useState } from "react";

const Form = () => {
  const [todoContent, setTodoContent] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        margin: 10,
      }}
    >
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          if (todoContent !== "") {
            fetch("http://127.0.0.1:5000/api/v1/add_todo", {
              method: "POST",
              body: JSON.stringify({
                content: todoContent,
                isCompleted: false,
              }),
              headers: { "Content-type": "application/json; charset=UTF-8" },
            })
              .then((response) =>
                response.ok ? response.json() : Promise.reject(response)
              )
              .then(() => {
                setTodoContent("");
              })
              .then((data) => console.log(data))
              .catch((err) => alert(err));
          }
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          boxShadow: "2px 2px 15px #ccc",
          alignItems: "center",
          width: "90%",
          maxWidth: 700,
          padding: 10,
        }}
      >
        <input
          style={{
            outlineColor: "#171",
            color: "#333",
            padding: 5,
            marginTop: 5,
            width: "80%",
            borderRadius: 10,
          }}
          type="text"
          id="content"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <input
          style={{
            padding: 10,
            marginTop: 5,
            width: "84%",
            backgroundColor: "#0275d8",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: 10,
          }}
          type="submit"
          id="submit"
          // onClick={(e)=>console.log(e)}
          value="New Todo"
        />
      </form>
    </div>
  );
};

export default Form;
