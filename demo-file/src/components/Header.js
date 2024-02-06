import React from 'react'

function Header() {    
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        {data.map((d) => (
          <div className="bg-white h-[450px] text-black rounded-xl">
            <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
              <img src={d.img} alt='' className="h-44 w-44 rounded-full"/>
            </div>
            <div>
               <p>{d.name}</p>
               <p>{d.review}</p>
               <button>Read More</button>
            </div>
          </div>
        ))}
      </div> 
        
    </div>
  )
}

const data = [
{
  name: 'AAA',
  img: '/images/1.jpg',
  review:'asdfghjklzxcvbnmwertyuisdfghj'
},
{
  name: 'AAA',
  img: '/images/1.jpg',
  review:'asdfghjklzxcvbnmwertyuisdfghj'
},
{
  name: 'AAA',
  img: '/images/1.jpg',
  review:'asdfghjklzxcvbnmwertyuisdfghj'
},
]

export default Header