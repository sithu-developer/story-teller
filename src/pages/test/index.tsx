import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addNewStdToStore, sendData } from "@/store/slices/testSlice";
import { CreateStd } from "@/type/test";
import { useState } from "react";


const testPage = () => {

    const [ newStd , setNewStd ]  = useState<CreateStd>({ name : "" , address : "" , age : 0 , email : "" });
    const one = useAppSelector((store) => { return store.test.value })
    const dispatch = useAppDispatch();

    const handleSendData = () => {
        dispatch(sendData(newStd))
    }

    const deleteFunction = async () => {
        await fetch("/api/test" , {
            method : "DELETE",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({id : 2})
        })
    }

    return (
        <div>
            <input onChange={(e) => { setNewStd({ ...newStd , name : e.target.value }) }} placeholder="name" />
            <input onChange={(e) => { setNewStd({...newStd , address : e.target.value }) }} placeholder="address" />
            <input onChange={(e) => { setNewStd({...newStd , email : e.target.value }) }} placeholder="email" />
            <input onChange={(e) => { setNewStd({...newStd , age : Number(e.target.value) }) }} placeholder="age" />
            <button onClick={() => {handleSendData()}}>Send</button><br /><br />
            <button onClick={() => { deleteFunction() }} >Delete</button>

            <p>{one.length ? one[0].name + one[0].email + one[0].address + one[0].age : "no"}</p>
        </div>
        
    )
}

export default testPage;


const Soe = { name : "Soe Thiri" , age : 21 , gender : "female" }; // <= object 

