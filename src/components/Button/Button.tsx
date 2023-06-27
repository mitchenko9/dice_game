import style from './Button.module.css';

type ButtonType = {
    text?: string,
    onClick: () => void,
    disabled?: boolean,
    isSetings?: boolean,
}

export function Button(props: ButtonType) {
    const {
        text,
        disabled = false,
        isSetings = false,
        onClick,
    } = props;

    let classes = disabled
        ? style.btn + ' ' + style.disabled
        : style.btn;

    if (isSetings) classes += ' ' + style.btnSet;

    return (
        <button 
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}