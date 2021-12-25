import {useState} from "react";
import {
  getUserRegistrationInitialState
} from "../../../states/initialStates/getInitialStates/userRegistrationInitialState";
import styles from "./UserRegistration.module.css";
import Label from "../../../shared-components/Label";
import Input from "../../../shared-components/Input";
import Button from "../../../shared-components/Button";

export default function UserRegistration(props) {
  const [formState, setFormState] = useState(getUserRegistrationInitialState());
  const {layout, buttons} = {
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
        size: "lg",
        type: "email",
        placeholder: "user@example.com",
        required: true,
        className: 'flex-basis-100'
      }, dob: {
        id: 'inpDOB',
        labelText: 'Date of Birth',
        labelFor: 'dob',
        inputValue: formState.dob,
        inputOnChange: setFormState,
        size: "md",
        type: "date",
        required: true,
        displayLabel: true,
        className: 'flex-basis-100'
      }, gender: {
        id: 'inpGdr', labelText: 'Gender', type: "radio", displayLabel: true, className: 'flex-basis-100', buttons: [{
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
        size: "lg",
        type: "password",
        placeholder: "Type a password",
        required: true
      }, confirmPassword: {
        id: 'inpCnfPass',
        labelText: 'Confirm Password',
        labelFor: 'confirmPassword',
        inputValue: formState.confirmPassword,
        inputOnChange: setFormState,
        size: "lg",
        type: "password",
        placeholder: "Confirm password",
        required: true,
        className: 'flex-basis-100'
      }
    }, buttons: [{
      id: 'btn2',
      btnText: "Cancel",
      btnStyle: "secondaryOutline",
      btnType: "reset",
      disabled: false,
      onClick: () => console.log('Reset'),
      size: "md"
    }, {
      id: 'btn1',
      btnText: "Join",
      btnStyle: "primary",
      btnType: "submit",
      disabled: false,
      onClick: () => console.log('Submit'),
      size: "md"
    }]
  };
  const onSubmit = (e) => console.log(e);
  const onReset = (e) => console.log(e);


  return (<form onSubmit={(e) => {
    e.preventDefault();
    onSubmit(e);
  }} onReset={(e) => {
    e.preventDefault();
    onReset(e);
  }} noValidate={true} autoComplete={"new-password"}
                className={`d-flex flex-row flex-wrap align-items-center card ${styles.formBackground} ${styles.formWidth} ${styles.gap} ${styles.padding}`}>
    {Object.keys(layout).map((key) => (<div key={layout[key].id}
                                            className={`${layout[key].displayLabel ? 'd-flex justify-contents-space-between justify-contents-center align-items-center' : ''} ${styles[layout[key].className]}`}>
      {layout[key].type === 'radio' ? <>
        {layout[key].displayLabel && <Label text={layout[key].labelText}/>}
        {layout[key].buttons.map(button => (<span key={button.id} className={`border ${styles.paddingSm}
         ${button.inputValue === formState[key] ? styles.borderActive : ''} d-flex align-items-center`}>
                <Label className={`${styles.paddingMdRight}`} text={button.labelText} htmlFor={button.labelFor}/>
                <Input
                  checked={button.inputValue === formState[key]}
                  type={layout[key].type}
                  value={button.inputValue}
                  name={key}
                  id={button.labelFor}
                  onChange={(e) => button.inputOnChange(prevState => ({...prevState, [key]: e.target.value}))}
                />
              </span>))}
      </> : <>
        {layout[key].displayLabel && <Label text={layout[key].labelText} htmlFor={layout[key].labelFor}/>}
        <Input
          value={layout[key].inputValue}
          onChange={(e) => layout[key].inputOnChange(prevState => ({...prevState, [key]: e.target.value}))}
          id={layout[key].labelFor}
          type={layout[key].type}
          size={layout[key].size}
          pattern={layout[key].pattern}
          required={layout[key].required}
          placeholder={layout[key].placeholder}
        />
      </>}
    </div>))}
    <div className={'d-flex justify-contents-space-between width-100'}>
      {buttons.map(button => (
        <Button key={button.id} text={button.btnText} type={button.btnType} btnStyle={button.btnStyle}
                onClick={button.onClick}
                disabled={button.disabled}
                size={button.size}/>))}
    </div>
  </form>);
}
