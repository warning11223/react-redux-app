import Loader from 'react-loader-spinner';
import {useDispatch, useSelector} from "react-redux";

const Spin = (props) => {
    const spinner = useSelector(state => {
        return state.loaderReducer.loading;
    })
    const dispatch = useDispatch();



    return (
        <div className='loader-styles'>
            <Loader
                type='TailSpin'
                color='#00BFFF'
                height={100}
                width={100}
                visible={spinner}
            />
        </div>
    )
}

export default Spin;