<template>
    <div style="background-image: url('https://www.ehlweb.theskyroute.com/gerow/img/choose-bg.png'); background-attachment: fixed;">
        <section
          class="relative bg-cover bg-center"
          style="background-image: url('your-background.jpg')"
        >
          <div class="absolute inset-0 bg-[#02143b]/80 bg-opacity-70"></div>
      
          <div
            class="relative max-w-[1320px] mx-auto px-4 py-16 flex gap-10"
          >
            <!-- Left: Video + Text -->
            <div class="flex flex-col justify-center text-white space-y-4 max-w-[500px]">
              <h2 class="text-4xl font-bold">
                We’ll Ensure You Always Get the Best Guidance.
              </h2>
              <p class="text-gray-200 text-sm">
                We are here to help you with all your queries. Please fill the form
                below and we will get back to you.
              </p>
      
              <div class="flex items-center space-x-3">
                <button
                  class="bg-lime-500 rounded-full p-4 hover:bg-lime-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span class="text-white font-medium">Watch Video</span>
              </div>
            </div>
      
            <!-- Right: Form -->
            <div class="bg-white rounded-lg shadow-lg p-12 space-y-4 flex-1">
              <input
                type="text"
                placeholder="Enter Full name"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-400"
              />
      
              <div class="grid grid-cols-2 gap-4">
                <div class="flex">
                  <span class="bg-gray-100 border border-gray-300 rounded-l px-3 py-2"
                    >+44</span
                  >
                  <input
                    type="text"
                    placeholder="Enter Mobile No."
                    class="w-full border border-gray-300 rounded-r px-3 py-2 focus:outline-none focus:ring focus:ring-lime-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-400"
                />
              </div>
      
              <div class="grid grid-cols-2 gap-4">
                <select
                  class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-400"
                >
                  <option>Preferred study destination</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
                <select
                  class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-400"
                >
                  <option>Desired study level</option>
                  <option>Postgraduate</option>
                  <option>Undergraduate</option>
                </select>
              </div>
      
              <input
                type="text"
                placeholder="Last Educational Institution"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-400"
              />
      
              <div class="grid grid-cols-2 gap-4">
                <select
                  class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-400"
                >
                  <option>Choose Test</option>
                  <option>IELTS</option>
                  <option>TOEFL</option>
                </select>
                <input
                  type="text"
                  placeholder="Score"
                  class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-400"
                />
              </div>
      
              <textarea
                placeholder="Note"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-lime-400"
              ></textarea>
      
              <p class="text-xs text-gray-500">
                By submitting this form, you agree to our
                <a href="#" class="text-lime-500">Privacy Policy</a> and
                <a href="#" class="text-lime-500">Terms & Conditions</a>.
              </p>
      
              <button
                class="bg-primary text-white text-sm px-6 py-3 rounded-full font-semibold hover:bg-secondary transition duration-300 cursor-pointer"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </section>
      
        <!-- Awards Section -->
        <section class="py-10 bg-white text-center">
          <h3 class="text-xl font-bold text-gray-900 mb-6">
            OUR AWARDS & ACHIEVEMENTS
          </h3>
          <div class="flex flex-wrap justify-center gap-6">
              <ul class="flex flex-wrap justify-center gap-6">
                  <li class="hover:border-primary rounded px-12 py-4 bg-white border border-gray-100 cursor-pointer">
                      <img src="https://www.ehlweb.theskyroute.com/assets/front/img/partners/6726087f49c54.png" class="h-28" alt="Award 1" />
                  </li>
                  <li class="hover:border-primary rounded px-12 py-4 bg-white border border-gray-100 cursor-pointer">
                      <img src="https://www.ehlweb.theskyroute.com/assets/front/img/partners/6726088b50e5f.png" class="h-28" alt="Award 2" />
                  </li>
                  <li class="hover:border-primary rounded px-12 py-4 bg-white border border-gray-100 cursor-pointer">
                      <img src="https://www.ehlweb.theskyroute.com/assets/front/img/partners/67260898890bc.png" class="h-28" alt="Award 3" />
                  </li>
                  <li class="hover:border-primary rounded px-12 py-4 bg-white border border-gray-100 cursor-pointer">
                      <img src="https://www.ehlweb.theskyroute.com/assets/front/img/partners/672608a6c1172.png" class="h-28" alt="Award 4" />
                  </li>
              </ul>
          </div>
        </section>
    </div>
</template>
