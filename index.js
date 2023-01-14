const input = document.getElementById("input")
const bottom = document.getElementById("bottom")

function mysearch() {
    bottom.innerHTML = ""
    const value = input.value.toLowerCase();
    emojiList.map(ele => {
        let hello = ele.tags.includes(value)
        if (hello) {
            bottom.innerHTML += `<tr class="tablerow">
            <td id="emojiIcon">${ele.emoji}</td>
            <td id="emojiTags">${ele.aliases}</td>
            <td id="emojiTags">${ele.description}</td>
            </tr>`
        }
    })
}

search()
function search() {
    bottom.innerHTML = ""
    const value = input.value.toLowerCase();
    emojiList.map(eles => {
        eles.tags.map(ele => {
            let hello = ele.startsWith(value)
            console.log(hello)
            if (hello) {
                bottom.innerHTML += `
            <tr class="tablerow">
            <td id="emojiIcon">${eles.emoji}</td>
            <td id="emojiTags">${eles.aliases}</td>
            <td id="emojiTags">${eles.description}</td>
            </tr>
            `
            }
        }
        )
    })
}