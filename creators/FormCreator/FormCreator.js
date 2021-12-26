import Label from "../../shared-components/Label";
import Input from "../../shared-components/Input";
import Button from "../../shared-components/Button";

export default function FormCreator({onSubmit, onReset, config, formState, formClassName}) {
  const {layout, buttons} = config;
  return (<form onSubmit={(e) => {
    e.preventDefault();
    onSubmit(e);
  }} onReset={(e) => {
    e.preventDefault();
    onReset(e);
  }} noValidate={true} autoComplete={"new-password"}
                className={formClassName}>
    {Object.keys(layout).map((key) => (<div key={layout[key].id} className={layout[key].className}>
      {layout[key].type === 'radio' ? <>
        {layout[key].displayLabel && <Label text={layout[key].labelText} className={layout[key].labelClassName}/>}
        {layout[key].buttons.map(button => (<span key={button.id}
                                                  className={typeof button.className === 'function' ? button.className() : button.className}>
                <Label text={button.labelText} htmlFor={button.labelFor} className={button.labelClassName}/>
                <Input
                  checked={button.inputValue === formState[key]}
                  type={layout[key].type}
                  minVal={button.minVal}
                  maxVal={button.maxVal}
                  value={button.inputValue}
                  name={key}
                  className={button.inputClassName}
                  id={button.labelFor}
                  onChange={(e) => button.inputOnChange(prevState => ({...prevState, [key]: e.target.value}))}
                />
              </span>))}
      </> : <>
        {layout[key].displayLabel &&
          <Label text={layout[key].labelText} className={layout[key].labelClassName} htmlFor={layout[key].labelFor}/>}
        <Input
          value={layout[key].inputValue}
          minVal={layout[key].minVal}
          maxVal={layout[key].maxVal}
          onChange={(e) => layout[key].inputOnChange(prevState => ({...prevState, [key]: e.target.value}))}
          id={layout[key].labelFor}
          type={layout[key].type}
          pattern={layout[key].pattern}
          required={layout[key].required}
          placeholder={layout[key].placeholder}
          className={layout[key].inputClassName}
        />
      </>}
    </div>))}
    <div className={buttons.className}>
      {buttons.data
        .map(button => (<Button key={button.id} text={button.btnText} type={button.btnType} btnStyle={button.btnStyle}
                                onClick={button.onClick}
                                disabled={button.disabled}
                                className={button.className}/>))}
    </div>
  </form>)
}
