import { createSlice } from '@reduxjs/toolkit'   

const initialState = {
    value:false,
}
const userSlice  = createSlice({
  name: 'user', //리듀서 이름 
  initialState, // 테이타 초기값 
  reducers: { // 상태가 변하면 어떻게 실행될지 지정하는 
        login : (state,action) => {
            state.value = action.payload        
        },
        logout : (state,action) => {
            state.value = action.payload
        },
    },

})


export const {login,logout} = userSlice.actions
export default userSlice.reducer