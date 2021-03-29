import React, { useContext, useEffect, useRef } from "react";
import Context from "../Context/Context";
import ReactFlagsSelect from "react-flags-select";

const Form = () => {
  const context = useContext(Context);
  const geoRef = useRef(null);
  const industryRef = useRef(null);
  const {
    firstName,
    lastName,
    email,
    job,
    company,
    country,
    comment,
    policy,
    isFormValid,
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
  } = context;
  useEffect(() => {
    handleGeographyOnLoad(geoRef.current.value);
    handleIndustryonLoad(industryRef.current.value);
  }, []);
  return (
    <form onSubmit={(e) => context.onSubmit(e)}>
      <h1>CONTACT US</h1>
      <div className="form-container">
        <div className="form-group col-lg-6">
          <label for="firstName">First Name*</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={firstName}
            onChange={(e) => {
              handleFirstName(e);
            }}
          />
        </div>
        <div className="form-group col-lg-6">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            className="form-control"
            onChange={(e) => {
              handleLastName(e);
            }}
          />
        </div>
        <div className="form-group col-lg-6">
          <label for="email">Email* </label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            onChange={(e) => {
              handleEmail(e);
            }}
          />
        </div>
        <div className="form-group col-lg-6">
          <label for="job">Job Title</label>
          <input
            type="text"
            name="job"
            value={job}
            className="form-control"
            onChange={(e) => {
              handleJob(e);
            }}
          />
        </div>
        <div className="form-group col-lg-6">
          <label for="company">Company*</label>
          <input
            type="text"
            name="company"
            value={company}
            className="form-control"
            onChange={(e) => {
              handleCompany(e);
            }}
          />
        </div>
        <div className="form-group col-lg-6">
          <label for="industry">Industry*</label>
          <select
            name="industry"
            className="form-control"
            onChange={(e) => handleIndustry(e)}
            ref={industryRef}
          >
            <option value={"banking"}>Banking</option>
            <option value={"health"}>Health</option>
            <option value={"finance"}>Finance</option>
          </select>
        </div>
        <div className="form-group col-lg-6">
          <label for="Countrty">Countrty*</label>

          <ReactFlagsSelect
            onSelect={(code) => handleCountry(code)}
            selected={country}
            countries={["US", "GB", "FR", "DE", "IT"]}
            customLabels={{
              US: "USA",
              GB: "ENGLAND",
              FR: "FRANCE",
              DE: "DENMARK",
              IT: "ITALY",
            }}
            placeholder="Select Language"
          />
        </div>
        <div className="form-group col-lg-6">
          <label for="geography">Geography</label>
          <select
            type="text"
            name="geography"
            className="form-control"
            onChange={(e) => handleGeography(e)}
            ref={geoRef}
          >
            <option value={"national"}>National</option>
            <option value={"regional"}>Regional</option>
            <option value={"global"}>Global</option>
          </select>
        </div>
        <div className="form-group comment">
          <label for="comment">Comment*</label>
          <textarea
            name="comment"
            className="form-control"
            value={comment}
            onChange={(e) => {
              handleComment(e);
            }}
          />
        </div>
      </div>
      <div className="privacy">
        <div className="privacy-items">
          <input
            type="checkbox"
            name="privacy"
            checked={policy}
            onChange={handlePolicy}
          />
          <label for="privacy">
            By submitting this form I accept{" "}
            <span>privacy policy and cookie policy.</span>
          </label>
        </div>
        <div className="privacy-items">
          <input type="checkbox" name="news" />
          <label for="news">
I would like to receive your newsletter.</label>
        </div>
      </div>

      <div className="news"></div>
      <button disabled={!isFormValid}>Send</button>
    </form>
  );
};

export default Form;
