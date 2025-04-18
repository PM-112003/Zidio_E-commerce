import * as yup from "yup";

const signup_schema = yup.object().shape({
  username: yup.string().required("required field"),
  email: yup.string().required("field required").email("invalid email format"),
  password: yup
    .string()
    .required("field required")
    .min(6, "min 6 chars required"),
  confirm_password: yup
    .string()
    .required("field required")
    .oneOf([yup.ref("password")], "password not matching"),
});

export default signup_schema;
