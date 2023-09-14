// -------------Two way binding-------------

// "use client"
// import React, { useState } from 'react'

// const page = () => {
//     const [username, setusername] = useState("")
//     return (
//     <>
//         <h1 className='text-2xl mb-4 '>Enter your name: </h1>
//         <form>
//             <input 
//             className='border-2 border-blue-500 text-xl px-4 py-2' 
//             type='text'
//             value={username}
//             onChange={(e)=> {
//                 setusername(e.target.value)
//             }}            
//             />
//         </form>
//     </>
//   )
// }

// export default page



// --------------App routing--------------

// import React from 'react'

// const page = () => {
//   return (
//     <>
//     <div>
//       <h1 className='text-4xl font-bold mb-5'>This is Home page</h1>
//       <a href='/Contact'>Contact</a>
//     </div>
//     </>
//   )
// }

// export default page


// ---------------Api Fetching and useEffect----------------

// "use client"
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const page = () => {
//     const [user, setuser] = useState([])
//     const getUsers = async()=>{
//         const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
//         setuser(data)
//     }

//     useEffect(() => {
//       getUsers()
//     }, [])
    
//   return (
//     <>
//         <button onClick={getUsers} className='text-white py-3 px-6 rounded font-bold bg-green-400 '>Get Data</button>
//         <div className='bg-slate-300  mt-5'>
//             {user.map((e)=>{
//                 return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
//             })}
//         </div>
//     </>
//   )
// }

// export default page

// ----------Context API---------

// "use client"
// import Header from '@/Components/Header'
// import React, { useState } from 'react'

// const page = () => {
//   Header
//   const [num, setnum] = useState(10)
//   return (
//     <div>
//       Home Page
//       <Header num = {num}/>
//     </div>
//   )
// }

// export default page


//  ----------Context Call Directly------------

// "use client"
// import Header from '@/Components/Header'
// import { MyContext } from '@/Helper/Context'
// import React, { useContext } from 'react'

// const page = () => {
//   const user = useContext(MyContext)
//   return (
//     <div>
//       {user}
//       <Header/>
//     </div>
//   )
// }

// export default page




// -----------React Toastify--------------

import React from 'react'

const page = () => {
  return (
    <div>
      <button className='px-6 py-2 bg-green-500 text-white font-bold rounded'>Get</button>
    </div>
  )
}

export default page



