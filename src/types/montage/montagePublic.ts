// 지역별 몽타주 목록
export type TMontagePublic = {
  robbery?: TMontageCrime[];
  murder?: TMontageCrime[];
  theft?: TMontageCrime[];
  sexCrime?: TMontageCrime[];
  arson?: TMontageCrime[];
  fraud?: TMontageCrime[];
  drug?: TMontageCrime[];
  gamble?: TMontageCrime[];
  economicCrime?: TMontageCrime[];
}

// 몽타주 데이터
export type TMontageCrime = {
  id: number;
  userId: number;
  userName: string;
  title: string;
  crimeType: string;
  region: string;
  montageId: number;
}

// 몽타주 상세 데이터
export type TMontageDetail = {
  id: number;
  userId: number;
  userName: string;
  title: string;
  summary: string;
  description: string;
  region: string;
  crimeType: string;
  createdAt?: string;
  updatedAt: string;
  montageId: number;
}

// 생성된 몽타주 리스트 조회
export type TMontageListAll = {
  interviewMontageListDtos: {id: number}[];
}
