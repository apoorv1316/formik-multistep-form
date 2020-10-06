import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

function BasicDetails({ activePage, nextForm }) {
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    bio: "",
  };

  const onSubmit = (values) => console.log("form value", values);
  const isNextButtonVisibile = (errors, values) =>
    !errors.username &&
    !errors.email &&
    !errors.phone &&
    !errors.bio &&
    values.username &&
    values.email &&
    values.phone &&
    values.bio;

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(6, "Must be atleast 6 characters or more")
      .matches(/^[a-z]+$/, "Only lowercase aplhabets are allowed")
      .required("Required Field"),
    email: Yup.string()
      .email("Enter valid email-id")
      .required("Required field"),
    phone: Yup.string()
      .matches(
        /^[7-9][0-9]{9}$/,
        "Phone number must be of 10 digits and start from 9 or 8 or 7"
      )
      .required("Required field"),
    bio: Yup.string().min(2, "Must be atleast 2 characters"),
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
            id="username"
            label="User Name"
            variant="outlined"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="error">{formik.errors.username}</div>
          ) : null}
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <TextField
            id="phone"
            label="Phone No."
            variant="outlined"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
          <TextField
            id="bio"
            label="bio"
            variant="outlined"
            name="bio"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bio}
          />
          {formik.touched.bio && formik.errors.bio ? (
            <div className="error">{formik.errors.bio}</div>
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

export default BasicDetails;
