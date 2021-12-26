import {useState} from "react";
import {
  getUserRegistrationInitialState
} from "../../../states/initialStates/getInitialStates/userRegistrationInitialState";
import styles from "./DriverRegistration.module.css";
import FormCreator from "../../../creators/FormCreator";

export default function DriverRegistration(props) {
  const [formState, setFormState] = useState(getUserRegistrationInitialState());
  const config = {
    layout: {
      firstName: {
        id: 'inpFstNm',
        labelText: 'First Name',
        labelFor: 'firstName',
        formState,
        inputValue: formState.firstName,
        inputOnChange: setFormState,
        type: "text",
        placeholder: "First Name",
        required: true,
        inputClassName: `${styles.sizeMd}`,
        labelClassName: ``,
        className: ``
      }, lastName: {
        id: 'inpLstNm',
        labelText: 'Last Name',
        labelFor: 'lastName',
        inputValue: formState.lastName,
        inputOnChange: setFormState,
        type: "text",
        placeholder: "Second Name",
        required: true,
        inputClassName: `${styles.sizeMd}`,
        labelClassName: ``,
        className: ``
      }, email: {
        id: 'inpEml',
        labelText: 'Email',
        labelFor: 'email',
        inputValue: formState.email,
        inputOnChange: setFormState,
        type: "email",
        placeholder: "Enter your Email",
        required: true,
        inputClassName: `${styles.sizeLg}`,
        labelClassName: ``,
        className: ``
      }, dob: {
        id: 'inpDOB',
        labelText: 'Birth Date',
        labelFor: 'dob',
        inputValue: formState.dob,
        inputOnChange: setFormState,
        type: "date",
        maxVal: (function () {
          const now = new Date();
          return now.toISOString().substring(0, 10);
        })(),
        required: true,
        displayLabel: true,
        inputClassName: `${styles.sizeMdDOB}`,
        labelClassName: ``,
        className: `${styles.flexBasis100} d-flex align-items-center justify-contents-space-between`
      }, gender: {
        id: 'inpGdr',
        labelText: 'Gender',
        type: "radio",
        displayLabel: false,
        className: `${styles.flexBasis100} d-flex align-items-center justify-contents-space-between`,
        labelClassName: '',
        buttons: [{
          id: 'inpMl',
          labelFor: 'male',
          labelText: 'Male',
          inputValue: 'm',
          inputOnChange: setFormState,
          inputClassName: ``,
          labelClassName: `${styles.paddingMdRight}`,
          className: function () {
            return `border d-flex align-items-center ${styles.paddingSm} ${this.inputValue === formState.gender ? styles.borderActive : ''}`
          }
        }, {
          id: 'inpFml',
          labelFor: 'female',
          labelText: 'Female',
          inputValue: 'f',
          inputOnChange: setFormState,
          inputClassName: ``,
          labelClassName: `${styles.paddingMdRight}`,
          className: function () {
            return `border d-flex align-items-center ${styles.paddingSm} ${this.inputValue === formState.gender ? styles.borderActive : ''}`
          }
        }, {
          id: 'inpOth',
          labelFor: 'others',
          labelText: 'Others',
          inputValue: 'o',
          inputOnChange: setFormState,
          inputClassName: ``,
          labelClassName: `${styles.paddingMdRight}`,
          className: function () {
            return `border d-flex align-items-center ${styles.paddingSm} ${this.inputValue === formState.gender ? styles.borderActive : ''}`
          }
        }]
      }, country: {
        id: 'inpCty',
        labelText: 'Country',
        labelFor: 'country',
        inputValue: formState.country,
        inputOnChange: setFormState,
        type: "text",
        placeholder: "Your Country",
        required: true,
        inputClassName: `${styles.sizeMd}`,
        labelClassName: ``,
        className: ``
      }, phone: {
        id: 'inpPhn',
        labelText: 'Phone',
        labelFor: 'phone',
        inputValue: formState.phone,
        inputOnChange: setFormState,
        type: "tel",
        pattern: "[0-9]{10}",
        placeholder: "Phone Number",
        required: true,
        inputClassName: `${styles.sizeMd}`,
        labelClassName: ``,
        className: ``
      }, password: {
        id: 'inpPass',
        labelText: 'Password',
        labelFor: 'password',
        inputValue: formState.password,
        inputOnChange: setFormState,
        type: "password",
        placeholder: "Type your password",
        required: true,
        inputClassName: `${styles.sizeLg}`,
        labelClassName: ``,
        className: ``
      }, confirmPassword: {
        id: 'inpCnfPass',
        labelText: 'Confirm Password',
        labelFor: 'confirmPassword',
        inputValue: formState.confirmPassword,
        inputOnChange: setFormState,
        type: "password",
        placeholder: "Confirm password",
        required: true,
        inputClassName: `${styles.sizeLg}`,
        labelClassName: ``,
        className: ``
      }
    }, buttons: {
      className: `${styles.flexBasis100} d-flex align-items-center justify-contents-space-between`, data: [{
        id: 'btn2',
        btnText: "Cancel",
        btnStyle: "secondaryOutline",
        btnType: "reset",
        disabled: false,
        className: `${styles.sizeMd}`,
        onClick: () => console.log('Reset'),
      }, {
        id: 'btn1',
        btnText: "Join",
        btnStyle: "primary",
        btnType: "submit",
        disabled: false,
        onClick: () => console.log('Submit'),
        className: `${styles.sizeMd}`
      }]
    }
  };
  const onSubmit = (e) => console.log(e);
  const onReset = (e) => setFormState(getUserRegistrationInitialState);


  return <FormCreator onSubmit={onSubmit} onReset={onReset} config={config} formState={formState}
                      formClassName={`d-flex flex-row flex-wrap align-items-center card ${styles.formBackground} ${styles.formWidth} ${styles.gap} ${styles.padding}`}/>
}
