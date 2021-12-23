import Button from "../../../shared-components/Button";
import Input from "../../../shared-components/Input";
import {useState} from "react";
import Label from "../../../shared-components/Label";
import styles from "./UserRegistration.module.css";

export default function UserRegistration(props) {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [dob, setDob] = useState("");
  // const [gender, setGender] = useState("");
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [matchPassword, setMatchPassword] = useState("");
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div className={styles.formpage}>
      <div className={styles.formbox}>
        <div>
          <h2 className={styles.h2}>Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{display: "flex"}}>
            <div className={styles.formElement}>
              <Label text={"First Name:"} htmlFor={"firstName"}/>
              <Input
                value={formState.firstName}
                onChange={(e) => setFormState(prevFormState => {
                  return {
                    ...prevFormState, firstName: e.target.value
                  }
                })}
                type={"text"}
                id={'firstName'}
                size={"md"}
              />
            </div>

            <div className={styles.formElement}>
              <Label text={"Last Name:"} htmlFor={"lastName"}/>
              <Input
                value={formState.lastName}
                onChange={(e) => setFormState(prevFromState => {
                  return {
                    ...prevFromState, lastName: e.target.value
                  }
                })}
                type={"text"}
                size={"md"}
                id={'lastName'}
              />
            </div>
          </div>

          <div className={styles.formElement}>
            <Label text={"Email:"} htmlFor={"email"}/>
            <Input
              value={formState.email}
              onChange={(e) => setFormState(prevFormState => {
                return {
                  ...prevFormState, email: e.target.value
                }
              })}
              type={"email"}
              size={"lg"}
              id={"email"}
            />
          </div>

          <div className={styles.formElement}>
            <Label text={"D.O.B:"} htmlFor={"dob"}/>
            <Input
              value={formState.dob}
              onChange={(e) => setFormState(prevFormState => {
                return {...prevFormState, dob: e.target.value}
              })}
              type={"date"}
              size={"lg"}
              id={"dob"}
            />
          </div>
          <div style={{padding: "0.3em"}}>
            <Label text={"Gender:"}/>
            <Input
              type="radio"
              value={formState.gender}
              name={'gender'}
              id={"male"}
              onChange={(e) => setFormState(prevFormState => {
                return {
                  ...prevFormState, gender: "Male"
                }
              })}
            />{" "}
            <Label text={"Male"} htmlFor={'male'}/>
            <Input
              type="radio"
              value={formState.gender}
              name={"gender"}
              id={"female"}
              onChange={(e) => setFormState(prevFormState => {
                return {
                  ...prevFormState, gender: "Female"
                }
              })}
            />{" "}
            <Label text={"Female"} htmlFor={"female"}/>
            <Input
              type="radio"
              value={formState.gender}
              name={"gender"}
              id={"other"}
              onChange={(e) => setFormState(prevFormState => {
                return {
                  ...prevFormState, gender: "Others"
                }
              })}
            />{" "}
            <Label text={"other"} htmlFor={"other"}/>
          </div>

          <div className={styles.formElement}>
            <Label text={"Address:"} htmlFor={"address"}/>
            <Input
              value={formState.address}
              onChange={(e) => setFormState(prevFormState => {
                return {...prevFormState, address: e.target.value}
              })}
              type={"text"}
              size={"lg"}
              id={"address"}
            />
          </div>

          <div className={styles.formElement}>
            <Label text={"Phone:"} htmlFor={"phone"}/>
            <Input
              value={formState.phone}
              onChange={(e) => setFormState(prevFormState => {
                return {
                  ...prevFormState,
                  phone: e.target.value
                }
              })}
              type={"text"}
              size={"lg"}
              id={"phone"}
            />
          </div>

          <div className={styles.formElement}>
            <Label text={"Password:"} htmlFor={"password"}/>
            <Input
              value={formState.password}
              onChange={(e) => setFormState(prevFormState => {
                return {
                  ...prevFormState, password: e.target.value
                }
              })}
              type={"password"}
              size={"lg"}
              id={"password"}
            />
          </div>

          <div className={styles.formElement}>
            <Label text={"Confirm Password:"} htmlFor={"confirmPassword"}/>
            <Input
              value={formState.confirmPassword}
              onChange={(e) => setFormState(prevFormState => {
                return {
                  ...prevFormState, confirmPassword: e.target.value
                }
              })}
              type={"password"}
              size={"lg"}
              id={"confirmPassword"}
            />
          </div>
          <div className={styles.formElement}>
            <Button
              text={"Join"}
              type={"submit"}
              btnStyle={"primary"}
            />
            <Button
              text={"Cancel"}
              type={"button"}
              btnStyle={"secondaryOutline"}
            />
          </div>
        </form>

      </div>
    </div>
  );
}
