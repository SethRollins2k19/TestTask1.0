import { getItems} from "../actions/CircleActions";
import {connect} from "react-redux";
import DataCircleComponent from "./DataCircle";
const mapStateToProps = state => {
    return {
        items: state.items,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getItems: () => dispatch(getItems())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataCircleComponent)