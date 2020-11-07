setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')

function setClock() {
    const currentDate = new Date()
    const secsRatio = currentDate.getSeconds() / 60
    const minsRatio = (secsRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minsRatio + currentDate.getHours()) / 12
    setRotation(secHand, secsRatio)
    setRotation(minHand, minsRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()