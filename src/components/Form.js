import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  SubscribeForm,
  InputBox,
  HorizontalForm,
  InputError,
  Button
} from "./styles";

export default function () {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(100, 'This name is too long')
        .min(3, 'Please enter your Full name')
        .required('Your name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email address is required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <SubscribeForm>
      <form onSubmit={formik.handleSubmit}>
        <HorizontalForm>
          <InputBox className="left">
            <input
              id="fullname"
              name="fullname"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
              placeholder="Your Full Name"
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <InputError>{formik.errors.fullname}</InputError>
            )}
          </InputBox>

          <InputBox className="right">
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email Address"
            />
            {formik.touched.email && formik.errors.email && (
              <InputError>{formik.errors.email}</InputError>
            )}
          </InputBox>
        </HorizontalForm>

        <Button type="submit">Notify Me</Button>
      </form>
    </SubscribeForm>
  )
}
