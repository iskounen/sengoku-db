import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { commitMutation, graphql } from 'react-relay'
import environment from './relay_environment'

const PersonSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  birth: Yup.string().required('Required'),
  death: Yup.string().required('Required')
})

export const PeopleNew = (props) => (
  <div>
    <h1>People</h1>
    <h2>New</h2>

    <Formik
      initialValues={{ name: '', birth: '', death: '' }}
      validationSchema={PersonSchema}
      onSubmit={(values, actions) => {
        commitMutation(props.environment, {
          mutation: graphql`
            mutation peopleNewMutation($name: String!, $birth: ISO8601Date!, $death: ISO8601Date!) {
              createPerson(input: {
                name: $name, birth: $birth, death: $death
              }) {
                person {
                  id
                  name
                  birth
                  death
                }
              }
            }
          `,
          variables: {
            name: values.name,
            birth: values.birth,
            death: values.death
          },
          onCompleted: (response, errors) => {
            actions.setSubmitting(false)
            if (errors) {
              actions.setStatus(errors.map(e => e.message))
            } else {
              actions.setStatus([response.createPerson.person.name])
            }
          },
          onError: error => {
            actions.setSubmitting(false)
            actions.setStatus([error.message])
          }
        })
      }}
     >
      {({ isSubmitting, status }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <div>
              <ErrorMessage name="name" component="div" />
            </div>
          </div>
          <div>
            <label htmlFor="birth">Birth</label>
            <Field type="date" name="birth" id="birth" />
            <div>
              <ErrorMessage name="birth" component="div" />
            </div>
          </div>
          <div>
            <label htmlFor="death">Death</label>
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
          {status && <div role="alert"><ul>{status.map((item, index) => <li key={index}>{item}</li>)}</ul></div>}
        </Form>
      )}
    </Formik>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PeopleNew environment={environment} />,
    document.body.appendChild(document.createElement('div')),
  )
})