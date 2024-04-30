import { User } from '../types/User'

export type Error = {
  [key: string]: string
}

export const validateUser = (user: User) => {
  const errors: Error = {}

  if (!user.name) {
    errors.name = 'Name is required'
  }

  if (!user.email) {
    errors.email = 'Email is required'
  }

  if (!user.terms) {
    errors.terms = 'You must agree to the terms'
  }

  return errors
}
