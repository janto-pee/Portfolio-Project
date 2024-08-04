import { FormValues, validationSchema } from "../../utils/Formvalidation";
import { Field, Formik, FormikHelpers, FormikValues } from "formik";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const initialValues: FormValues = {
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false)
      toast("form submitted successfully!")
    });
  };
  return (
    <div className="w-full space-y-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          values,
          touched,
          handleChange,
          handleBlur,
          errors,
        }) => (
          <form className="mt-4 space-y-6 w-full text-start">
            {/* firstname */}
            <div className="flex flex-col lg:flex-row items-center gap-4 text-left">
              <div className="w-full space-y-4">
                <label htmlFor="firstname" className="text-red-500">
                  <span className="text-neutral-400 mr-2">FIRST NAME</span>
                  {touched.firstname && errors.firstname}
                </label>
                <Field
                  type="text"
                  name="firstname"
                  className="p-4 rounded-md bg-black w-full text-primary-200"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                />
              </div>
            </div>
            {/* lastname */}
            <div className="flex flex-col lg:flex-row items-center gap-4 text-left">
              <div className="w-full space-y-4">
                <label htmlFor="lastname" className="text-red-500">
                  <span className="text-neutral-400 mr-2">LAST NAME</span>
                  {touched.lastname && errors.lastname}
                </label>
                <Field
                  type="text"
                  name="lastname"
                  className="p-4 rounded-md bg-black w-full text-primary-200"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />
              </div>
            </div>
            {/* email */}
            <div className="flex flex-col lg:flex-row items-center gap-4 text-left">
              <div className="w-full space-y-4">
                <label htmlFor="email" className="text-red-400">
                  <span className="text-neutral-400 mr-2">EMAIL</span>
                  {touched.email && errors.email}
                </label>
                <Field
                  type="email"
                  name="email"
                  className="p-4 rounded-md bg-black w-full text-primary-200"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
            </div>
            {/* subject */}
            <div className="flex flex-col lg:flex-row items-center gap-4 text-left">
              <div className="w-full space-y-4">
                <label htmlFor="subject" className="text-red-400">
                  <span className="text-neutral-400 mr-2">SUBJECT</span>
                  {touched.subject && errors.subject}
                </label>
                <Field
                  type="text"
                  name="subject"
                  className="p-4 rounded-md bg-black w-full text-primary-200"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                />
              </div>
            </div>
            {/* message */}
            <div className="flex flex-col lg:flex-row items-center gap-4 text-left">
              <div className="w-full space-y-4">
                <label htmlFor="message" className="text-red-400">
                  <span className="text-neutral-400 mr-2">SUBJECT</span>
                  {touched.message && errors.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={7}
                  className="p-4 rounded-md bg-black w-full text-primary-200"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                ></textarea>
              </div>
            </div>

            <input disabled={isSubmitting} type="submit" className="px-6 py-4 text-lg text-gray-200 bg-secondary-600 rounded-md w-full" />
            <ToastContainer />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
