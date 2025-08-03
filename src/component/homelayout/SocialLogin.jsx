import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
        <h2 className='font-bold mb-5'>Login width</h2>
        <div className="space-y-3">
            <button className='btn w-full btn-outline btn-secondary'> <FcGoogle size={24}/>Login with google</button>
            <button className='btn w-full btn-outline btn-primary'><FaGithub size={24}/> Login with github</button>
        </div>
    </div>
  )
}

export default SocialLogin