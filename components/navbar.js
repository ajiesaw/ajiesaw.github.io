export default function Navbar() {
  return (
    <div className=" flex justify-between ">
      <div className=" text-white text-3xl ">AjieSAW</div>
      <ul className=" flex text-white items-center ">
        <li>Home</li>
        <li>Music</li>
        <li>Photography</li>
        <li>Programming</li>
      </ul>
      <label className=' flex gap-x-1 '>
        <input
          type='text'
          placeholder='Search...'
          className=' text-slate-900 h-4/5 px-2 bg-white border rounded-md border-gray-300 focus:outline-none focus:border-sky-500'
        />
        <button className="text-white bg-indigo-700 font-bold h-4/5 px-3 rounded-md hover:bg-indigo-600 active:bg-indigo-800">Search</button>
    </label>
    </div>
  )
}