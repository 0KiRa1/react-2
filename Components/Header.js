import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = (props) => {
  const user = useContext(MyContext)
  return (
    <div className='bg-green-300'>
      {/* <Nav num = {props.num} /> */}
      {user}
    </div>
  )
}

export default Header
