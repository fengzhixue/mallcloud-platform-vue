import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/api-generator/generator/list',
    method:'get',
    params:params
  })
}

export function codeGens(tableName) {
  return request({
    url:'/api-generator/generator/code/'+tableName,
    method:'get',
  })
}

export function createGen(data) {
  return request({
    url:'/api-generator/generator/create',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/api-generator/generator/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/api-generator/generator/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function deleteGen(id) {
  return request({
    url:'/api-generator/generator/delete/'+id,
    method:'get',
  })
}

export function getGen(id) {
  return request({
    url:'/api-generator/generator/'+id,
    method:'get',
  })
}

export function updateGen(id,data) {
  return request({
    url:'/gen/update/'+id,
    method:'post',
    data:data
  })
}

