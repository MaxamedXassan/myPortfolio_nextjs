
export default function Home() {
    return (
     <>
       <section id="skills"
              className="m-20 p-10 mb-16 rounded-lg shadow-md text-white relative 
                     overflow-hidden rounded mb-16 bg-gradient-to-b 
                     from-gray-600 to-gray-800 text-white mb-8 px-4 py-10">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                      <p className="font-bold">HTML</p>
                      <div className="bg-gray-600 h-4 w-full rounded-full">
                          <div className="bg-green-400 h-full rounded-full w-4/5"></div>
                      </div>
                  </div>
                  <div>
                      <p className="font-bold">CSS</p>
                      <div className="bg-gray-600 h-4 w-full rounded-full">
                          <div className="bg-green-400 h-full rounded-full w-4/5"></div>
                      </div>
                  </div>
                  <div>
                      <p className="font-bold">JavaScript</p>
                      <div className="bg-gray-600 h-4 w-full rounded-full">
                          <div className="bg-green-400 h-full rounded-full w-4/5"></div>
                      </div>
                  </div>
                  <div>
                      <p className="font-bold">React.js</p>
                      <div className="bg-gray-600 h-4 w-full rounded-full">
                          <div className="bg-green-400 h-full rounded-full w-4/5">
                          </div>
                      </div>
                  </div>
                  <div>
                      <p className="font-bold">Node.js</p>
                      <div className="bg-gray-600 h-4 w-full rounded-full">
                          <div className="bg-green-400 h-full rounded-full w-3/5"></div>
                      </div>
                  </div>
                  <div>
                      <p className="font-bold">Express.js</p>
                      <div className="bg-gray-600 h-4 w-full rounded-full">
                          <div className="bg-green-400 h-full rounded-full" 
                               ></div>
                      </div>
                  </div>
              </div>
          </section>
         
     </>
    );
  }
  