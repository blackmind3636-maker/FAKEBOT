const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        "halo, perkenalkan saya Xbot. Siapa Anda ?",
        `halo ${data?.nama}, berapa usia kamu ?`,
        `Owhh ${data?.usia}, hobi kamu apa ?`,
        `wowowo sama denganku, aku juga hobi ${data?.hobi}. Apa kamu punya pasangan ?`,
        `mantap ${data?.pacar}, nice kalo gitu. thanks ya `,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
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
    console.log ({ usersData: usersData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Arigatou Gozaimasu 😁 ${usersData[0]} udah main ke XBOT
    kali-kali kita main ${usersData[2]} bareng ya!`
    jawaban.value = "siap thanks juga!"
}

function botEnd() {
    window.location.reload()

}