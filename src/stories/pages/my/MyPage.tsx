import Table from "../../atoms/table";
import SmallSelector from "../../molecules/smallselector";


const MyPage = () => {
  return (
    <div className="flex flex-col">
    <div className="flex justify-end"><SmallSelector text="공개여부" options={["공개","비공개"]} /></div>
    <div className="ml-60 text-18 font-semibold mt-20">사건 목록</div>
    <div className="ml-60">
      <Table title={['사건번호', '공개여부', '몽타주']} data={[
      {
        no: '2023고단454',
        public: true,
        montage: 'https://sdfsdf//12234/23dsjfkdfsdf',
      },
      {
        no: '2013고단254',
        public: false,
        montage: 'https://sdfsdf//4234/11dsjfkd',
      },   
    ]}/>
    </div>
    </div>
  )
}

export default MyPage;