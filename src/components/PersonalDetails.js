import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

function PersonalDetails({ activePage, nextForm }) {
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
  };
  const onSubmit = (values) => console.log("form value", values);

  const isNextButtonVisibile = (errors, values) =>
    !errors.firstName &&
    !errors.lastName &&
    !errors.address &&
    !errors.city &&
    !errors.zipCode &&
    values.lastName &&
    values.firstName &&
    values.address &&
    values.city &&
    values.zipCode;

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(6, "Must be atleast 6 characters or more")
      .required("Required Field"),
    lastName: Yup.string()
      .min(6, "Must be atleast 6 characters or more")
      .required("Required field"),
    address: Yup.string()
      .min(6, "Must be atleast 6 characters or more")
      .required("Required field"),
    city: Yup.string().required("Required field"),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/, "Enter valid zip code")
      .min(6, "Zip Code must be of 6 digits ")
      .required("Required field"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} noValidate>
        <FormControl>
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="error">{formik.errors.address}</div>
          ) : null}
          <TextField
            id="city"
            label="City"
            variant="outlined"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="error">{formik.errors.city}</div>
          ) : null}
          <TextField
            id="zipCode"
            label="Zip Code"
            variant="outlined"
            name="zipCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipCode}
          />
          {formik.touched.zipCode && formik.errors.zipCode ? (
            <div className="error">{formik.errors.zipCode}</div>
          ) : null}
        </FormControl>
        <div>
          {isNextButtonVisibile(formik.errors, formik.values) && (
            <Button variant="contained" color="primary" onClick={nextForm}>
              Next
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
