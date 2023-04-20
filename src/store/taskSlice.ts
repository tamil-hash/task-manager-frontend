import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface taskState {
  todoList: Array<Object>;
  inprogressList: Array<Object>;
  completedList: Array<Object>;
}

const initialState: taskState = {
  todoList: [],
  inprogressList:[],
  completedList:[],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTasks: (state: taskState, action: PayloadAction<Array<Object>>) => {
      let todo = [], inprogress = [], completed=[];
      const tasks:any = action.payload;
      const tasksLength = tasks.length;
      for(let i=0;i<tasksLength;i++){
        if(tasks[i].status==="todo"){
            todo.push(tasks[i])
        }
        if(tasks[i].status==="inprogress"){
            inprogress.push(tasks[i])
        }
        if(tasks[i].status==="completed"){
            completed.push(tasks[i])
        }
        state.todoList = todo;
        state.inprogressList = inprogress;
        state.completedList = completed;
      }
      action
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTasks } = authSlice.actions;

export default authSlice.reducer;
