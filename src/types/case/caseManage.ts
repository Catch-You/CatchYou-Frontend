// 사건 등록
export type TCaseRegist = {
  title: string;
  summary: string;
  description: string;
  region: string;
  crimeType: string;
}

// 사건 상세 Response
export type TCaseDetail = {
  id: number;
  userId: number;
  userName: string;
  title: string;
  summary: string;
  description: string;
  criminalCode: string;
  region: string;
  crimeType: string;
  status: string;
  selectStatus: string;
  createdAt?: string;
  updatedAt: string;
  montageId?: number;
  directorId?: number;
  directorName?: string;
}