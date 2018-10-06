function getValueCaro () {
  let m = +document.getElementById('mm').value
  let n = +document.getElementById('nn').value
  return {m, n}
}
function getClickCaro (e) {
  // console.log(e)
  alert(e.id)
}
function handleClickRender () {
  let {m, n} = getValueCaro()
  let map = document.getElementById('map')
  map.style['grid-template-columns'] = `repeat(${n}, auto)`
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map.innerHTML += `<div onClick='getClickCaro(this)' id='${i}-${j}' class='item'>${i}-${j}</div>`
    }
  }
}
