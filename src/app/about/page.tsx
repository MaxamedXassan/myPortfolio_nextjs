
export default function Home() {
    return (
     <>
     
     {/* <!-- Main content --> */}
      <div className="mb-16 container mx-auto pt-20">
          {/* <!-- About section --> */}
          <section id="about"
              className="m-20 justi-center text-center mt-20 relative 
                     my-5 mb-16 px-4 py-4 rounded-lg shadow-md relative 
                     overflow-hidden bg-gradient-to-b from-gray-600 to-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-center">
                    About Geek
                </h2>
              <p className="text-base">
                    Hi, I'm Geek, a passionate full-stack developer with a 
                    focus on building scalable and responsive web applications. 
                    I have extensive experience in front-end technologies 
                    such as HTML, CSS, and JavaScript, along with expertise in 
                    popular frameworks like React.js. On the back end, I specialize
                  in Node.js and Express.js for building robust server-side 
                    applications. My goal is to leverage my skills and creativity 
                    to deliver innovative solutions that meet and exceed 
                    client expectations.
                </p>
              <a
                  className="inline-block mt-5 px-4 py-2 rounded-md bg-green-500 
                         text-white hover:bg-blue-600 transition duration-300">
                    Resume
                </a>
          </section>
  </div>
     </>
    );
  }
  