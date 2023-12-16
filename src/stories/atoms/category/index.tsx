import { useState } from "react";
import { TYPE_OF_REGION } from "../../../constants/case";

const Category = () => {

  const regionOptions = Object.values(TYPE_OF_REGION);
  const [, setActiveCategory]  = useState(0);

  return (
    <div className="flex gap-4 overflow-auto flex-wrap">
      {regionOptions.map((local, index) => (
        <span 
          key={local} 
          className="px-20 py-8 text-15 font-medium text-black border bg-white border-subColor rounded-30 hover:bg-subColor hover:text-white focus:bg-subColor focus:text-white"
          onClick={() => setActiveCategory(index)}
          >
          {local}
        </span>
      ))}
      
    </div>
  )
}

export default Category;
