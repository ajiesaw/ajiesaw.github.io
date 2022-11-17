export default function Navbar() {
  return (
    <div className=" flex justify-between ">
      <button className=" text-white text-3xl ">AjieSAW</button>
      <ul className=" flex text-white items-center gap-x-10 ">
        <button className=" hover:text-indigo-500 duration-100 ">Home</button>
        <button className=" hover:text-indigo-500 duration-100 ">Music</button>
        <button className=" hover:text-indigo-500 duration-100 ">Photography</button>
        <button className=" hover:text-indigo-500 duration-100 ">Programming</button>
      </ul>
      <label className=' flex gap-x-1 '>
        <input
          type='text'
          placeholder='Search...'
          className=' text-slate-900 h-4/5 px-2 bg-white border rounded-md border-gray-300 focus:outline-none focus:border-sky-500'
        />
        <button className="text-white bg-indigo-700 font-bold h-4/5 px-2 rounded-md hover:bg-indigo-600 duration-100 active:bg-indigo-800">Search</button>
    </label>
    </div>
  )
}