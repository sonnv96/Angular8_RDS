import { UserRole } from './roles.model';

export class User {
  id?: string;
  username?: string;
  userId?: string;
  userGuid?: string;
  fullName?: string;
  userRoles?: UserRole[];
  permission?: string;
  position?: string;
  email?: string;
  phone?: string;
  genderId?: number;
  latestLoggedin?: string;
  isActive?: boolean;
  qrCode?: string;

  constructor(user?) {
    user = user || {};
    this.id = user.id;
    this.username = user.username;
    this.userId = user.userId;
    this.userGuid = user.userGuid;
    this.fullName = user.fullName;
    this.userRoles = user.userRoles || [];
    this.permission = user.permission;
    this.position = user.position;
    this.email = user.email;
    this.phone = user.phone;
    this.genderId = user.genderId;
    this.latestLoggedin = user.latestLoggedin;
    this.isActive = user.isActive;
    this.qrCode = user.qrCode || '';
  }
}

export class UserResponse {
  total: number;
  users: User[];
}
