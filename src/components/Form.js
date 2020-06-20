import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocalStorage } from "../hooks";
import {
  SubscribeForm,
  InputBox,
  HorizontalForm,
  InputError,
  Button,
  SuccessMessage
} from "./styles";
import check from "./check.svg";

export default function () {
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useLocalStorage(
    "ajabu_launch_notification", false
  );

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
    onSubmit: (data) => {
      setLoading(true);
      fetch("https://us-central1-influx-dm.cloudfunctions.net/ajabu-subscribe", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          setSubscribed(true);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        })
    },
  });

  if (subscribed) {
    return (
      <SuccessMessage>
        <img src={check} alt="" />
        <span>You are subscribed. We will notify you when we launch</span>
      </SuccessMessage>
    )
  }

  return (
    <SubscribeForm>
      <h3>Get notified when we launch</h3>
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

          <Button type="submit" disabled={loading}>
            {loading && "Please Wait..."}
            {!loading && "Notify Me"}
          </Button>
        </HorizontalForm>
      </form>

    </SubscribeForm>
  )
}
