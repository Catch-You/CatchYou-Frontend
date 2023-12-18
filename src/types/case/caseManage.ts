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

// 내가 담당한 사건 리스트
export type TMyCaseList = {
  criminalListDtos: TMyCase[];
  confirmedCriminalListDtos?: TMyCase[];
}

// 내가 담당한 사건 정보
export type TMyCase = {
  id: number;
  userId: number;
  userName: string;
  title: string;
  crimeType: string;
  status: string;
  selectStatus: string;
}

// 사건 코드 응답
export type TCaseCodeRes = {
  success: boolean;
  statusCode: number;
  errorCode: string;
  reason: string;
  time: string;
  path: string;
}