import { LucideIcon } from "lucide-react";

export enum InputType {
  show = "text",
  hide = "password",
}
// User actions types
export interface Create {
  kindId: string;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
}
// Navigation linkes types
export interface Links {
  id: number;
  name: string;
  url: string;
  icon: LucideIcon;
}
// File actions types
export interface CreateFile {
  fileName: string;
  fileType: string;
  size: number;
  userId: string;
  fileUrl: string;
}
// MONGOOSE TYPES
export interface User {
  _id: string;
  kindId: string;
  email: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  favorites: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface FileTypes {
  _id: string;
  fileName: string;
  fileType: string;
  size: number;
  userId: User;
  isPassword: boolean;
  fileUrl: string;
  createdAt: string;
  password?: string;
  updatedAt: string;
  __v: number;
  slug: string;
}
export interface Datatype {
  countDocuments: number;
  files: FileTypes[];
}
export interface File {
  _id: string;
  fileName: string;
  fileType: string;
  size: number;
  userId: string;
  isPassword: boolean;
  fileUrl: string;
  createdAt: string;
  password?: string;
  updatedAt: string;
  __v: number;
  slug: string;
}
export interface UpdateFile {
  password: string;
  isPassword: boolean;
}
export interface Emailtypes {
  email: string;
  username: string;
  fileID: string;
}
