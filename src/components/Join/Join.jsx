import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import './Join.css'

const Join = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3yix8km', 'template_kamk723', form.current, 'trE-jyVkmm__HJ_A9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return ( 
        <div className="Join" id="join">
            <div className="left-j">
                <hr/>
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email__container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter your Email address' />
                    <button className='btn btn-j'> Join now </button>
                </form>
            </div>
        </div>
     );
}
 
export default Join;