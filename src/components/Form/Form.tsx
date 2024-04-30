const Form = () => {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          className="px-2 py-1 rounded-md border border-gray-300 outline-none"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
      </div>

      <div className=" flex flex-col  ">
        <label htmlFor="email">Email</label>
        <input
          className="px-2 py-1 rounded-md border border-gray-300 outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex justify-between mt-1">
        <div className="flex gap-1">
          <input
            type="checkbox"
            id="terms"
            name="terms"
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
