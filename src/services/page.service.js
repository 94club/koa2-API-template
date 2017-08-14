/**
 * 取得分页的开始结束位置
 * @param {*当前第几页} pageNum
 * @param {*一页多少条数据} itemsPerPage  
 */
export let pageInfo = (pageNum = 1, itemsPerPage = 10) => {
  const page = Number(pageNum)
  const start = (page - 1) * itemsPerPage
  const end = page * itemsPerPage
  return {start, end}
}
