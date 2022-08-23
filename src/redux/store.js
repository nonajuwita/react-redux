//simpan konfigurasi redux

import { createStore } from "redux";

const authState = {
    data:{
        name: "muhsin",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      }
   
};

const authReducer = (state = authState) => {
    return state;
}
const store = createStore(authReducer);

// export const store = createStore(initState);

export default store;