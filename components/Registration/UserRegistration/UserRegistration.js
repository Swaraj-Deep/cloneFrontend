import Button from "../../../shared-components/Button";
import Input from "../../../shared-components/Input";
import { useState } from "react";
import Label from "../../../shared-components/Label";
import styles from "./UserRegistration.module.css";

export default function UserRegistration(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");

  return (
    <div className={styles.formpage}>
      <div className={styles.formbox}>
        <div>
          <h2 className={styles.h2}>Register</h2>
        </div>

        <div style={{ display: "flex" }}>
          <div className={styles.formElement}>
            <Label text={"First Name:"} htmlFor={""} />
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type={"text"}
              size={"md"}
            />
          </div>

          <div className={styles.formElement}>
            <Label text={"Last Name:"} htmlFor={""} />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type={"text"}
              size={"md"}
            />
          </div>
        </div>

        <div className={styles.formElement}>
          <Label text={"Email:"} htmlFor={""} />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            size={"lg"}
          />
        </div>

        <div className={styles.formElement}>
          <Label text={"D.O.B:"} htmlFor={""} />
          <Input
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            type={"date"}
            size={"lg"}
          />
        </div>
        <div style={{ padding: "0.3em" }}>
          <Label text={"Gender:"} htmlFor={""} />
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
          <input
            type="radio"
            value="Other"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Other
        </div>

        <div className={styles.formElement}>
          <Label text={"Address:"} htmlFor={""} />
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type={"text"}
            size={"lg"}
          />
        </div>

        <div className={styles.formElement}>
          <Label text={"Phone:"} htmlFor={""} />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type={"text"}
            size={"lg"}
          />
        </div>

        <div className={styles.formElement}>
          <Label text={"Password:"} htmlFor={""} />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            size={"lg"}
          />
        </div>

        <div className={styles.formElement}>
          <Label text={"Confirm Password:"} htmlFor={""} />
          <Input
            value={matchPassword}
            onChange={(e) => setMatchPassword(e.target.value)}
            type={"password"}
            size={"lg"}
          />
        </div>
        <div className={styles.formElement} style={{ "align-items": "center" }}>
          <Button
            text={"Join"}
            type={"button"}
            btnStyle={"primaryOutline"}
            onClick={() => console.log(firstName + " " + lastName)}
          />
        </div>
      </div>
    </div>
  );
}
