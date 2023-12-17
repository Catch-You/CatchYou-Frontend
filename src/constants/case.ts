// 지역 분류
export const TYPE_OF_REGION = {
  SEOUL: "서울",
  INCHOEN: "인천",
  GYEONGGI: "경기",
  GANGWON: "강원",
  CHUNGCHEONG: "충청",
  JEOLLA: "전라",
  DAEGU: "대구",
  BUSAN: "부산",
  GYEONGSANG: "경상",
  JEJU: "제주"
} as const

// 사건 범죄 종류
export const TYPE_OF_CRIME = {
  ROBBERY: "강도",
  MURDER: "살인",
  THEFT: "절도",
  SEXCRIME: "성범죄",
  ARSON: "방화",
  FRAUD: "사기",
  DRUG: "마약",
  GAMBLING: "도박",
  SPECIALPOLICELAW: "특경법"
} as const