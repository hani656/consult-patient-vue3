import { request } from '@/utils/request'
import type { CodeType, User } from '@/types/user'

// 密码登录
export const loginByPassword = (mobile: string, password: string) =>
  request<User>('login/password', 'post', { mobile, password })

// 发送验证码
export const sendMobileCode = (mobile: string, type: CodeType) =>
  request('code', 'GET', { mobile, type })
