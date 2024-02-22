import React from 'react'
import {useAuth} from './auth'
import {Navigate} from 'react-router-dom'
const RequiredAuth1=(props)=>{
    const auth=useAuth()
    if(!auth.user){
        return<Navigate to="/BYS"/>
    }
    return props.children
}
export default RequiredAuth1