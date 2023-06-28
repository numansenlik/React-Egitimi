import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Formik, Field, Form, useFormik } from 'formik';
function Contact() {
  return (

<div>
    <h1>İletişim</h1>
    <Formik
        //  Başlangıç değerleri 
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }}
      onSubmit={(values) => {
        // Girilen değerleri obje olarak çeker
        console.log(values);
      }}
    >
      <Form className='form'>
        <div>
           {/* html deki formu render eder */}
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        {/* İnput ama normal imput kullansaydın native davranısı var her tıklandığında sayfa yenileniyor  Field de bu yok   */}
        </div>
        <div>
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        </div>
        <div>
        <label>Message</label>
        <Field
          as="textarea"
          id="message"
          name="message"
          placeholder="Your message...."
        />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
  )
}

export default Contact