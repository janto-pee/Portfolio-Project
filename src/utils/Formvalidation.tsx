import * as Yup from "yup";

export interface FormValues {
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    message: string
}

export const validationSchema = Yup.object({
  firstname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  subject: Yup.string()
    .min(2, "Must be at least 2 characters long ")
    .max(100, "Must be 15 characters or less")
    .required("Required"),
  message: Yup.string()
  .min(2, "Must be at least 2 characters long")
    .max(250, "Must be 20 characters or less")
    .required("Required"),
});
