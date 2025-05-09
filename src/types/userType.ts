export interface UserInfo {
  userId: number;
  nickname: string;
  accountBank: string;
  accountNumber: string;
  profileImageUrl: string;
}

export interface MyPageInfo extends UserInfo {
  name: string;
  email: string;
  phoneNumber: string;
}
