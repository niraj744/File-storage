export interface Create {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export interface UpdateUser {
  firstName: string;
  lastName: string;
  username: string;
  imageUrl: string;
}
