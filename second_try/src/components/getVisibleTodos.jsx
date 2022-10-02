import { todos } from "../reducers/todos";
import { createSelector } from "reselect";
var visibilityFilter = "SHOW_ALL";

var getVisibilityFilter = (state) => visibilityFilter;
var getTodos = (state) => todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter((t) => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter((t) => !t.completed);
    }
  }
);

export default getVisibleTodos;
//<button onClick={()=>props.getVisibleTodos(props.SHOW_ALL , props.experimentData.lights)}> SHOW_COMPLETED</button>
