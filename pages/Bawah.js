const Bawah = () => {
  return (
    <div className="fixed shadow-3xl sticky bottom-2 m-2 flex cursor-pointer items-center justify-between rounded-2xl bg-stone-900 p-5 px-6 text-amber-300">
      <div className="flex flex-col items-center transition duration-200 ease-in hover:text-amber-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col items-center transition duration-200 ease-in hover:text-amber-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col items-center">
        <div className="absolute bottom-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-stone-900 bg-gradient-to-t from-yellow-600 to-yellow-100 p-2 text-center text-3xl text-stone-900 shadow-2xl transition duration-200 ease-in hover:border-amber-200">
          <i className="fas fa-hand-holding-magic"></i>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full border-4 opacity-50"></span>
        </div>
      </div>
      <div className="flex flex-col items-center transition duration-200 ease-in hover:text-amber-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col items-center transition duration-200 ease-in hover:text-amber-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Bawah;
