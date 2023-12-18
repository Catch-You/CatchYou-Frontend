import { useEffect, useState } from "react";
import { TMyCase, TMyCaseList } from "../../../types/case/caseManage";

type TTable = {
  title: string[],
  userRole: string,
  caseList: TMyCaseList;
  isOpenCase: boolean;
}

const Table = ({title, caseList, isOpenCase}: TTable) => {

  const [filteredData, setFilteredData] = useState<TMyCase[]>([]);

  useEffect(() => {
    const myList = caseList.criminalListDtos;
    // isOpenCase 상태에 따라 필터링
    const newFilteredData = myList && isOpenCase
      ? myList.filter((item) => item.status === "Y")
      : myList.filter((item) => item.status === "N");
    setFilteredData(newFilteredData);
  }, [caseList, isOpenCase]);

  console.log("filteredData", filteredData);

  return (
    <table className="table-fixed border-separate rounded-12 overflow-hidden w-full max-w-820 mt-8">
      <thead className="bg-superSubColor h-45">
      <tr>
        {title.map((item, index) => (
          <th key={`${item}+${index}`}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
      
    <tbody className="bg-gray-50">
      {filteredData.map((item, ) => (
        <tr key={`${item.id} ${item.title}`}>
          <td className="px-12 py-14 text-center text-mainColor text-15" key={`${item.id}+${item.userName}`}>
            {item.id}
          </td>
          <td className="px-12 py-14 text-center text-mainColor text-15" key={`${item.id}+${item.crimeType} td`}>
            {item.title}
          </td>
          <td className="px-12 py-14 text-center text-mainColor text-15" key={`${item.id}+${item.title} td`}>
            {item.status === "N"? "비공개" : "공개"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table;