import * as React from 'react';

export let usersList = [];

export function addUser(userData)
{
    if(checkUserExist(userData)===-1)
    {
        if(!usersList)
            usersList=[];
        usersList.push(userData);
        storeUsers(usersList);
        return 1;
    }
    else
        return -1
};

function checkUserExist(userData)
{
    loadUsers();
    if(usersList)
    {
        let pp=usersList.findIndex(object => object.userName === userData.userName);
        return  usersList.findIndex(object => object.userName === userData.userName);
    }
    else
    {
        return -1;
    }
};

export function validateUserLogin(userData){
    let iIndex=checkUserExist(userData)
    if(iIndex!==-1)
    {//El usuario existe en la lista
        if(JSON.stringify(usersList[iIndex]) === JSON.stringify(userData))
        {//los datos son iguales a los almacenados
            return 1;
        }
        else{
            if(usersList.side !== userData.side)
                return 2; //no coincide el side
            if(usersList.password !== userData.password)
                return 3; //no coincide el password
        }
        
    }
    else
        return -1;
}

function storeUsers()
{
    localStorage.setItem("S8-UsersList",JSON.stringify(usersList));
}

function loadUsers()
{
    usersList = JSON.parse(localStorage.getItem("S8-UsersList"));
}
