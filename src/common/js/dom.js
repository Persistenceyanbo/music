/**
 * 增加class属性
 * @param el 表示dom元素
 * @param className
 */
export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
/**
 * 是否是class
 * @param el
 * @param className
 * @returns {boolean}
 */
//   // 含有className 首尾有空白符或者什么都没有的的字符串 ^|\\s 表示什么都没有（起始位置）或者 空白符 \\s+|$ 表示 空白符或者什么都没有（结束位置）

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
