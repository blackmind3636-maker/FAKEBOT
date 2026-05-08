console.log ("oke")

const endpoint = "https://api-apis-guru.translate.goog/v2/list.json?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc"

fetch(endpoint)
.then((data) => data.json())
.then((result) => console.log (result))