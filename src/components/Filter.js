import React from 'react'

const Filter = ({ filterData, setCategory, category }) => {
  return (
    <div className='py-4 flex flex-wrap gap-4 w-fit mx-auto'>
      {
        filterData.map((data) => {
          return (
            <button
              key={data.id}
              onClick={() => setCategory(data.title)}
              className={`text-white font-medium text-lg py-1 px-2 rounded-md border-2 bg-black
               hover:bg-opacity-50 transition-all duration-300
               ${category === data.title ?
                  "bg-opacity-60 border-white" :
                  "bg-opacity-40 border-transparent"}
                `}
            >
              {data.title}
            </button>)
        })
      }
    </div >
  )
}

export default Filter