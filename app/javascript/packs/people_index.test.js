import React from "react"
import { PeopleIndex } from "./people_index"
import { render, screen, waitFor } from "@testing-library/react"
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils"

describe("people index", () => {
  it("displays a table of people if the query succeeds", async () => {
    const environment = createMockEnvironment()

    render(<PeopleIndex environment={environment} />)

    await waitFor(() => {
      environment.mock.resolveMostRecentOperation(operation =>
        MockPayloadGenerator.generate(operation)
      )
    })

    expect(screen.queryByRole("table")).toBeTruthy()
  })

  it("displays an error message if the query fails", async () => {
    const environment = createMockEnvironment()

    render(<PeopleIndex environment={environment} />)

    await waitFor(() => {
      environment.mock.rejectMostRecentOperation(new Error("An error occurred"))
    })

    expect(screen.getByRole("alert").textContent).toEqual("Error!")
  })
})
