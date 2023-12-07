export const montageMock:TMontageMock[] = [
  {
    crimeId: 1,
    crimeCategory: '살인',
    criminals: [
      {
        id: 2,
        imgSrc: 'https://blogpfthumb-phinf.pstatic.net/MjAyMzA4MTVfMjgx/MDAxNjkyMDM0MjE3MzQ4._BVCNU9m5pBQ6jQzxHRkRwNtiuKck6RwevKeji6AcmMg.mCqu36OBQR7mHkS4uKd7_9hFOCo7JqkwpPWiFICjhucg.JPEG.myday0827/IMG_0137.jpg/IMG_0137.jpg?type=w161'
      },
      {
        id: 1,
        imgSrc: 'https://i1.sndcdn.com/avatars-Vzymc2ag9gBojMxy-eR55vw-t240x240.jpg'
      },
      {
        id: 5,
        imgSrc: 'https://i1.sndcdn.com/avatars-Vzymc2ag9gBojMxy-eR55vw-t240x240.jpg'
      },
      {
        id: 9,
        imgSrc: 'https://i1.sndcdn.com/avatars-Vzymc2ag9gBojMxy-eR55vw-t240x240.jpg'
      },
      {
        id: 9,
        imgSrc: 'https://i1.sndcdn.com/avatars-Vzymc2ag9gBojMxy-eR55vw-t240x240.jpg'
      },
    ]
  },
]

type TMontageMock = {
  crimeId: number,
  crimeCategory: string
  criminals: TCriminals[],
}

type TCriminals = {
  id: number,
  imgSrc: string,
}