"use client"
import { IoLocationSharp, IoLogoTwitter, IoSearch } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

import { BsBuildings } from "react-icons/bs";

import Image from 'next/image';
// import Mode from "./Mode";
import Darkmode from "../Darkmode";
import React, { useEffect, useState } from 'react'
// import Darkmode from "../Darkmode";

const Data = () => {
  const [username, setUsername] = useState(null)
  const [object, setObject] = useState([])


  async function fetchdata() {
    try {
      let data = await fetch(`https://api.github.com/users/${username}`)
      data = await data.json();
      const obj = {

        avatar: data.avatar_url,
        name: data.name,
        login: data.login,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        email: data.email,
        location: data.location,
        created: data.created_at,
        twitter: data.twitter_username,
        campany: data.company,
        repos: data.repos_url,
        url: data.url,
        portfolio: data.blog,
        html_url: data.html_url


      }

      console.log(data)


      setObject(obj)



    } catch (error) {
      console.log(error)
    }

  }


  useEffect(() => {
    fetchdata()
  }, [])





  return (
    <>
      <div className='bg-slate-200 dark:bg-slate-950 w-full h-screen p-1 '>

        <div className='w-[380px] sm:w-[550px] flex-cols  mx-auto justify-center text-black dark:text-white py-10'>
          <div className='flex justify-between items-center '>
            <h1 className="text-2xl font-semibold">devfinder</h1>
            <Darkmode />
          </div>


          {/* search */}
          <div className='flex justify-between items-center bg-white dark:bg-slate-900 px-5 py-2 rounded-lg align-middle my-5'>
            <div className='flex gap-3 items-center'>
              <IoSearch size={25} color="blue" />
              <input
                type='text'
                className='border-none bg-transparent outline-none'

                placeholder='enter username'
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />

            </div>
            <button className="px-2 bg-blue-600 rounded-lg py-1" onClick={fetchdata}>click me</button>



          </div>
          {/* search end */}


          {/* content */}
          < div className=' rounded-lg p-5 bg-white dark:bg-slate-900' >
            <div className="flex-cols sm:flex gap-5 items-center">
              <div>
                <img src={object.avatar} className="rounded-full w-28" />


              </div>
              <div>
                <h2>{object.name}</h2>
                <a className="text-blue-600" href={object.html_url}><p> {"@"}{object.login}</p></a>
                <p>{new Date (object.created).toDateString()}</p>

              </div>
            </div>
            <p className="my-3">{object.bio}</p>

            <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 flex justify-around my-2">
              <div className="flex-cols text-center gap-1">
                <p>Repos</p>
                {/* <p> new Date({object.repos})link</p> */}
              </div>

              <div className="flex-cols text-center gap-1 ">
                <p>followers</p>
                <p>{object.followers}</p>
              </div>


              <div className="flex-cols text-center  gap-1">
                <p>following</p>
                <p>{object.following}</p>
              </div>

            </div>

            <div className="flex flex-wrap ">

              <div className="flex items-center w-1/2  gap-1 my-1">
                <IoLocationSharp size={20} />
                <p>{object.location !== null ? object.location : "Not available"}</p>

              </div>

              <div className="flex items-center w-1/2 gap-1 my-1 ">
                <FaLink size={20} />
                {object.portfolio!=="" ?<a className="text-blue-600" href={object.portfolio}><p>Portfolio</p></a> :"Not available"}

              </div>


              <div className="flex items-center w-1/2 gap-1 my-1">
                <IoLogoTwitter size={20} />
                <p>{object.twitter !== null ? object.twitter : "Not available"}</p>

              </div>


              <div className="flex items-center w-1/2 gap-1 my-1">
                <BsBuildings size={20} />
                <p>{object.campany !== null ? object.campany : "Not available"}</p>

              </div>


            </div>

          </div >
          {/* content end */}





        </div>
      </div>

    </>
  )
}

export default Data