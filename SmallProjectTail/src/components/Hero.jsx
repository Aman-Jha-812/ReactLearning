//import React from 'react'
import Button from "./Button";
const Hero = () => {
  return (
    <div className="max-w-[55rem] m-auto text-center py-[8rem]">
      <h1 className="text-6xl font-serif font-bold">The Best Way to <span className="bg-red-300 rounded-2xl px-3">Review</span>  creative Assets </h1>

      <p className="text-lg my-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, excepturi enim recusandae obcaecati ut animi facere quidem itaque deleniti qui quo id similique ea, voluptatum, non totam reprehenderit repellendus beatae veritatis nisi. Eaque, sunt molestiae alias ratione reiciendis ipsam quibusdam ipsum impedit a ea beatae, minus praesentium illum illo ipsa!</p>
      <div className="text-3xl">
      <Button title="Join Subscription" />

      </div>
    </div>
  )
}

export default Hero
