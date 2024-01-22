import { request } from '@/utils/request'
import type {
  CodeType,
  User,
  UserInfo,
  PatientList,
  Patient
} from '@/types/user'

// 密码登录
export const loginByPassword = (mobile: string, password: string) =>
  request<User>('login/password', 'post', { mobile, password })

// 发送验证码
export const sendMobileCode = (mobile: string, type: CodeType) =>
  request('code', 'GET', { mobile, type })

// 短信登录
export const loginByMobile = (mobile: string, code: string) =>
  request<User>('login', 'POST', { mobile, code })

// 获取用户信息
export const getUserInfo = () => request<UserInfo>('/patient/myUser')

// 获取患者列表信息
export const getPatientList = () => request<PatientList>('/patient/mylist')

// 添加患者
export const addPatient = (patient: Patient) => {
  request('/patient/add', 'post', patient)
}

// 编辑患者
export const editPatient = (patient: Patient) => {
  request('/patient/update', 'put', patient)
}

// 删除患者
export const delPatient = (id: String) => {
  request(`/patient/del/${id}`, 'DELETE')
}
