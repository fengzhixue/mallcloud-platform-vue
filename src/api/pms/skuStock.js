import request from '@/utils/request'
export function fetchList(pid,params) {
  return request({
    url:'/api-goods/pms/PmsSkuStock/'+pid,
    method:'get',
    params:params
  })
}

export function update(pid,data) {
  return request({
    url:'/api-goods/pms/PmsSkuStock/update/'+pid,
    method:'post',
    data:data
  })
}
