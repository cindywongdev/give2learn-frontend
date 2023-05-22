'use client'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

export default function ThankYou() {
    return (<div>
        <Nav />
        <div className='m-12 h-screen'>
            <p>
                Application Submitted! <br />
                <br /> Your application have been submitted and will
                be reviewed. You will receive a confirmation email
                once approved.
            </p>
            <p>
                Expected Delivery <br />
                <br /> Expected delivery will be sent to your email
                once application is approved.
            </p>
        </div>
        <Footer />
    </div>)
}