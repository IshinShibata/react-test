import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="text-red-700 border-b">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">shincode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#Home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#About" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#Blog" className="hover:text-blue-400 duration-300">
              Blog
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-20 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hi!
              <br />
              I'm Ishin
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              iure commodi quidem maiores eligendi autem incidunt consequuntur
              mollitia, perferendis cupiditate assumenda molestiae iste quaerat
              odio labore! Cum quae doloribus odit!
            </p>
            <div>
              <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
                Contact
              </button>
            </div>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/icon.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              About
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quos, doloremque, nemo, quia quod quibusdam voluptas quae
              necessitatibus quidem atque voluptates. Quisquam quos, doloremque,
              nemo, quia quod quibusdam voluptas quae necessitatibus quidem
              atque voluptates.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              nesciunt a porro officiis, totam modi temporibus adipisci odio
              velit ut, nihil accusamus reiciendis culpa, dolor ad quidem!
              Quidem, velit aperiam facilis provident maiores suscipit enim
              molestiae nostrum et quae autem sit est nulla quam consequuntur
              deleniti similique minus dolor modi sequi recusandae ab. Dicta,
              eos quasi nostrum repudiandae quis quas assumenda reprehenderit
              iusto deserunt vel dolorum adipisci laborum cumque expedita
              mollitia fugiat in. Praesentium, ut? Dignissimos itaque minus
              iusto harum quasi consequuntur quae ea esse hic aspernatur et,
              fuga praesentium beatae sit voluptates ipsum nobis laborum
              dolorem, modi a blanditiis?
            </p>
          </div>
          {/* カートのタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae magni voluptates alias earum magnam fuga
                    perferendis deleniti dicta, illo explicabo?
                  </p>
                  <a href="" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae magni voluptates alias earum magnam fuga
                    perferendis deleniti dicta, illo explicabo?
                  </p>
                  <a href="" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae magni voluptates alias earum magnam fuga
                    perferendis deleniti dicta, illo explicabo?
                  </p>
                  <a href="" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* left side */}
          <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
            <img src="./img/pc.jpg" alt="" className="rounded" />
          </div>
          {/* right side */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10">
              Skills
            </h1>
            <div className="w-full">
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center"
                  style={{ width: "85%" }}
                >
                  85
                </div>
              </div>
              <h2>CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center"
                  style={{ width: "70%" }}
                >
                  70
                </div>
              </div>
              <h2>JavaScript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center"
                  style={{ width: "70%" }}
                >
                  70
                </div>
              </div>
              <h2>Python</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center"
                  style={{ width: "60%" }}
                >
                  60
                </div>
              </div>
              <h2>Go</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center"
                  style={{ width: "50%" }}
                >
                  50
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default App;
