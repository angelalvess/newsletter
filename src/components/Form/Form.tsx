import { useState, FormEvent } from 'react'
import { User } from '../../types/User'
import { validateUser } from '../../utils/validate'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [terms, setTerms] = useState(false)
  const [error, setError] = useState<User | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setError(null)
    const user: User = {
      name,
      email,
      terms,
    }

    const validateError = validateUser(user)

    if (Object.keys(validateError).length > 0) {
      setError(validateError)
      return
    }

    setName('')
    setEmail('')
    setTerms(false)

    alert('Form submitted successfully 🎉 ')
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          className="px-2 py-1 rounded-md border border-gray-300 outline-none"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter your name"
        />
      </div>
      {error?.name && (
        <p className="text-red-500 mt-1  text-sm">{error.name}</p>
      )}

      <div className=" flex flex-col  ">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-2 py-1 rounded-md border border-gray-300 outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      {error?.email && (
        <p className="text-red-500 mt-1  text-sm">{error.email}</p>
      )}

      <div className="flex justify-between mt-1">
        <div className="flex gap-1">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            className="cursor-pointer"
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-600 cursor-pointer"
          >
            I agree to the terms
          </label>
        </div>
        <a
          className="text-blue-600 text-sm underline hover:text-blue-700"
          href="#"
        >
          Read the terms
        </a>
      </div>

      {error?.terms && (
        <p className="text-red-500 mt-1 text-sm">{error.terms}</p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold mt-2 px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Subscribe
      </button>
    </form>
  )
}

export default Form
