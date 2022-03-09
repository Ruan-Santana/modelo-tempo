function load(){
  //puxando o id das divs
  let horas = document.getElementById('horas')
  let img = document.querySelector('img')

   //puxando horas
  let data = new Date()
  var hora = data.getHours()

  horas.innerHTML = `<strong>Agora é ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}<br> data: ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}</strong>`
//mudança nas imagens de acordo com a hora
  if(hora >= 0 && hora <= 12){
    img.src = 'https://images.pexels.com/photos/3030459/pexels-photo-3030459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  } else if(hora >= 12 && hora <= 17){
    img.src = 'https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    document.body.style.background = 'rgba(173, 173, 0, 0.87)'
  } else {
    img.src = 'https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    document.body.style.background = 'rgba(38, 0, 82, 0.678)'
  }
}
