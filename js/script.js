// // new Date()  Komputerdagi vaqtni olib beradi
// // getHours() - soatni olib beradi
// // getMinutes() - minutni olib beradi
// // getSeconds() - secundni olib beradi


const hour = document.querySelector('.h'),
  min = document.querySelector('.m'),
  sec = document.querySelector('.s'),
  hourNum = document.querySelector('.hours'),
  minNum = document.querySelector('.minutes');

function clock() {
  let time = new Date(),
    seconds = time.getSeconds(),
    minutes = time.getMinutes(),
    hours = time.getHours()

    sec.style.transform = `rotate(${seconds * 6}deg)`;
    min.style.transform = `rotate(${minutes * 6}deg)`;
    hour.style.transform = `rotate(${hours * 30}deg)`;
  setTimeout(() => {
    clock();
  }, 1000);

  hourNum.innerHTML = hours < 10 ? "0" +hours : hours
  hourNum.innerHTML = minutes < 10 ? "0" +minutes : minutes
}
clock();

const tabsItem = document.querySelectorAll('.tabsItem'),
   tabsContentItem = document.querySelectorAll('.tabsContentItem');

   for (let i = 0; i < tabsItem.length; i++) {
       tabsItem[i].addEventListener('click', (e) => {
        e.preventDefault()
        for (let j = 0; j < tabsContentItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
       })     
   }
