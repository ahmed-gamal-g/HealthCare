import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
const DataSlider1 = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faStethoscope}/>,
        title: 'Diagnostics',
        description: 'Some quick example text to build on the card title and make upthe bulk of the cards content.',
        btnSlider:'View More'
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faCameraRetro}/>,
        title: 'Treatment',
        description: 'Some quick example text to build on the card title and make upthe bulk of the cards content.',
        btnSlider:'View More'
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faSyringe}/>,
        title: 'Surgery',
        description: 'Some quick example text to build on the card title and make upthe bulk of the cards content.',
        btnSlider:'View More'
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faTruckMedical}/>,
        title: 'Vaccine',
        description: 'Some quick example text to build on the card title and make upthe bulk of the cards content.',
        btnSlider:'View More'
    },
]
export default DataSlider1