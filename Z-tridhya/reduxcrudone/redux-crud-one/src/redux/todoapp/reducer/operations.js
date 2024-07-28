const initialState = [
    { id: 1, todo: 'Buy Laptop', completed: false },
    { id: 2, todo: 'Master Redux', completed: false },
    { id: 3, todo: 'Watering Plants', completed: true },
];

const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
        case "DELETE_ALL":
            return [];
        case "REMOVE_TODO":
            const filteredTodos = state.filter((todo) => todo.id !== action.payload);
            return filteredTodos;
        case "UPDATE_TODO":
            console.log(action.payload,"=====================action.payload===>upfate")
            let data = action.payload;
            let updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
             return updatedArray.push(item);
            // return item
        })
      
            return updatedArray;

        case "UPDATE_CHECKBOX":
            let todoArray = [];
            state.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
              return  todoArray.push(item);
            })
            return todoArray;

        default:
            return state;
    }

}

export default operationsReducer











