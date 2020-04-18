import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api-order/oms/OmsOrderReturnApply/list',
    method:'get',
    params:params
  })
}

export function deleteApply(params) {
  return request({
    url:'/api-order/oms/OmsOrderReturnApply/delete',
    method:'post',
    params:params
  })
}
export function updateApplyStatus(id,data) {
  return request({
    url:'/api-order/oms/OmsOrderReturnApply/update/status/'+id,
    method:'post',
    data:data
  })
}

export function getApplyDetail(id) {
  return request({
    url:'/api-order/oms/OmsOrderReturnApply/'+id,
    method:'get'
  })
}
