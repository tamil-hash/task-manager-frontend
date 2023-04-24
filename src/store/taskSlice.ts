import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface taskState {
  todoList: Array<Object>;
  inprogressList: Array<Object>;
  completedList: Array<Object>;
  selectedTask: Object;
}

const initialState: taskState = {
  todoList: [],
  inprogressList: [],
  completedList: [],
  selectedTask: {},
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state: taskState, action: PayloadAction<Array<Object>>) => {
      let todo = [],
        inprogress = [],
        completed = [];
      const tasks: any = action.payload;
      const tasksLength = tasks.length;
      for (let i = 0; i < tasksLength; i++) {
        if (tasks[i].status === "todo") {
          todo.push(tasks[i]);
        }
        if (tasks[i].status === "inprogress") {
          inprogress.push(tasks[i]);
        }
        if (tasks[i].status === "completed") {
          completed.push(tasks[i]);
        }
        state.todoList = todo;
        state.inprogressList = inprogress;
        state.completedList = completed;
      }
    },
    setSelectedTask: (state: taskState, action: PayloadAction<any>) => {
      state.selectedTask = action.payload;
    },
    setProgress: (state: taskState, action: PayloadAction<any>) => {
      const newList = state.inprogressList.map((data: any) => {
        if (data._id === action.payload.id) {
          return { ...data, progress: action.payload.newPercent };
        }
        return data;
      });
      state.inprogressList = newList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTasks, setSelectedTask, setProgress } = taskSlice.actions;

export default taskSlice.reducer;
