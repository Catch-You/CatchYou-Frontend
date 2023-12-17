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

export type TMontageCrime = {
  id: number;
  userId: number;
  userName: string;
  title: string;
  crimeType: string;
  region: string;
  montageId: number;
}