import React, {useState} from 'react'



const Carinput = (props) => {
    const [focus, setFocus] = useState(false);
    const {label, errorMessage, helpfulInfo, onChange, id, ...inputProps} = props

    const handleFocused = (e) =>{
        setFocus(true);
    }
  return (
    <div className='formInput'>
        <label> {label}</label>
        <input {...inputProps} 
            onChange={onChange} 
            checked={props.value} // Bind the checked value to props.value
            onBlur={handleFocused}
            focus = {focus.toString()}
        />
        <span className='errorMessage'>{errorMessage}</span>
        <span className="helpInfo">{helpfulInfo}</span>
    </div>
  )
}

export default Carinput