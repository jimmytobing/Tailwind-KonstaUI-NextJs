function Atas() {
  return (
    <div
      class="realtive sticky top-0  h-36 w-full rounded-b-3xl bg-center cursor-pointer object-cover z-10 shadow-lg"
      style="background: linear-gradient(45deg,#b39244,#f6e2b1);"
    >
      <nav class="p-2 flex flex-grow relative justify-between z-10 items-center mx-auto h-18">
        <div class="inline relative">
          <button
            type="button"
            class="inline-flex items-center relative text-stone-900 hover:text-amber-300 mr-3"
            onclick="location.href='https://jimmytobing.github.io/corono/apk/corono.apk';"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            </svg>
          </button>
        </div>

        <div class="flex-initial">
          <div class="relative flex items-center justify-end">
            <div class="relative inline">
              <div class="block flex-shrink-0 flex-grow-0">
                <img
                  class="h-8 w-8 rounded-xl border border-stone-900 shadow"
                  src="https://images.unsplash.com/photo-1554555819-f722cb0c01c5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=80&amp;h=80"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="flex w-full flex-col rounded-lg px-3">
        <h4 class="truncate text-xl font-semibold leading-tight text-stone-900">
          Jimmy Tobing
        </h4>
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <h2 class="flex items-center text-sm font-normal text-stone-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Mall Kelapa Gading 3
            </h2>
          </div>
        </div>
      </div>

      <div class="z-10 mt-3 flex items-center justify-between px-3">
        <div class="relative w-full">
          <input
            type="text"
            class="w-full rounded-xl border-0 bg-stone-900 p-3 text-amber-300 drop-shadow-md placeholder:text-amber-100"
            placeholder="Cari Tag di sekitarmu ..."
          />
          <div class="absolute top-0 right-0 p-4 pr-3 text-amber-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
        </div>
      </div>
    </div>
  );
}

export default Atas;
