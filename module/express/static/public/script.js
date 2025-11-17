const todosDiv = document.getElementById("todos");

const fetchTodos = () => {
  fetch("http://localhost:4000/api/get")
    .then((res) => res.json())
    .then((data) => {
      todosDiv.innerHTML = "";
      const p = document.createElement("p");
      data.map((todo) => {
        p.textContent = todo.title;
        todosDiv.appendChild(p);
      });
    })
    .catch((err) => alert(err.message));
};

fetchTodos();


// 10am