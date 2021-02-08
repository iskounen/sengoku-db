import React from 'react'
import { PeopleNew } from './people_new'
import { render, screen } from '@testing-library/react'

describe(PeopleNew, () => {
  it('has a submit button', () => {
    render(<PeopleNew />)

    expect(screen.getByRole('button').textContent).toEqual('Submit')
  })
})