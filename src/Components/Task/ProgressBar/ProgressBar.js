import './ProgressBar.css'
import '../../../Style/Typograph.css'
import '../../../Style/Color.css'

function ProgressBar(props) {

    let step = props.step;
    return(
        <div className='progress-div'>
            <ProgressCell selected={true} step="1"/>
            <hr/>
            <ProgressCell selected={step > 1 ? true : false} step="2"/>
            <hr/>
            <ProgressCell selected={step > 2 ? true : false} step="3"/>
            <hr/>
            <ProgressCell selected={step > 3 ? true : false} step="4"/>
        </div>
    );
}

function ProgressCell(props) {
    const isSelected = props.selected;
    const step = props.step;

    return(
        <div className={`${isSelected ? "progress-cell-filled" : "progress-cell-unfilled"}`}>
            <span className='title-xs' style={{lineHeight: "3rem"}}>{step}</span>
        </div>
    );
}

export default ProgressBar