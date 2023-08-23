hours = document.getElementById("hours")
minutes = document.getElementById("minutes")
seconds = document.getElementById("seconds")
ampmEl = document.getElementById("ampm")


const updateClock = () => {

    const date = new Date()
    let h = date.getHours()
    let m = date.getSeconds()
    let s = date.getMinutes()
    let ampm = "am"
    if (h > 12) {
        h = h - 12
        ampm = "pm"
    }

    h = h < 10 ? "0" + h : h    
    m = m < 10 ? "0" + m : m    
    s = s < 10 ? "0" + s : s    

    hours.innerText = h  
    minutes.innerText= m 
    seconds.innerText = s 
    ampmEl.innerText = ampm

    setTimeout(()=>{
        updateClock()
    },1000)
}

updateClock()
