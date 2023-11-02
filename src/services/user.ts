import { request } from '@/utils/request'
import type { User } from '@/types/user'

export const loginByPassword = (mobile: string, password: string) =>
  request<User>('login/password', 'post', { mobile, password })
