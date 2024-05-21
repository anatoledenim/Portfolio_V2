import '../../styles/Title/Title.css'

function Title({ firstTitle, secondTitle, separation, thirdTitle }) {
    return (
        <div className="title">
            <h1 className="title-first">{firstTitle}</h1>
            <div className="title-div">
                <h2 className="title-second">{secondTitle}</h2>
                <span className="title-separation">{separation}</span>
                <h3 className="title-third">{thirdTitle}</h3>
            </div>
        </div>
    )
}

export default Title
