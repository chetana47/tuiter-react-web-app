import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuitHome.json';

const tuitHomeSlice = createSlice({
                                      name: 'tuits',
                                      initialState: tuits,
                                      reducers: {
                                          updateLike(state, action) {
                                              const tuit = state.find((tuit) =>
                                                                          tuit._id === action.payload._id)
                                              if(tuit.liked) {
                                                  tuit.likes += 1;
                                              } else {
                                                  tuit.liked = true;
                                                  tuit.likes += 1;
                                              }
                                          }
                                      },
                                  });
export const {updateLike} = tuitHomeSlice.actions

export default tuitHomeSlice.reducer;