const Footer = () => {
  return (
    <div className="hidden bg-[#0b0b1f] mt-4 lg:h-screen lg:block">
      <section className="bg-white  flex flex-col py-4 justify-center items-center font-semibold text-md text-black">
        <hr />
        <div className="">See personalized recommendations</div>
        <button className="bg-[hsl(45,100%,68%)] font-bold rounded-md shadow-md p-1 w-60">
          Sign in
        </button>
        <span>
          New customer? <a href="#">Start here.</a>
        </span>
        <hr />
      </section>

      <header className="py-3 font-semibold bg-[#18182c] text-center">
        <a href="#" className="text-white ">
          Back to top
        </a>
      </header>
      <section className=" items-center justify-center">
        <div className="text-white flex justify-around py-5 text-md flex-row">
          <ol className=" my-2 ">
            <span className="font-bold text-md text-2xl ">Get to Know Us</span>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Careers
            </li>
            <li className="item12 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Blog
            </li>
            <li className="item13 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              About Amazon
            </li>
            <li className="item14 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Invest Relations
            </li>
            <li className="item15 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Amazon Devices
            </li>
            <li className="item16 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Amazon Science
            </li>
            <li className="item17 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer"></li>
          </ol>

          <ol>
            <span className="font-bold py-5 text-xl">Make Money with Us</span>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Sell products on Amazon
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Sell on Amazon Business
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Sell apps on Amazon
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Become an affiliate
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Advertise You products
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Self-Publish with Us
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Host an Amazon Hub
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              See More Make Money with Us
            </li>
          </ol>

          <ol className=" my-2 ">
            <span className="font-bold py-5 text-2xl">
              Amazon Payment Products
            </span>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Amazon Business Card
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Shop with Points
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Reload Your Balance
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Amazon Currency converter
            </li>
          </ol>

          <ol className=" my-2 ">
            <span className="font-bold py-5 text-2xl">Let Us Help You</span>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Amazon and COVID-19
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Your Account
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Your Orders
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Shipping Rates & Policies
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Returns & Replacements
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Manage Your Content & Devices
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Amazon Assistant
            </li>
            <li className="item11 h-8 hover:bg-[#18182f] px-2 py-1 cursor-pointer">
              Help
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-[#18182c] h-96 text-white"></section>
    </div>
  );
};

export default Footer;
