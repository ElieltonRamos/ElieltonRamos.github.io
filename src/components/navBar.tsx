function NavBar() {
  return (
    <nav className="w-60 md:w-1/2 absolute top-0 mt-10 right-[-10px]">

      <button className="button text-[10px] md:text-xl font-bold">
        Home
      </button>

      <button className="button text-[10px] md:text-xl font-bold">
        About
      </button>

      <button className="button text-[10px] md:text-xl font-bold">
        Projects
      </button>

      <button className="button text-[10px] md:text-xl font-bold">
        Contacts
      </button>

    </nav>
  )
}

export default NavBar;