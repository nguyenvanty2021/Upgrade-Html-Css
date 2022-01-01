const ImageComponent = ({srcProps, altProps, classProps}) => {
    return (
        <img srcSet={`${srcProps} 2x`} style={{...classProps, objectFit:"contain"}} alt={altProps}/>
    )
}
export default ImageComponent;