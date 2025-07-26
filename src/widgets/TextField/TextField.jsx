import './TextField.scss';

const TextField = ({ placeholder, type, value, onChange }) => {
    return (
        <input type={type}
            required
            className='textfield'
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
    )
}

export default TextField;