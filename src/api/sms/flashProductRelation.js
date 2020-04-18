import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api-marking/marking/SmsFlashPromotionProductRelation/list',
    method:'get',
    params:params
  })
}
export function createFlashProductRelation(data) {
  return request({
    url:'/api-marking/marking/SmsFlashPromotionProductRelation/create',
    method:'post',
    data:data
  })
}
export function deleteFlashProductRelation(id) {
  return request({
    url:'/api-marking/marking/SmsFlashPromotionProductRelation/delete/'+id,
    method:'post'
  })
}
export function updateFlashProductRelation(id,data) {
  return request({
    url:'/api-marking/marking/SmsFlashPromotionProductRelation/update/'+id,
    method:'post',
    data:data
  })
}
