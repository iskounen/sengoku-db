import React from 'react'
import { PeopleNew, PersonSchema } from './people_new'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
import { ValidationError } from 'yup'

describe('person form', () => {
  it('displays the name of the created person if the mutation succeeds', async () => {
    const environment = createMockEnvironment()

    render(<PeopleNew environment={environment} />)

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: '山田太郎' } })
    fireEvent.change(screen.getByLabelText('Birth'), { target: { value: '1500-01-01' } })
    fireEvent.change(screen.getByLabelText('Death'), { target: { value: '1550-12-31' } })

    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      environment.mock.resolveMostRecentOperation(operation =>
        MockPayloadGenerator.generate(operation)
      )
    })

    expect(screen.getByRole('alert').textContent).toEqual('<mock-value-for-field-\"name\">')
  })

  it('displays an error message if the mutation fails', async () => {
    const environment = createMockEnvironment()

    render(<PeopleNew environment={environment} />)

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: '織田信長' } })
    fireEvent.change(screen.getByLabelText('Birth'), { target: { value: '1534-06-23' } })
    fireEvent.change(screen.getByLabelText('Death'), { target: { value: '1582-06-21' } })

    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      environment.mock.rejectMostRecentOperation(new Error('An error occurred'))
    })

    expect(screen.getByRole('alert').textContent).toEqual('An error occurred')
  })
})

describe('person validation', () => {
  let person

  beforeEach(() => {
    person = {
      'name': '織田信長',
      'birth': '1534-06-23',
      'death': '1582-06-21'
    }
  })

  it('fails validation if name is blank', () => {
    person.name = ''
    expect(() => PersonSchema.validateSync(person)).toThrow('name required')
  })

  it('fails validation if birth date is blank', () => {
    person.birth = ''
    expect(() => PersonSchema.validateSync(person)).toThrow('birth date required')
  })

  it('fails validation if death date is blank', () => {
    person.death = ''
    expect(() => PersonSchema.validateSync(person)).toThrow('death date required')
  })
})
