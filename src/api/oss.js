import request from '@/utils/request'
export function policy() {
  return request({
    url:'/api-user/aliyun/oss/policy',
    method:'get',
  })
}
