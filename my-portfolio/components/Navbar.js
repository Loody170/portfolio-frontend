const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800">
      <a href="/">
        <h1 className="text-white text-2xl font-bold">Khalid Sharafaldeen</h1>
      </a>{" "}
      <div className="flex space-x-4">
        <a href="/about" className="text-white hover:underline font-bold">
          About
        </a>
        <a href="/skills" className="text-white hover:underline font-bold">
          Skills
        </a>
        <a href="/projects" className="text-white hover:underline font-bold">
          Porjects
        </a>
      </div>
    </nav>
  );
};
export default Navbar;