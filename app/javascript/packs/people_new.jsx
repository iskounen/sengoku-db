import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const PersonSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  birth: Yup.string().required('Required'),
  death: Yup.string().required('Required')
})

const PeopleNew = () => (
  <div>
    <h1>People</h1>
    <h2>New</h2>

    <Formik
      initialValues={{ name: '', birth: '', death: '' }}
      validationSchema={PersonSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
     >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label for="name">Name</label>
            <Field type="text" name="name" id="name" />
            <div>
              <ErrorMessage name="name" component="div" />
            </div>
          </div>
          <div>
            <label for="birth">Birth</label>
            <Field type="date" name="birth" id="birth" />
            <div>
              <ErrorMessage name="birth" component="div" />
            </div>
          </div>
          <div>
            <label for="death">Death</label>
            <Field type="date" name="death" id="death" />
            <div>
              <ErrorMessage name="death" component="div" />
            </div>
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PeopleNew />,
    document.body.appendChild(document.createElement('div')),
  )
})