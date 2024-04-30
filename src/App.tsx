import Form from './components/Form/Form'

function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-white">Subscribe</h1>

      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Form />
      </div>

      <p className="text-slate-100 w-96 mt-2 text-center ">
        Subscribe to our newsletter and get the latest news and updates.
      </p>
    </div>
  )
}

export default App
