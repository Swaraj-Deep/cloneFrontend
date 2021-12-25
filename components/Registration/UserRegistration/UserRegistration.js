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
        type: "text"
      }, lastName: {
        id: 'inpLstNm',
        labelText: 'Last Name',
        labelFor: 'lastName',
        inputValue: formState.lastName,
        inputOnChange: setFormState,
        size: "md",
        type: "text"
      }, email: {
        id: 'inpEml',
        labelText: 'Email',
        labelFor: 'email',
        inputValue: formState.email,
        inputOnChange: setFormState,
        size: "md",
        type: "email"
      }, dob: {
        id: 'inpDOB',
        labelText: 'Date of Birth',
        labelFor: 'dob',
        inputValue: formState.dob,
        inputOnChange: setFormState,
        size: "md",
        type: "date"
      }, gender: {
        id: 'inpGdr', labelText: 'Gender:', type: "radio", buttons: [{
          id: 'inpMl', labelFor: 'male', labelText: 'Male', inputValue: 'm', inputOnChange: setFormState
        }, {
          id: 'inpFml', labelFor: 'female', labelText: 'Female', inputValue: 'f', inputOnChange: setFormState
        }, {
          id: 'inpOth', labelFor: 'others', labelText: 'Others', inputValue: 'o', inputOnChange: setFormState
        }]
      }, address: {
        id: 'inpAdd',
        labelText: 'Address',
        labelFor: 'address',
        inputValue: formState.address,
        inputOnChange: setFormState,
        size: "md",
        type: "text"
      }, phone: {
        id: 'inpPhn',
        labelText: 'Phone',
        labelFor: 'phone',
        inputValue: formState.phone,
        inputOnChange: setFormState,
        size: "md",
        type: "text"
      }, password: {
        id: 'inpPass',
        labelText: 'Password',
        labelFor: 'password',
        inputValue: formState.password,
        inputOnChange: setFormState,
        size: "md",
        type: "password"
      }, confirmPassword: {
        id: 'inpCnfPass',
        labelText: 'Confirm Password',
        labelFor: 'confirmPassword',
        inputValue: formState.confirmPassword,
        inputOnChange: setFormState,
        size: "md",
        type: "password"
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
