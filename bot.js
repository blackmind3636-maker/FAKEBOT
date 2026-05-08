const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Halo, perkenalkan saya XBOT. Siapa Anda ?",
        `Halo ${data?.nama}, berapa usia kamu ?`,
        `Hmm anda bohong 🤪, hobi kamu apa ?`,
        `Wowowo sama denganku, aku juga hobi ${data?.hobi}. Apa kamu punya pasangan ?`,
        `mantap ${data?.pacar}, nice kalo gitu. thanks ya `,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if (jawaban.value.length < 1) return alert ("Silahkan mengisi jawaban dahulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(10px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Arigatou Gozaimasu ${usersData[0]} 😁 udah main ke XBOT
    kali-kali kita ${usersData[2]} bareng ya. Silahkan klik kembali SEND untuk memulai ke tampilan awal.`
    jawaban.value = "siap thanks juga!"
}

function botEnd() {
    alert (`Terimakasih ${usersData[0]} sudah mengisi jawaban anda di XBOT, anda akan diarahkan kembali ke tampilan awal.`)
    window.location.reload()
}