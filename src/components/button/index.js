const ButtonComponent = ({text, classProps}) => {
    return (
        <button style={{...classProps, border:"none"}}>{text}</button>
    )
}
export default ButtonComponent;