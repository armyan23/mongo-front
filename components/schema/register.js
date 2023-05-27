import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  dateOfBirthday: "",
  password: "",
  confirmPassword: "",
  gender: "",
  photo: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  dateOfBirthday: Yup.date().required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  gender: Yup.string().optional("", null),
});
