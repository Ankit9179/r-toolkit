import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//createAsyncThunk is used for perform where you need to delay tasks. like fetching data from api

//action
export const fetchTodo = createAsyncThunk("fetchTodoApi", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
});

const fetchSlice = createSlice({
  name: "todo",
  initialState: {
    isloading: false,
    todos: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.isloading = true;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isloading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      console.log("Error", action.payload);
    });
  },
});

export default fetchSlice.reducer;
