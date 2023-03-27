import { createSlice } from "@reduxjs/toolkit";
import postsJson from "../post-summary-list/posts.json";

const explore = createSlice({
                                name: "profile",
                                initialState: postsJson
                            });

export default explore.reducer;