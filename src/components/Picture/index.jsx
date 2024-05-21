import '../../styles/Picture/Picture.css'

function Picture({ firstText, secondText, alt, src }) {
    return (
        <div className="picture">
            <img src={src} alt={alt} className="picture-pic" />
            <p className="picture-firsttext">{firstText}</p>
            <p className="picture-secondtext">{secondText}</p>
        </div>
    )
}

export default Picture
