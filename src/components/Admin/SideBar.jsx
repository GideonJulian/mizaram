import React from 'react'

const SideBar = () => {
  return (
    <div className='w-64 flex-shrink-0 bg-white border-r border-[#e2e8f0]  flex flex-col'>
        <div className="flex flex-col h-full p-4">
            <div className="flex items-center gap-3 p-3 mb-6">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10">
                    M
                </div>
                <div className="flex flex-col">
                    <h1 className="text-[#2d3748] text-base font-bold leading-normal">Mizaram</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar