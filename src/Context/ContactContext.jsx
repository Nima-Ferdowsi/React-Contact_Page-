import React, { useState } from "react";
import Context from "./Context";

const Contact = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("US");
  const [geography, setGeography] = useState("");
  const [comment, setComment] = useState("");
  /*did he accept the policy or not */
  const [policy, setPolicy] = useState(false);
  /*   should modal be visible or not*/
  const [showModal, setshowModal] = useState(false);
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setemail(e.target.value);
    console.log(email);
  };
  const handleJob = (e) => {
    setJob(e.target.value);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleIndustry = (e) => {
    setIndustry(e.target.value);
  };
  //get industry from select after component mount
  const handleIndustryonLoad = (value) => {
    setIndustry(value);
  };
 

  const handleGeography = (e) => {
    setGeography(e.target.value);
  };
  //get Geography from select after component mount

  const handleGeographyOnLoad = (value) => {
    setGeography(value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handlePolicy = (e) => {
    setPolicy(!policy);
  };
  const handleCountry = (value) => {
    setCountry(value);
    console.log(country);
  };
  //reset values to cleare form after submit
  const Reset = () => {
    setFirstName("");
    setLastName("");
    setemail("");
    setJob("");
    setCompany("");
    setComment("");
    setPolicy(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setshowModal(true);
  };
  const hideModal = () => {
    setshowModal(false);
    Reset();
  };
/*   return true and false base on if all states get filled or not*/ 
   const isFormValid =
    firstName &&
    lastName &&
    email &&
    job &&
    company &&
    industry &&
    company &&
    geography &&
    comment &&
    policy;
    /*put all states and functions in object to pass them easily in context.provider*/
  let states = {
    firstName,
    lastName,
    email,
    job,
    company,
    industry,
    country,
    geography,
    comment,
    policy,
    isFormValid,
    showModal,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleJob,
    handleCompany,
    handleIndustry,
    handleCountry,
    handleGeography,
    handleComment,
    handlePolicy,
    handleGeographyOnLoad,
    handleIndustryonLoad,
    handleCountry,
    onSubmit,
    hideModal,
  };
  return <Context.Provider value={states}>{children}</Context.Provider>;
};

export default Contact;
