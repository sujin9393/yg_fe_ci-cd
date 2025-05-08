export interface UserInfo {
  userId: number;
  nickName: string;
  accountNumber: string;
  profileImageUrl: string;
}

export interface MyPageInfo extends UserInfo {
  name: string;
  email: string;
  phoneNumber: string;
}
