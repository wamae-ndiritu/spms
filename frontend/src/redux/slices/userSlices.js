import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  loading: false,
  error: null,
  userInfo: userInfoFromLocalStorage,
  students: [],
  lecturers: [],
  myCourses: [],
  enrolled: false,
  deleted: false,
  created: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginStart: (state) => {
        state.loading = true;
        state.error = null;
    },
    userLoginSuccess: (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
    },
    userLoginFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearUserState: (state) => {
      state.userInfo = null;
    },
    addStudentsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addStudentsSuccess: (state, action) => {
      state.loading = false;
      state.students = action.payload;
    },
    addStudentsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addLecturesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addLecturesSuccess: (state) => {
      state.loading = false;
      state.created = true;
    },
    addLecturesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getLecturesSuccess: (state, action) => {
      state.loading = false;
      state.lecturers = action.payload;
    },
    getStudentsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getStudentsSuccess: (state, action) => {
      state.loading = false;
      state.students = action.payload;
    },
    getStudentsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getMyCoursesStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getMyCoursesSuccess: (state, action) => {
      state.loading = false;
      state.myCourses = action.payload;
    },
    getMyCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    enrollCoursesStart: (state) => {
      state.loading = true;
      state.error = false;
      state.enrolled = false;
    },
    enrollCoursesSuccess: (state) => {
      state.loading = false;
      state.enrolled = true;
    },
    enrollCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserSuccess: (state) => {
      state.deleted = true;
    },
    actionStart: (state) => {
      state.loading = false;
      state.error = null;
      state.deleted = false;
    },
    actionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetState: (state) => {
      state.deleted =  false;
      state.error = null;
      state.created = false;
    },
  },
});

export const {userLoginStart, userLoginSuccess, userLoginFail, clearUserState, addStudentsStart, addStudentsSuccess, addStudentsFail, getStudentsStart, getStudentsSuccess, getStudentsFail, getMyCoursesStart, getMyCoursesSuccess, getMyCoursesFail, enrollCoursesStart, enrollCoursesSuccess, enrollCoursesFail, addLecturesStart, addLecturesSuccess, addLecturesFail, getLecturesSuccess, actionStart, actionFail, deleteUserSuccess, resetState } = userSlice.actions;

export default userSlice.reducer;
