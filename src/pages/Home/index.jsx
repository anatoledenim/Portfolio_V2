import '../../styles/Home/Home.css'
import PresentationText from '../../components/PresentationText'
import Title from '../../components/Title'
import Picture from '../../components/Picture'
import Logo from '../../assets/433834089_6972521689518552_1582897856840331800_n.jpg'

function Home() {
    return (
        <div className="home">
            <PresentationText />
            <div className="home-title">
                <Title
                    firstTitle="développeur"
                    secondTitle="fullstack"
                    separation="|"
                    thirdTitle="portfolio"
                />
            </div>
            <div className="home-bottom">
                <a href="@" className="home-cvlink">
                    Vers mon CV
                </a>
                <Picture
                    src={Logo}
                    alt="logo"
                    firstText="Anatole   Denimal |  Développeur  Web |  Portfolio"
                    secondText="p ex ea cvdvvxdfvx<"
                />
            </div>
        </div>
    )
}

export default Home
