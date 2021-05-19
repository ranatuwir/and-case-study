import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm"

const FormContainer = () => {
    const u = 'b50dd23206cbd6a3c001d197e'
    const id = '220d7c8c5a'
    const URL = `https://gmail.us1.list-manage.com/subscribe/post?u=${u}&id=${id}`
    return (
        <div>
            <MailchimpSubscribe 
            url={URL}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}/>

        </div>
    )
}

export default FormContainer
