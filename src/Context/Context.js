import React, { createContext } from 'react';
import $ from "jquery";
const Context = createContext({
   //state
    firstName:'',
    lastName:'',
    email:'',
    job:'',
    company:'',
    industry:'',
    country:'',
    geography:'',
    comment:'',
    policy:false,
    isFormValid:false,
    showModal:false,
    //functions
    handleFirstName:()=>{},
    handleLastName:()=>{},
    handleEmail:()=>{},
    handleJob:()=>{},
    handleCompany:()=>{},
    handleIndustry:()=>{},
    handleCountry:()=>{},
    handleGeography:()=>{},
    handleComment:()=>{},
    handlePolicy:()=>{},
    handleGeographyOnLoad:()=>{},
    handleIndustryonLoad:()=>{},
    handleCountry:()=>{},
    onSubmit:()=>{},
    hideModal:()=>{}

    

})
 
export default Context;