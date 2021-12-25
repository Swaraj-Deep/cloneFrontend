import {useState} from "react";
import FormCreator from "../../../creators/FormCreator";
import {
  getUserRegistrationInitialState
} from "../../../states/initialStates/getInitialStates/userRegistrationInitialState";

export default function UserRegistration(props) {
  const [formState, setFormState] = useState(getUserRegistrationInitialState());
  const obj = {
    layout: {
      firstName: {
        id: 'inpFstNm',
        labelText: 'First Name',
        labelFor: 'firstName',
        formState,
        inputValue: formState.firstName,
        inputOnChange: setFormState,
        size: "md",
        type: "text",
        placeholder: "First Name",
        required: true
      }, lastName: {
        id: 'inpLstNm',
        labelText: 'Last Name',
        labelFor: 'lastName',
        inputValue: formState.lastName,
        inputOnChange: setFormState,
        size: "md",
        type: "text",
        placeholder: "Second Name",
        required: true
      }, email: {
        id: 'inpEml',
        labelText: 'Email',
        labelFor: 'email',
        inputValue: formState.email,
        inputOnChange: setFormState,
        size: "md",
        type: "email",
        placeholder: "user@example.com",
        required: true
      }, dob: {
        id: 'inpDOB',
        labelText: 'Date of Birth',
        labelFor: 'dob',
        inputValue: formState.dob,
        inputOnChange: setFormState,
        size: "md",
        type: "date",
        required: true,
        displayLabel: true
      }, gender: {
        id: 'inpGdr', labelText: 'Gender:', type: "radio", displayLabel: true, buttons: [{
          id: 'inpMl', labelFor: 'male', labelText: 'Male', inputValue: 'm', inputOnChange: setFormState
        }, {
          id: 'inpFml', labelFor: 'female', labelText: 'Female', inputValue: 'f', inputOnChange: setFormState
        }, {
          id: 'inpOth', labelFor: 'others', labelText: 'Others', inputValue: 'o', inputOnChange: setFormState
        }]
      }, country: {
        id: 'inpCty',
        labelText: 'Country',
        labelFor: 'country',
        inputValue: formState.country,
        inputOnChange: setFormState,
        size: "md",
        type: "text",
        placeholder: "Your Country",
        required: true
      }, phone: {
        id: 'inpPhn',
        labelText: 'Phone',
        labelFor: 'phone',
        inputValue: formState.phone,
        inputOnChange: setFormState,
        size: "md",
        type: "tel",
        pattern: "[0-9]{10}",
        placeholder: "Phone Number",
        required: true
      }, password: {
        id: 'inpPass',
        labelText: 'Password',
        labelFor: 'password',
        inputValue: formState.password,
        inputOnChange: setFormState,
        size: "md",
        type: "password",
        placeholder: "Type a password",
        required: true
      }, confirmPassword: {
        id: 'inpCnfPass',
        labelText: 'Confirm Password',
        labelFor: 'confirmPassword',
        inputValue: formState.confirmPassword,
        inputOnChange: setFormState,
        size: "md",
        type: "password",
        placeholder: "Confirm password",
        required: true
      }
    }, buttons: [{
      id: 'btn1',
      btnText: "Join",
      btnStyle: "primary",
      btnType: "submit",
      disabled: false,
      onClick: () => console.log('Submit')
    }, {
      id: 'btn2',
      btnText: "Cancel",
      btnStyle: "secondaryOutline",
      btnType: "reset",
      disabled: false,
      onClick: () => console.log('Reset')
    }]
  };


  return (<>
    <FormCreator onReset={() => console.log("Reset")} onSubmit={() => console.log("Submit")} config={obj}
                 formState={formState}/>
  </>);
}
