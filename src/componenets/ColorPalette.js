import { useSelector } from "react-redux";
import '../App.css';

export default function ColorPalette() {
    const finalColor=useSelector(state=>state.colorPalette.value);
    return (
        <div className="felx w-1/2 rounded-lg text-center"
             style={{backgroundColor:finalColor}}
        >
            ColorPalette
        </div>
    )
}





// 3 is there anyway i could create those reducers automatic since they are just boilerplate code

