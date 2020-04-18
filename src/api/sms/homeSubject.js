import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendSubject/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendSubject/update/recommendStatus',
    method:'post',
    data:data
  })
}

export function deleteHomeSubject(data) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendSubject/delete',
    method:'post',
    data:data
  })
}

export function createHomeSubject(data) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendSubject/create',
    method:'post',
    data:data
  })
}

export function updateHomeSubjectSort(params) {
  return request({
    url:'/api-marking/marking/SmsHomeRecommendSubject/update/sort/'+params.id,
    method:'post',
    params:params
  })
}
