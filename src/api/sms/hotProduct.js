import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendProduct/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendProduct/update/recommendStatus',
    method:'post',
    data:data
  })
}

export function deleteHotProduct(data) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendProduct/delete',
    method:'post',
    data:data
  })
}

export function createHotProduct(data) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendProduct/create',
    method:'post',
    data:data
  })
}

export function updateHotProductSort(params) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendProduct/update/sort/'+params.id,
    method:'post',
    params:params
  })
}
