import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api-marking/marking/SmsHomeBrand/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/api-marking/marking/SmsHomeBrand/update/recommendStatus',
    method:'post',
    data:data
  })
}

export function deleteHomeBrand(data) {
  return request({
    url:'/api-marking/marking/SmsHomeBrand/delete',
    method:'post',
    data:data
  })
}

export function createHomeBrand(data) {
  return request({
    url:'/api-marking/marking/SmsHomeBrand/create',
    method:'post',
    data:data
  })
}

export function updateHomeBrandSort(params) {
  return request({
    url:'/api-marking/marking/SmsHomeBrand/update/sort/'+params.id,
    method:'post',
    params:params
  })
}
