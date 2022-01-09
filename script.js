const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Breathe in'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Suspend'

        setTimeout(() => {
            text.innerText = 'Breathe out'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)
