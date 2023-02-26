import './Button.css'
import '../../Style/Typograph.css'
import '../../Style/Color.css'

function LargeButton(props) {
    return(
        <div className='large-button-div'>
            <span className='body-r-bold'>{props.label}</span>
        </div>
    );
}

export default LargeButton