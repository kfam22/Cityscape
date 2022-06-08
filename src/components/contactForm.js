import React from 'react'

export default function contactForm() {
  return (
    <div>
         <form className='contact-form'>
            <div className='form-border'>
              <div className='contact-info'>
                <div className='contact-left'>
                {/* <label className='contact' htmlFor='name'>Name</label> */}
                <input className='contact' id='name' name='name' placeholder='Name'/>
                </div>
                <div className='contact-right'>
                {/* <label className='contact' htmlFor='email' >Email</label> */}
                <input className='contact' id='email' type='email' name='email'placeholder='Email'/>
                {/* <ValidationError prefix="Email" field="email" errors={state.errors}/> */}
                </div>
              </div>
              <div className='contact-message'>
              {/* <label className='contact' htmlFor='message' >Your Message</label> */}
              <textarea className='contact' id='message' name='message' placeholder='Message'/>
              {/* <ValidationError prefix="Message" field="message" errors={state.errors}/> */}
              </div>
            </div>
              <div className='contactBtnCase'>
              <button type='submit'className='contact-btn hvr-sweep-to-right'>contact</button>
              </div>
              
          </form>
    </div>
  )
}
