import './Contact.css';

function Contact(){
    return(
        <div className='contact_main_container'>

            <h1 className='contact_container_form_headindg'>How to Contact Us</h1>

            <h2>Map Include</h2>
            
            <div className='contact_sub_container'>

                <form className='contact_container_form' action="###"  method='POST'>

                    <input className='contact_container_form_input' type='text' name='user_name' placeholder='User Name' autoComplete='off' required/>

                    <input className='contact_container_form_input' type='email' name='email' placeholder='Email' autoComplete='off' required
                    />

                    <textarea className='contact_container_form_input' name='message' cols="30" rows="10" placeholder='Message' autoComplete='off' required /> 

                    <input className='contact_container_form_input  contact_container_form_button' type='submit' value="send"/>

                </form>

            </div>
            

        </div>
    )

}

export default Contact;