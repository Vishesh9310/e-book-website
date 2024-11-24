import React from 'react'

function SignupCom() {
  return (
    <>
    <div className='max-h-max bg-none text-center p-7 flex justify-between'>
        <div className='flex justify-center item-center my-0.5 w-3/4 px-3 h-full min-h-fit'>
            <img className="h-96 w-96 rounded-2xl" src="src/assets/illu_signup.jpeg" alt="gif" />
        </div>
        <div className="w-1/4">
             <form className="px-2.5 py-5 h-fit w-ful bg-purple-100 border-2 border-purple-600 rounded-xl mx-1 my-1 shadow-lg shadow-purple-500/50" action="" method='post'>
                <div>
                  <p>Sign Up</p>
                </div>
                <br />
                <div className="text-sm flex xl:justify-between lg:flex-row flex-col items-center px-2 py-1">
                  <label htmlFor="name">Name:</label>
                  <input className="rounded-md border-2 border-purple-500 xl:w-44 md:w-32 sm:w-28" type="text" id='name' name='name'/>
                </div>
                <br />
                <div className="text-sm flex xl:justify-between lg:flex-row flex-col items-center px-2 py-1">
                  <label htmlFor="email">Email:</label>
                  <input className="rounded-md border-2 border-purple-500 xl:w-44 md:w-32 sm:w-28" type="email" id='email' name='email'/>
                </div>
                <br />
                <div className="text-sm flex xl:justify-between lg:flex-row flex-col items-center px-2 py-1">
                  <label htmlFor="password">Password:</label>
                  <input className="rounded-md border-2 border-purple-500 xl:w-44 md:w-32 sm:w-28" type="password" id='password' name='password' />
                </div>
                <br />
                <div className="text-sm flex xl:justify-between lg:flex-row flex-col items-center px-2 py-1">
                  <label htmlFor="c_password">Confirm Password:</label>
                  <input className="rounded-md border-2 border-purple-500 xl:w-44 md:w-32 sm:w-28" type="password" id='c_password' name='c_password' />
                </div>
                <br />

                <div>
                    <input type="checkbox" id='show_pwd' name='show_pwd'/>
                    <label className="text-xs ps-1" htmlFor="show_pwd">I agree with <a href="#" class="links_color">Privacy and Policy</a></label>
                  </div>
                <br />
                <input className="rounded-md text-white bg-slate-600 w-full p-1 hover:bg-slate-500 hover:text-white" type="submit" id='submit' name='Submit' />

                <p className="text-xs ">or continued with</p>

                <div className="min-h-7 max-h-7">
                <a class='an' className="mr-5 p-0.5 text-center rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-pink-500 hover:text-white" href="">Go</a>
                <a class='an' className="p-0.5 text-center rounded-2xl min-w-7 hover:min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-blue-500 hover:text-white" href="">Fa</a>
                </div>
                <p className="text-xs">Already have an account? <a className="text-purple-900 hover:text-purple-950" href="#">Log In</a></p>
            
            </form>
        </div>
    </div>
   </>
  )
}

export default SignupCom