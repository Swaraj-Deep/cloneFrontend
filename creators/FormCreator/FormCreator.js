import Label from "../../shared-components/Label";
import Input from "../../shared-components/Input";
import Button from "../../shared-components/Button";

export default function FormCreator({onSubmit, onReset, config, formState}) {
  const {layout, buttons} = config;
  return (<form onSubmit={(e) => {
    e.preventDefault();
    onSubmit(e);
  }} onReset={(e) => {
    e.preventDefault();
    onReset(e);
  }} noValidate={true} autoComplete={"new-password"}>
    {Object.keys(layout).map((key) => (<div key={layout[key].id}>
      {layout[key].type === 'radio' ? <>
        {layout[key].displayLabel && <Label text={layout[key].labelText}/>}
        {layout[key].buttons.map(button => (<span key={button.id}>
                <Input
                  checked={button.inputValue === formState[key]}
                  type={layout[key].type}
                  value={button.inputValue}
                  name={key}
                  id={button.labelFor}
                  onChange={(e) => button.inputOnChange(prevState => ({...prevState, [key]: e.target.value}))}
                />
                <Label text={button.labelText} htmlFor={button.labelFor}/>
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
    {buttons.map(button => (
      <Button key={button.id} text={button.btnText} type={button.btnType} btnStyle={button.btnStyle}
              onClick={button.onClick}
              disabled={button.disabled}/>))}
  </form>)
}
