import React, {useState, useEffect} from 'react';

const CustomForm = ({ status, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }


    return (
      <div style={{background: "black", color: "white" }} className="container mb-4 p-5 rounded" >
        <form className="form" onSubmit={(e) => handleSubmit(e)}>

        <h3 className="mc__title font-weight-light text-center">
          {status === "success" 
            ? "Thank you for subscribing" 
            : "Subscribe To Our Newsletter"
          }
        </h3>

        <p className="mc__title font-weight-light text-center">
          {status === "success" 
            ? " " 
            : "Get access to exclusive deals and offers"
          }
        </p>

          <div className="form">
            <input 
              className="form-group form-control "
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              value={firstName}
              placeholder="First Name"
              isRequired
            />
  
            <input
              className="form-group form-control"
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              value={lastName}
              placeholder="Last Name"
              isRequired
            />
  
            <input
              label="Email"
              className="form-group form-control"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Email"
              isRequired
            />
  
          </div>
    
            <input
                className="btn btn-light form-control"
                 label="subscribe"
                 type="submit"
               />
        </form>
        </div>

    )
};

export default CustomForm
