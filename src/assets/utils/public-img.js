// public图片
const getBgUrl = (url, baseFile) => `url(${process.env.BASE_URL}imgs${baseFile}${url})`
const getImgUrl = (url, baseFile) => `${process.env.BASE_URL}imgs${baseFile}${url}`

// 如获取 public imgs Home 下的 B01.svg
// getImgUrl('/B01.svg', '/Home')
export {
    getImgUrl,
    getBgUrl
}
