

const Homecontact = () => {
  return (
    <>
      <div className="bg-primary py-10 text-white lg:py-20">
        <div className="flex flex-col text-center px-4 space-y-5 lg:justify-center lg:items-center">
          <div className="space-y-4">
            <p className="text-white font-medium">MY CONTACT</p>
            <p className="font-semibold text-3xl text-white lg:text-4xl">
              Contact <span className="text-secondary">Me Here</span>
            </p>
          </div>
          <form className="space-y-6 lg:w-1/2" action="">
            <div className="flex flex-col space-y-3">
              <label className="text-left text-gray-300">Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-3 bg-primary border border-gray-400 rounded-md focus:outline-none text-gray-300"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-left text-gray-300">Email:</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-3 bg-primary border border-gray-400 rounded-md  focus:outline-none text-gray-300"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-left text-gray-300">Message:</label>
              <textarea
                className="px-4 py-3 bg-primary border border-gray-400 rounded-md  focus:outline-none text-gray-300"
                placeholder="Enter your message"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <button className="bg-primary text-white border border-gray-400 rounded-md px-6 py-4 font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Homecontact;
