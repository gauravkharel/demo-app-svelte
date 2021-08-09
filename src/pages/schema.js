import * as yup from "yup";

const schema = yup.object().shape({
  fullname: yup
    .string()
    .required("Fullname is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email is invalid")
});

export default schema;