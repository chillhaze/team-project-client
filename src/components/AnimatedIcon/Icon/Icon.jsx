import { ReactComponent as Rectangle } from './rectangle.svg';
import Svg from '../Svg';
import IconThumb from './Icon.styled';

const Icon=({url})=> {
    return (
        <IconThumb>
            <div>
                <Rectangle/>
            </div>
            <div>
                <Svg url={ url } /> 
            </div>
        </IconThumb>
    );
}

export default Icon;