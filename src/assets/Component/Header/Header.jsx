
const Header = () => {
    return (
        <div className="flex justify-between items-center mt-5 px-4">

        <div>
          <h1 className="lg:text-3xl text-2xl lg:font-extrabold font-semibold">Recipe Calories</h1>
        </div>

        <div className="lg:flex lg:justify-center hidden">
            <ul className="flex items-center gap-5">
                <li><a href="#">Home</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Search</a></li>
            </ul>
        </div>

        <div>

            <div className="flex items-center gap-3">
            <input type="text"  placeholder="Search" className="input hidden lg:block input-bordered w-24 md:w-auto" />
            <img className="w-12 rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
       
       
      </div>
    );
};

export default Header;