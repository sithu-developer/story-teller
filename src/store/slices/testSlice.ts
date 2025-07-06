import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Test } from "../../../generated/prisma";
import { CreateStd } from "@/type/test";

interface InitialStateTestSlice {
    value : Test[]
}

const initialStateValue : InitialStateTestSlice  = {
    value : []
}

export const sendData = createAsyncThunk("testSlice/sendDate" , async ( newStd : CreateStd , thunkApi) => {
    try {
        const response =  await fetch("/api/test" , {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify( newStd )
        });
        const acceptedNewStudent = await response.json();
        thunkApi.dispatch( addNewStdToStore(acceptedNewStudent) )
        console.log(acceptedNewStudent) // <= I added this , to check createdNewStudent in Console / check
    } catch(err) {
        console.log(err)
    }
})

export const testSlice =  createSlice({ 
    name : "testSlice",
    initialState : initialStateValue ,
    reducers : {
        addNewStdToStore : ( orgState , action ) => {  // same as store in index.tsx
            orgState.value = [ ...orgState.value , action.payload ]
        }
    }
})

export const { addNewStdToStore } = testSlice.actions  // learn by heart or see in redux toolkit doc

export default testSlice.reducer;


