import Image from "next/image"

const Landing = () => {
  return (
      <div>
          
          <div className="app-container py-4">
              <div className="flex min-h-[70vh] items-center justify-between">
                  <div className="flex flex-col">
                      <h2 className="text-[6rem]">I am inevitable</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis eveniet quos tempora deleniti nemo, reprehenderit officia rem odio error.</p>
                  </div>
                  <Image
                      width={50}
                      height={50}
                      src='/next.svg'
                      alt="THansomimahe"
                  />
              </div>
          </div>
    </div>
  )
}

export default Landing