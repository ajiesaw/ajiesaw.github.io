export default function Navbar() {
  return (
    <div className=" flex justify-between ">
      <div className=" text-white text-3xl ">
        <button className=" sm:hidden pr-3 ">⌘</button>
        <button>AjieSAW</button>
      </div>
      <ul className=" hidden sm:flex text-white items-center px-10 gap-x-5 md:gap-x-10 ">
        <button className=" hover:text-indigo-500 duration-100 hidden md:flex ">Home</button>
        <button className=" hover:text-indigo-500 duration-100 ">Music</button>
        <button className=" hover:text-indigo-500 duration-100 ">Photography</button>
        <button className=" hover:text-indigo-500 duration-100 ">Programming</button>
      </ul>
      <label className=' flex gap-x-1 items-center justify-end '>
        <input
          type='text'
          placeholder='Search...'
          className=' text-slate-900 w-1/2 sm:w-full h-4/5 px-2 bg-white border rounded-md border-gray-300 focus:outline-none focus:border-sky-500'
        />
        <button className="text-white bg-indigo-700 font-bold h-4/5 px-2 rounded-md hover:bg-indigo-600 duration-100 active:bg-indigo-800">Search</button>
    </label>
    </div>
  )
}