import React from 'react'

const Scroll = () => {
  return (
          <div className=" cursor-pointer">
        {/* scroll down indicator */}
        <div className="flex flex-row-reverse absolute bottom-8 right-8 items-center gap-2">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center items-start p-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
            </div>
            {/* <small>Scroll to view more</small> */}
        </div>
      </div>
  )
}

export default Scroll