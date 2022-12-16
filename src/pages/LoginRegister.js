import {React, setState, useState,useEffect} from "react";
import {Link,Navigate } from "react-router-dom";

import Header from "./Header";

import { addUser, validateUserLogin } from "../utils/UserManage";

import empireLogo from "../images/empire_logo.png"
import allianceLogo from "../images/alliance_logo.png"
import loginLogo from "../images/login_logo.png"
import { handler } from "daisyui";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

export default function LoginRegister (props) { 

    const sTitle=props?.type===1?"LOGIN":"REGISTER";
    const bLogin=props?.type===1?true:false;
    let iResult;

    const [userData, setUserData] =useState({side:"alliance",userName:"",password:""});
    const [sError, setsError] = useState("");

    useEffect( () => {
        
        setsError("");
    },[bLogin]);

    function handleChange(event){
        const {name,value} = event.target;
        setsError("");
        setUserData( prevUserData => 
        {
            return {
                ...prevUserData,
                [name] : value 
            }
        });
    }

    function loginRegister(){
        let iResult;
        if(props?.type===1){
            iResult= validateUserLogin(userData);
            switch(iResult)
            {
                case 1: //OK seguimos
                    console.log("Login OK");
                    props.setUser(userData.userName);
                    return <Navigate to="/" />;
                    break;
                case 2: //No coincide el SIDE
                    console.log("LOGIN KO, side no coincide");
                    setsError("LOGIN KO, side no coincide");
                    break;
                case 3: //No coincide el SIDE
                    console.log("LOGIN KO, password no coincide");
                    setsError("LOGIN KO, password no coincide");
                    break;
                default:
                    console.log("Usuario no existe");
                    setsError("Usuario no existe");
                    break;
            }   
        }
        else{
            iResult=addUser(userData);
            switch(iResult)
            {
                case 1: //Usuario creado correctamente
                    console.log("Usuario creado OK");
                    break;
                case -1: //El usuario ya existe, no se puede crear
                default:
                    console.log("Usuario ya existe, no se puede crear");
                    setsError("Usuario ya existe, no se puede crear");
                    break;
            }
        }
    }

    return (
        <div className="">
            <Header userName={props.userName} logOut={props.logOut} setUser={props.setUser}/>
            <div className="flex justify-evenly  ... ">
                <div className="flex flex-col min-w-500px w-1/4 bg-black flex-wrap content-center p-10">
                    <img src={loginLogo} className="p-3" alt="logo" />
                    <h1 className="p-5 w-full text-4xl text-yellow-500">{sTitle}</h1>
                    <div>
                        <label>
                            <div className="grid grid-cols-4 gap-2 items-center">
                                <input type="radio" value="alliance" name="side" className="radio checked:bg-red-500" defaultChecked onChange={handleChange}></input>
                                <img src={allianceLogo} className="h-fit p-3" alt="logo" />
                                <span className="col-span-2 text-2xl label-text">Rebel Alliance</span> 
                            </div>
                        </label>
                        <label>
                            <div className="grid grid-cols-4 gap-2 items-center">
                                <input type="radio" value="empire" name="side" className="radio checked:bg-black-500"  onChange={handleChange}></input>
                                <img src={empireLogo} className="h-fit p-3" alt="logo" />
                                <span className="col-span-2 text-2xl label-text">Galactic Empire</span> 
                            </div>
                        </label>
                    </div>
                    <input type="text" name="userName" placeholder="Username" className="input input-bordered border-yellow-500 text-3xl mt-5 bg-grey-50" onChange={handleChange}></input>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered border-yellow-500 text-3xl mt-5 bg-grey-50" onChange={handleChange}></input>
                    <button  className="btn btn-active btn-ghost hover:bg-blue-500 mt-5 text-3xl" onClick={loginRegister} >{sTitle}</button>           
                    <h1 className="p-5 w-full text-xl text-red-500">{sError}</h1>
                    {bLogin && <Link to="/register">CREATE NEW USER</Link>}
                </div>
            </div>
        </div>
    );
};