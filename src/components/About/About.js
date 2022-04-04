import React from 'react';
import '../About/About.css'

const About = () => {
    return (
        <div>
            <h2 className='mt-5 text-info fw-bold'>Contact us for know About us</h2>
            <section className="container">
                <div className="form-box">
                    <h1>contact us</h1>
                    <p className="from-p">We'd love to hear from you!</p>

                    <div className="form-group">
                        <label for="name">Name</label>
                        <input className="form-control" id="name" type="text" name="Name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input className="form-control" id="email" type="email" name="Email" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" id="message" name="Message"></textarea>
                    </div>
                    <br />
                    <input className="btn btn-info text-white fw-bold" type="submit" value="Submit" />
                </div>
            </section>

        </div>

    );
};

export default About;