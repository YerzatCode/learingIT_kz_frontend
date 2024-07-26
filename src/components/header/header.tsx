"use client"

function Header() {
  const isAuth = false
  return (
    <div className="text-2xl bg-slate-100 mt-8 py-2 px-5 max-w-[1440px] text-black rounded-sm flex justify-between">
      <div className="flex font-bold">Logo</div>
      <ul className="flex gap-x-8 text-lg items-center">
        <li>
          <a href="#" className="hover:text-red-400 duration-200">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-400 duration-200">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-400 duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-400 duration-200">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex gap-1 text-xl font-bold">
        {isAuth ? (
          <button
            onClick={() => console.log("Click")}
            className="border-2 px-2 py-1 rounded-md border-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 duration-200">
            Log out
          </button>
        ) : (
          <>
            <button
              onClick={() => console.log("Click")}
              className="border-2 px-3 py-1 rounded-md border-gray-400 border- hover:text-red-500 hover:border-red-500 duration-200">
              Sign up
            </button>
            <button
              onClick={() => console.log("Click")}
              className="border-2 px-3 py-1 rounded-md  text-white bg-gray-500 hover:bg-red-500 duration-200">
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
