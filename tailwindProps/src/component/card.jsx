import React from 'react'

//"kumar is defult username value"
function Card({username = "kumar" , post = "Software Eng."}) {
  //console.log(props)
  return (
    <div>
      {/* <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format
      &fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1 classNameName='text-3xl bg-green-500 p-3 rounded-md'>card for photos</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, incidunt?</p> */}

    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img className="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://unsplash.com/photos/woman-with-dslr-camera-e616t35Vbeg" alt="" width="384" height="512"/>
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-lg font-">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, minus!
          </p>
        </blockquote>
        <figcaption>
          <div>
            {username}
          </div>
          <div>
            {post}
          </div>
        </figcaption> 
      </div>
    </figure>
    </div>
  )
}

export default Card