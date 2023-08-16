const MailList = () => {
  return (
    <div className="bg-blue-400 text-white w-full max-w-screen-3xl flex flex-col items-center gap-4 p-10">
      <h1 className="text-3xl">Save time, save money !!</h1>
      <span className="mt-2">
        Sign up and we&apos; ll send the best deals to you
      </span>
      <div className="flex">
        <input
          type="text"
          placeholder="Your email"
          className="mr-4 w-80 p-4 border-none rounded-md my-2"
        />
        <button className="bg-pink-600 font-semibold w-30 my-2 p-4 rounded-md cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailList;
