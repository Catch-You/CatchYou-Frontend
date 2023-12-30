import { useEffect, useState } from "react";
import { TMyCase } from "../../../types/case/caseManage";
import { useNavigate } from "react-router-dom";
import { getMyCaseDetail, getMyCaseDetailDirector } from "../../../api/caseApi";
import { useRecoilValue } from "recoil";
import { userInfoState, userState } from "../../../recoil";

type TTable = {
  title: string[],
  caseList: TMyCase[];
  isOpenCase: boolean | undefined;
}

const Table = ({title, caseList, isOpenCase}: TTable) => {
  const navigator = useNavigate();
  const auth = useRecoilValue(userState)
  const role = useRecoilValue(userInfoState).role === "ROLE_POLICE" ? true : false;
  const [filteredData, setFilteredData] = useState<TMyCase[]>([]);
  const [caseId, setCaseId] = useState<number | null>(null);

  const handleCaseClick = (caseId: number) => {
    setCaseId(caseId);
  }

  useEffect(() => {
  if (caseId !== null) {
    if (role) {
      getMyCaseDetail(caseId, auth)
      .then((data) => {
        const caseDetail = data.data
        navigator(`/my/police/${caseId}`, { state: { caseDetail } });
      })
    }
    if (!role) {
      getMyCaseDetailDirector(caseId, auth)
      .then((data) => {
        const caseDetail = data.data
        navigator(`/my/director/${caseId}`, { state: { caseDetail } });
      })
    }
  }
}, [caseId]);

  useEffect(() => {
    const myList = caseList;
    let newFilteredData;

    if (isOpenCase === undefined) {
      newFilteredData = myList;
    } else {
      newFilteredData = myList && isOpenCase
        ? myList.filter((item) => item.status === "Y")
        : myList.filter((item) => item.status === "N");
    }
      setFilteredData(newFilteredData);
  }, [caseList, isOpenCase]);

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
        <tr key={`${item.id} ${item.title}`} className="cursor-pointer" onClick={() => handleCaseClick(item.id)}>
          <td className="px-12 py-14 text-center text-mainColor text-15" key={`${item.id}+${item.userName}`}>
            {item.criminalCode}
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