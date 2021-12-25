import styles from './FormCreator.module.css';
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
  }} noValidate={true} autoComplete={"new-password"} className={`d-flex flex-row flex-wrap ${styles.gap} ${styles.padding}`}>
    {Object.keys(layout).map((key) => (<div key={layout[key].id}
                                            className={`${layout[key].displayLabel ? 'd-flex justify-contents-space-between' : ''} ${styles[layout[key].className]}`}>
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
    <div className={'d-flex justify-contents-space-between width-100'}>
      {buttons.map(button => (
        <Button key={button.id} text={button.btnText} type={button.btnType} btnStyle={button.btnStyle}
                onClick={button.onClick}
                disabled={button.disabled}
                size={button.size}/>))}
    </div>
  </form>)
}
