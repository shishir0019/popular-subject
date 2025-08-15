<template>
    <div style="background-image: url('https://www.ehlweb.theskyroute.com/gerow/img/choose-bg.png'); background-attachment: fixed;">
        <section
          class="relative bg-cover bg-center"
          style="background-image: url('your-background.jpg')"
        >
          <div class="absolute inset-0 bg-gray-800/80 bg-opacity-70"></div>
      
          <div
            class="relative container px-4 py-16 flex gap-10"
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
                  class="bg-gray-100 text-red-500 rounded-full p-4 hover:bg-gray-300 cursor-pointer transition"
                  aria-label="play"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
            <div class="bg-white shadow-lg py-16 px-12 space-y-4 flex-1">
              <input
                type="text"
                placeholder="Enter Full name"
                aria-label="Enter Full name"
                class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
              />
      
              <div class="grid grid-cols-2 gap-4">
                <div class="flex">
                  <span class="bg-gray-100 border border-gray-300 rounded-l px-4 py-3"
                    >+44</span
                  >
                  <input
                    type="text"
                    aria-label="Enter Mobile No."
                    placeholder="Enter Mobile No."
                    class="w-full border border-gray-300 rounded-r px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
                  />
                </div>
                <input
                  type="email"
                  aria-label="Enter Email"
                  placeholder="Enter Email"
                  class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
                />
              </div>
      
              <div class="grid grid-cols-2 gap-4">
                <select aria-label="Preferred study destination"
                  class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
                >
                  <option>Preferred study destination</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
                <select
                  class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
                >
                  <option>Desired study level</option>
                  <option>Postgraduate</option>
                  <option>Undergraduate</option>
                </select>
              </div>
      
              <input
                type="text" aria-label="Last Educational Institution"
                placeholder="Last Educational Institution"
                class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
              />
      
              <div class="grid grid-cols-2 gap-4">
                <select aria-label="Choose Test"
                  class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
                >
                  <option>Choose Test</option>
                  <option>IELTS</option>
                  <option>TOEFL</option>
                </select>
                <input
                  type="text" aria-label="Score"
                  placeholder="Score"
                  class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
                />
              </div>
      
              <textarea
                placeholder="Note" aria-label="Note"
                class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
              ></textarea>
      
              <p class="text-xs text-gray-500">
                By submitting this form, you agree to our
                <a href="#" aria-label="privacy policy" class="text-lime-500">Privacy Policy</a> and
                <a href="#" aria-label="terms & conditions" class="text-lime-500">Terms & Conditions</a>.
              </p>
      
              <button
                class="btn btn-primary"
                aria-label="submit"
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
                  <li class="px-12 py-4 bg-gray-100 hover:bg-gray-200 transition duration-300 border border-gray-200 shadow cursor-pointer">
                      <img src="https://www.ehlweb.theskyroute.com/assets/front/img/partners/6726087f49c54.png" class="h-28" alt="Award 1" />
                  </li>
                  <li class="px-12 py-4 bg-gray-100 hover:bg-gray-200 transition duration-300 border border-gray-200 shadow cursor-pointer">
                      <img src="https://www.ehlweb.theskyroute.com/assets/front/img/partners/6726088b50e5f.png" class="h-28" alt="Award 2" />
                  </li>
                  <li class="px-12 py-4 bg-gray-100 hover:bg-gray-200 transition duration-300 border border-gray-200 shadow cursor-pointer">
                      <img src="https://www.ehlweb.theskyroute.com/assets/front/img/partners/67260898890bc.png" class="h-28" alt="Award 3" />
                  </li>
                  <li class="px-12 py-4 bg-gray-100 hover:bg-gray-200 transition duration-300 border border-gray-200 shadow cursor-pointer">
                      <img src="https://www.ehlweb.theskyroute.com/assets/front/img/partners/672608a6c1172.png" class="h-28" alt="Award 4" />
                  </li>
              </ul>
          </div>
        </section>
    </div>
</template>
