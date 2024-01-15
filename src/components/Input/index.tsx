import './Input.css'

const Input = ({ type, name, placeholder } : { type : string, name : string, placeholder : string }) => {
  return (
    <div className='input'>
        <input type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default Input