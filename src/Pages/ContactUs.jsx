import React from 'react'
import Header from '../Component/Header'
import '../Pages/ContactUs.css'

const ContactUs = () => {
    return (
        <div><Header />
            <div className="publicontact">
                <form action="/action_page.php">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />


                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="country">Country</label>
                    <select id="country" name="country">
                        <option value="south africa">South Africa</option>
                        <option value="gauteng">Gauteng</option>
                        <option value="johannesburg">Anywhere of City</option>
                    </select>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit" />

                </form>

            </div>
        </div>

    )
}

export default ContactUs

