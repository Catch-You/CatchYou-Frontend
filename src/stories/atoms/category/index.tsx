import { useState } from "react";
import { TYPE_OF_REGION } from "../../../constants/case";


type TCategory = {
  setRegion: (region: string) => void;
}

const Category = ({setRegion}:TCategory) => {

  const regionOptions = Object.values(TYPE_OF_REGION);
  const [activeCategory, setActiveCategory]  = useState(0);


  const handleRegionChange = (local: string, index: number) => {
    setActiveCategory(index);
    setRegion(local);
  };
  return (
    <div className="flex gap-4 overflow-auto flex-wrap">
      {regionOptions.map((local, index) => (
        <span 
          key={local} 
                className={`${activeCategory === index ? 'bg-subColor text-white' : 'text-black bg-white'} px-20 py-8 text-15 font-medium border border-subColor rounded-30 `}
          onClick={() => handleRegionChange(local, index)}
          >
          {local}
        </span>
      ))}
      
    </div>
  )
}

export default Category;
