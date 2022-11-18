import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className=" border-t-2 border-slate-800 "></div>
      <p className=" text-white flex justify-center pt-5 ">
        ©&nbsp;{year}&nbsp;<Link className=" hover:text-indigo-500 active:text-indigo-800 duration-100 " href={'https://github.com/ajiesaw'}>AjieSAW</Link>
      </p>
    </>
  )
}