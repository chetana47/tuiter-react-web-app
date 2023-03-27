import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuitdata.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: tuits,
                                   reducers: {
                                       deleteTuit(state, action) {
                                           const index = state
                                               .findIndex(tuit =>
                                                              tuit._id === action.payload);
                                           state.splice(index, 1);
                                       },
                                       createTuit(state, action) {
                                           console.log(action);
                                           state.unshift({
                                             ...action.payload,
                                             ...templateTuit,
                                             _id: (new Date()).getTime(),
                                         })
                                       },
                                       handleLike(state, action) {
                                           console.log(action);
                                           state.map(tuit => {
                                                   if(tuit._id === action.payload) {
                                                        if( tuit.liked ) {
                                                            tuit.liked = false;
                                                            tuit.likes = tuit.likes - 1;
                                                        } else {
                                                            tuit.liked = true;
                                                            tuit.likes = tuit.likes + 1;
                                                        }
                                                   }
                                               });
                                       }
                                   }
                               });

export const {createTuit, deleteTuit, handleLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;