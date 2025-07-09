let queryStrings = new URLSearchParams(window.location.search)
let parametrosGet = Object.fromEntries(queryStrings.entries())
console.log(typeof parametrosGet)
console.log(parametrosGet)
if ('tema' in parametrosGet) {
  let tema = parametrosGet.tema
  document.getElementById('tema').setAttribute('href', `./css/${tema}.css`)

  let url = window.location.href
  console.log(url)
  if (!url.includes('index.html')) {
    document
      .getElementById('atras')
      .setAttribute('href', `index.html?tema=${tema}`)
  }
  let select = document.getElementById('theme')
  if (select) {
    select.value = tema
  }
  for (let i = 1; i <= 10; i++) {
    let link = document.getElementById(`v${i}`)
    if (link) {
      // Extrae el nombre de la página, por si en la URL del link ya hay un ?tema viejo
      let href = link.getAttribute('href').split('?')[0]
      link.setAttribute('href', `${href}?tema=${tema}`)
    }
  }
}
