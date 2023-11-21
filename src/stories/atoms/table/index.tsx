import { caseList } from "../../../types/case/caseList";

type TTable = {
  title: string[],
  data: caseList[],
}

const Table = ({title, data}: TTable) => {
  return (
    <table className="table-fixed w-full border-separate rounded-12 overflow-hidden">
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
        {data.map((item, index) => (
          <tr>
            <td className="px-12 py-14 text-center text-mainColor text-15" key={`${item}+${index}`}>
              {item.no}
            </td>
            <td className="px-12 py-14 text-center text-mainColor text-15" key={`${item}+${index}`}>
              {item.public? '공개' : '비공개'}
            </td>
            <td className="px-12 py-14 text-center text-mainColor text-15" key={`${item}+${index}`}>
              {item.montage}
            </td>
          </tr>
        ))}
    </tbody>
  </table>
  )
}

export default Table;