import React from "react"
import ReactDOM from "react-dom"
import { graphql, QueryRenderer } from "react-relay"
import environment from "./relay_environment"

export const PeopleIndex = (props) => (
  <div>
    <h1>People</h1>
    <h2>Index</h2>

    <QueryRenderer
      environment={props.environment}
      query={graphql`
        query peopleIndexQuery {
          people {
            id
            name
            birth
            death
          }
        }
      `}
      variables={{}}
      render={({error, props}) => {
        if (error) {
          return <div role="alert">Error!</div>
        }
        if (!props) {
          return <div>Loading...</div>
        }
        return (
          <table>
            <thead>
              <tr><th>Name</th><th>Birth</th><th>Death</th></tr>
            </thead>
            <tbody>
              { props.people.map(person => <tr key={person.id}><td>{person.name}</td><td>{person.birth}</td><td>{person.death}</td></tr>) }
            </tbody>
            <tfoot><tr><td>Total</td><td>{props.people.length}</td></tr></tfoot>
          </table>
        )
      }}
    />
  </div>
)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <PeopleIndex environment={environment} />,
    document.body.appendChild(document.createElement("div")),
  )
})