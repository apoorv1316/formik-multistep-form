import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

function QualificationDetails({ activePage, nextForm }) {
  const initialValues = {
    school: "",
    college: "",
  };
  const onSubmit = (values) => console.log("form value", values);

  const isNextButtonVisibile = (errors, values) =>
    !errors.school && !errors.college && values.school && values.college;

  const validationSchema = Yup.object({
    school: Yup.string()
      .min(6, "Must be atleast 6 characters or more")
      .required("Required Field"),
    college: Yup.string()
      .min(6, "Must be atleast 6 characters or more")
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
            id="school"
            label="School"
            variant="outlined"
            name="school"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.school}
          />
          {formik.touched.school && formik.errors.school ? (
            <div className="error">{formik.errors.school}</div>
          ) : null}
          <TextField
            id="college"
            label="College"
            type="email"
            variant="outlined"
            name="college"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.college}
          />
          {formik.touched.college && formik.errors.college ? (
            <div className="error">{formik.errors.college}</div>
          ) : null}
        </FormControl>
        <div>
          {isNextButtonVisibile(formik.errors, formik.values) && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => alert("Form submitted")}
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default QualificationDetails;
