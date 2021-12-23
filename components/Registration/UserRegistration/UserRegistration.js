import Button from "../../../shared-components/Button";
import Input from "../../../shared-components/Input";
import {useState} from "react";
import Label from "../../../shared-components/Label";
import styles from "./UserRegistration.module.css";

export default function UserRegistration(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");

  console.log("re render");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(gender);
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type={"text"}
                id={'firstName'}
                size={"md"}
              />
            </div>

            <div className={styles.formElement}>
              <Label text={"Last Name:"} htmlFor={"lastName"}/>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type={"text"}
                size={"md"}
                id={'lastName'}
              />
            </div>
          </div>

          <div className={styles.formElement}>
            <Label text={"Email:"} htmlFor={"email"}/>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
              size={"lg"}
              id={"email"}
            />
          </div>

          <div className={styles.formElement}>
            <Label text={"D.O.B:"} htmlFor={"dob"}/>
            <Input
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              type={"date"}
              size={"lg"}
              id={"dob"}
            />
          </div>
          <div style={{padding: "0.3em"}}>
            <Label text={"Gender:"}/>
            <Input
              type="radio"
              value={gender}
              name={'gender'}
              id={"male"}
              onChange={(e) => setGender("Male")}
            />{" "}
            <Label text={"Male"} htmlFor={'male'}/>
            <Input
              type="radio"
              value={gender}
              name={"gender"}
              id={"female"}
              onChange={(e) => setGender("Female")}
            />{" "}
            <Label text={"Female"} htmlFor={"female"}/>
            <Input
              type="radio"
              value={gender}
              name={"gender"}
              id={"other"}
              onChange={(e) => setGender("Others")}
            />{" "}
            <Label text={"other"} htmlFor={"other"}/>
          </div>

          <div className={styles.formElement}>
            <Label text={"Address:"} htmlFor={"address"}/>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type={"text"}
              size={"lg"}
              id={"address"}
            />
          </div>

          <div className={styles.formElement}>
            <Label text={"Phone:"} htmlFor={"phone"}/>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type={"text"}
              size={"lg"}
              id={"phone"}
            />
          </div>

          <div className={styles.formElement}>
            <Label text={"Password:"} htmlFor={"password"}/>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              size={"lg"}
              id={"password"}
            />
          </div>

          <div className={styles.formElement}>
            <Label text={"Confirm Password:"} htmlFor={"confirmPassword"}/>
            <Input
              value={matchPassword}
              onChange={(e) => setMatchPassword(e.target.value)}
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
              onClick={() => console.log(firstName + " " + lastName)}
            />
            <Button
              text={"Cancel"}
              type={"button"}
              btnStyle={"secondaryOutline"}
              onClick={() => console.log(firstName + " " + lastName, gender)}
            />
          </div>
        </form>

      </div>
    </div>
  );
}
