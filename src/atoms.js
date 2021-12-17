import { atom } from 'recoil'

export const userState = atom({
  key: 'cuurentUser',
  default: {
    Bio: 'Voluptatem impedit distinctio autem qui qui.',
    avatar: 'https://cdn.fakercloud.com/avatars/otozk_128.jpg',
    createdAt: '2021-12-08T23:23:38.178Z',
    id: '2',
    jobTitle: 'Corporate Optimization Director',
    profile: {
      email: 'Donny28@hotmail.com',
      firstName: 'Hazel',
      lastName: 'Ruecker',
      username: 'Buford_Watsica'
    }
  }
})
