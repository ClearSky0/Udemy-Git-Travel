import '../styles/styles.css'
import 'lazysizes' /* doesn't need to be instantiated */
import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from './modules/RevealOnScroll.js'
import StickyHeader from './modules/StickyHeader.js'
import ClientArea from './modules/ClientArea.js'

new ClientArea
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let mobileMenu = new MobileMenu();
let modal
console.log('testing')

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
      if (typeof modal=="undefined") {
        import(/* webpackChunkName: "modal" */'./modules/Modal.js').then(x => {
          modal = new x.default()
          setTimeout(() => modal.openTheModal(), 20)
        }).catch(() => console.log("There was a problem."))
      } else {
        modal.openTheModal()
      }
    })
})

if (module.hot) {
  module.hot.accept()
} 