const t = document.getElementById("text")
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
async function textChange(txts) {
	output = ""
	for (let txt = 0; txt < txts.length; txt++) {
		output += txts[txt]
		console.log(output)
		t.innerHTML = output
		await wait(30)
	}
}
const dialogues = [
	"hello",
	"why r u here",
	"pls go",
	"pls",
	"why",
	"uhhh",
	"nothin to see here",
	"trust",
	"100%",
	"why u still here",
	"shoo shoo go away",
	"or else..",
	"pls go",
	"pls",
	"pls",
	"pls",
	"plz",
	"hmmmmmmm",
	"if you dont close the tab..",
	"something bad will happen...",
	"you will have to see the forbidden page..",
	"very evil........",
	"so if i were u",
	"i would shut down my device RIGHT now..",
	".......",
	"still no",
	"boi",
	"wawawewaawwaewaeaweaweaw",
	"ok bye folk"
]
async function dialogue() {
	for (let i = 0; i < dialogues.length; i++) {
		textChange(dialogues[i])
		console.log("ok")
		await wait(5000)
	}
	window.location.href = "https://youtu.be/Ho9azZi9EuM"
}
dialogue()
