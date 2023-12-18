// mock 데이터 : 몽타주 전체 조회 
export type caseList = {
  no: string;
  public: boolean;
  montage: string;
}

// 사건 등록에 보내는 데이터 
export type TCaseForm = { 
  title: string,
  region: string,
  crimeType: string,
  description: string,
  summary: string,
}

// 사건 수정에 보내는 데이터 
export type TCaseModifyForm = { 
  title: string,
  status: string,
  region: string,
  crimeType: string,
  description: string,
  summary: string,
}