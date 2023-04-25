import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";

const Feedback: React.FC = () => {
    return(
        <>
            <Navbar />
            <FeedbackForm />
            <div className="mt-12">

            </div>
            <Footer />
        </>
    );
}

export default Feedback;