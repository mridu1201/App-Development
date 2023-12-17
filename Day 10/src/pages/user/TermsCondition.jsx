import React from 'react'
import Navbar from '../../assets/components/NavBar'
import Footer from '../../assets/components/home/Footer'

function TermsCondition() {
  return (
   <div className="all-terms">
    <Navbar/>
    <div className='terms-main'>
        <div className="terms-title">
            <h1>Terms<br/>& Conditions</h1>
        </div>
        <div className="terms-content">
        <section>
                <h2 className='pl-4'>1. Introduction</h2>
                <p className='pl-5'>A brief overview of your app and its purpose.</p>
                <p >By using the app, users agree to comply with the terms and conditions.</p>
            </section>

            <section>
                <h2 className='pl-4'>2. Acceptance of Terms</h2>
                <p className='pl-5'>A statement indicating that using the app implies acceptance of the terms and conditions.</p>
            </section>

            <section>
                <h2 className='pl-4'>3. User Registration</h2>
                <p className='pl-5'>If your app requires user registration, explain the registration process.</p>
                <p>Specify that users are responsible for maintaining the confidentiality of their login credentials.</p>
            </section>

            <section>
                <h2 className='pl-4'>4. User Conduct</h2>
                <p className='pl-5'>Guidelines for acceptable use of the app.</p>
                <p>Prohibitions, such as no harassment, no spam, no illegal activities, etc.</p>
                <p>Intellectual property rights (e.g., copyright) of the content on your app.</p>
            </section>

            <section>
                <h2  className='pl-4'>5. Privacy Policy</h2>
                <p className='pl-5'>A link to your app's privacy policy, which explains how user data is collected, stored, and used.</p>
            </section>

            <section>
                <h2 className='pl-4'>6. Content Guidelines</h2>
                <p className='pl-5'>Rules regarding user-generated content (if applicable).</p>
                <p>How to report inappropriate content.</p>
            </section>

            <section>
                <h2 className='pl-4'>7. Termination of Accounts</h2>
                <p className='pl-5'>Conditions under which you can suspend or terminate user accounts.</p>
            </section>

            <section>
                <h2 className='pl-4'>8. Disclaimers</h2>
                <p className='pl-5'>Disclaimer of warranties: Clarify that your app is provided "as is" and without warranties.</p>
                <p>Limitation of liability: Explain your app's limitations of liability.</p>
            </section>

            <section>
                <h2 className='pl-4'>9. Governing Law</h2>
                <p className='pl-5'>Specify which jurisdiction's laws apply and where legal disputes should be resolved (e.g., your city or state).</p>
            </section>

            <section>
                <h2 className='pl-4'>10. Modifications</h2>
                <p className='pl-5'>A clause stating that you reserve the right to modify the terms and conditions.</p>
                <p>A mechanism to inform users about changes (e.g., email notification or a notice on the app).</p>
            </section>

            <section>
                <h2 className='pl-4'>11. Contact Information</h2>
                <p className='pl-5'>Provide a contact email or customer support information for user inquiries or complaints.</p>
            </section>

            <section>
                <h2 className='pl-4'>12. Miscellaneous</h2>
                <p className='pl-5'>Severability clause: If one part of the terms is found invalid, the rest remain in effect.</p>
                <p>Entire agreement: The terms constitute the entire agreement between the parties.</p>
                <p>Waiver: Your right to enforce the terms may be waived under certain circumstances.</p>
                <p>Assignment: State whether users can transfer their accounts, and whether you can transfer the agreement.</p>
            </section>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default TermsCondition
