import Button from "../../../shared-components/Button";
import Input from "../../../shared-components/Input";
import {useState} from "react";
import Label from "../../../shared-components/Label";
import styles from "./UserRegistration.module.css";

export default function UserRegistration(props) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const obj = {
    firstName: {
      labelText: 'First Name',
      labelFor: 'firstName',
      formState,
      inputValue: formState.firstName,
      inputOnChange: setFormState,
      size: "md",
      type: "text"
    }, lastName: {
      labelText: 'Last Name',
      labelFor: 'lastName',
      inputValue: formState.lastName,
      inputOnChange: setFormState,
      size: "md",
      type: "text"
    }, email: {
      labelText: 'Email',
      labelFor: 'email',
      inputValue: formState.email,
      inputOnChange: setFormState,
      size: "md",
      type: "email"
    }, dob: {
      labelText: 'Date of Birth',
      labelFor: 'dob',
      inputValue: formState.dob,
      inputOnChange: setFormState,
      size: "md",
      type: "date"
    }, gender: {
      labelText: 'Gender:', type: "radio", buttons: [{
        labelFor: 'male', labelText: 'Male', inputValue: formState.gender, inputOnChange: setFormState
      }, {
        labelFor: 'female', labelText: 'Female', inputValue: formState.gender, inputOnChange: setFormState
      }, {
        labelFor: 'others', labelText: 'Others', inputValue: formState.gender, inputOnChange: setFormState
      }]
    }, address: {
      labelText: 'Address',
      labelFor: 'address',
      inputValue: formState.address,
      inputOnChange: setFormState,
      size: "md",
      type: "text"
    }, phone: {
      labelText: 'Phone',
      labelFor: 'phone',
      inputValue: formState.phone,
      inputOnChange: setFormState,
      size: "md",
      type: "text"
    }, password: {
      labelText: 'Password',
      labelFor: 'password',
      inputValue: formState.password,
      inputOnChange: setFormState,
      size: "md",
      type: "password"
    }, confirmPassword: {
      labelText: 'Confirm Password',
      labelFor: 'confirmPassword',
      inputValue: formState.confirmPassword,
      inputOnChange: setFormState,
      size: "md",
      type: "password"
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  function handleReset(e) {
    e.preventDefault();
    setFormState({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      address: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    console.log(formState);
  }

  return (<>
    <form onSubmit={handleSubmit} onReset={handleReset}>
      {Object.keys(obj).map((key, i) => <span key={i}>{<div className={styles.formElement}>
        {obj[key].type === 'radio' ? <>
          <Label text={obj[key].labelText}/>
          {obj[key].buttons.map(button => (<span key={button.labelFor}>
                <Input
                  type={obj[key].type}
                  value={button.inputValue}
                  name={key}
                  id={button.labelFor}
                  onChange={(e) => button.inputOnChange(prevState => {
                    console.log(e.target)
                    return {...prevState, [key]: e.target.value}
                  })}
                />
                <Label text={button.labelText} htmlFor={button.labelFor}/>
              </span>))}
        </> : <>
          <Label text={obj[key].labelText} htmlFor={obj[key].labelFor}/>
          <Input
            value={obj[key].inputValue}
            onChange={(e) => obj[key].inputOnChange(prevState => {
              return {...prevState, [key]: e.target.value}
            })}
            id={obj[key].labelFor}
            type={obj[key].type}
            size={obj[key].size}
          />
        </>}
      </div>}</span>)}
      <Button btnStyle={'primary'} type={'submit'} text={"Join"}/>
      <Button btnStyle={'secondaryOutline'} type={'reset'} text={"Cancel"}/>
    </form>
  </>);
}
