import Button from "../../../shared-components/Button";
import Input from "../../../shared-components/Input";
import {useState} from "react";

export default function UserRegistration(props) {
  const [text, setText] = useState('');

  return <>
    <Input value={text} onChange={e => setText(e.target.value)}/>
    <Button text={'Submit'} type={'button'} btnStyle={'primaryOutline'} onClick={() => console.log(text)}/>
  </>
}
