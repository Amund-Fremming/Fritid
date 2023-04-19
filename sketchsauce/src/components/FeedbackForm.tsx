import React from "react";

const FeedbackForm: React.FC = () => {
    return(
        <>
            <div className="flex justify-center items-center mt-[200px]">
                <div className="flex items-center flex-col bg-ss-house rounded-md w-[500px]">
                    <h2 className="font-marker text-3xl mt-8">Feedback</h2>
                    <p className="p-10 font-marker m-2">Hvis du er her har du sikkert sett innlegget vårt på Instagram. Som nevnt, skriv i prioritert rekkefølge fra 1-3 de maleriene dere liker best, og skriv deretter Instagram profilen din under. Dette trenger vi for å sjekke hvem det er som har sendt inn feedback. </p>
                    <p className="font-marker m-2">Hvilke malerier liker du best?</p>
                    <textarea className="font-marker m-2 rounded w-64 h-32" />
                    <p className="font-marker m-2">Navn på Instagram profil *</p>
                    <input 
                        className="w-64 h-10 mb-2 rounded"
                    />
                    <input 
                        className="mb-10 mt-4 h-10 w-32 bg-blue-500 rounded-xl border-blue-800 border-b-4 text-center font-marker hover:bg-gray-400 hover:border-gray-800 outline-none"
                        value="Submit"
                    />
                </div>
            </div>
        </>
    );
}

export default FeedbackForm;