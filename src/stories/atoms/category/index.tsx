import { useState } from "react";

const Category = () => {
  const localCategory = ['서울','경기','전라','경상','제주']
  const [, setActiveCategory]  = useState(0);

  return (
    <div className="flex gap-4 overflow-auto flex-wrap">
      {localCategory.map((local, index) => (
        <span 
          key={local} 
          className="px-30 py-9 text-18 font-semibold text-black border-2 border-subColor rounded-30 hover:bg-subColor hover:text-white focus:bg-subColor focus:text-white"
          onClick={() => setActiveCategory(index)}
          >
          {local}
        </span>
      ))}
      
    </div>
  )
}

export default Category;
