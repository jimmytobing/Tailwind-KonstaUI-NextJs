export default function Tengah() {
  return (
    <div class="z-0 space-y-4 p-3">
      <h4 class="mt-2 font-semibold drop-shadow">
        Spot <span class="text-yellow-600">Category</span>
      </h4>
      <div class="flex cursor-pointer items-center justify-between space-x-3 overflow-y-scroll text-gray-500">
        <div class="mb-2 flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-2xl bg-green-200 p-1 text-green-600 shadow transition duration-300 ease-in hover:drop-shadow-md">
          <i class="fas fa-utensils-alt"></i>
          <p class="mt-1 text-sm">Dining</p>
        </div>
        <div class="mb-2 flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-2xl bg-amber-200 p-1 text-yellow-600 shadow transition duration-300 ease-in hover:drop-shadow-md">
          <i class="fas fa-car"></i>
          <p class="mt-1 text-sm">Parking</p>
        </div>
        <div class="mb-2 flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-2xl bg-indigo-200 p-1 text-indigo-500 shadow transition duration-300 ease-in hover:drop-shadow-md">
          <i class="fad fa-toilet"></i>
          <p class="mt-1 text-sm">Toilet</p>
        </div>
        <div class="mb-2 flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-2xl bg-pink-200 p-1 text-pink-500 shadow transition duration-300 ease-in hover:drop-shadow-md">
          <i class="far fa-umbrella-beach"></i>
          <p class="mt-1 text-sm">Beach Spot</p>
        </div>
      </div>
      <h4 class="font-semibold drop-shadow">
        Recomented <span class="text-yellow-600">Point of Interest</span>
      </h4>
      <div class="m-0 grid w-full grid-cols-2 items-center justify-center space-x-4 overflow-y-scroll">
        <div
          class="relative my-2 flex h-64 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl bg-white bg-cover object-cover object-center text-gray-800 shadow-md"
          style="background-image:url('https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')"
        >
          <div class="absolute inset-0 z-0 bg-gradient-to-t from-green-400 to-blue-400 opacity-50"></div>
          <div class="relative flex h-72 w-full flex-row items-end">
            <div class="absolute right-0 top-0 m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-9 w-9 rounded-full p-2 text-gray-200 transition duration-200 ease-in hover:bg-white hover:text-blue-400"
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
            <div class="z-10 flex w-full flex-col rounded-lg p-6">
              <h4 class="mt-1 truncate text-xl font-semibold leading-tight text-white">
                The Beach Resto
              </h4>
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h2 class="flex items-center text-sm font-normal text-gray-300">
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
                    PIK - Jakarta Utara
                  </h2>
                </div>
              </div>
              <div class="flex pt-4 text-sm text-gray-300">
                <div class="mr-auto flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1 h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p class="font-normal">4.5</p>
                </div>
                <div class="flex items-center font-medium text-white">
                  126 Tag
                  <span class="text-sm font-normal text-gray-300">
                    &nbsp;Avail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative my-2 flex h-64 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl bg-white bg-cover object-cover object-center text-gray-800 shadow-md"
          style="background-image:url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')"
        >
          <div class="absolute inset-0 z-0 bg-gradient-to-t from-blue-500 to-yellow-600 opacity-50"></div>
          <div class="relative flex h-72 w-full flex-row items-end">
            <div class="absolute right-0 top-0 m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-9 w-9 rounded-full p-2 text-gray-200 transition duration-200 ease-in hover:bg-white hover:text-blue-400"
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
            <div class="z-10 flex w-full flex-col rounded-lg p-5">
              <h4 class="mt-1 truncate text-xl font-semibold leading-tight text-white">
                Syke Bar & Restaurant
              </h4>
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h2 class="flex items-center text-sm font-normal text-gray-300">
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
                    Menara BCA Lantai 56
                  </h2>
                </div>
              </div>
              <div class="flex pt-4 text-sm text-gray-300">
                <div class="mr-auto flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1 h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p class="font-normal">4.7</p>
                </div>
                <div class="flex items-center font-medium text-white">
                  143 Tag
                  <span class="text-sm font-normal text-gray-300">
                    &nbsp;Avail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 class="font-semibold drop-shadow">
        <span class="text-yellow-600">Suggested </span> Tag :
      </h4>
      <div class="grid grid-cols-1">
        <div class="">
          <div class="flex rounded-2xl bg-white p-2 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
              alt="Just a flower"
              class="h-16 w-16 rounded-xl object-cover"
            />
            <div class="flex w-full flex-col justify-center px-2 py-1">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h2 class="text-sm font-medium">
                    Mall Kelapa Gading 3 - Food Court lt.3
                  </h2>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 cursor-pointer text-yellow-600 hover:text-amber-300"
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
              <div class="flex pt-2 text-sm text-gray-400">
                <div class="mr-auto flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1 h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p class="font-normal">4.5</p>
                </div>
                <div class="flex items-center font-medium text-gray-900">
                  $1800
                  <span class="text-sm font-normal text-gray-400"> /wk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
