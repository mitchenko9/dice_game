import style from './Input.module.css';

type InputType = {
    value: string,
    id: number,
    onChange: (i: number, val: string) => void;
    border: string,
}

export function Input(props: InputType) {
    const {
        border,
        value,
        onChange,
        id,
    } = props;

    const className = border
        ? style.input + ' ' + style[border]
        : style.input;

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(id, e.target.value);
    }
    
    return (
        <input 
            className={className}
            value={value}
            onChange={handleChangeValue}
        />
    )
}