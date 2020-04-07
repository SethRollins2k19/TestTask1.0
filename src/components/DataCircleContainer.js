import {changeCount, getItems} from "../actions/CircleActions";
import {connect} from "react-redux";
import {DataCircleComponent} from "./DataCircle";
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch =>{
    return {
        changeCount: (newCount) => dispatch(changeCount(newCount)),
        getItems: () => dispatch(getItems())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataCircleComponent)