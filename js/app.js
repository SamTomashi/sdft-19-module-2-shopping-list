// document.addEventListener("DOMContentLoaded", () => {
    
// })

const form = document.querySelector(".frm-new-item")
const items = []

form.addEventListener("submit", (event) => {
    event.preventDefault()
    // const item = {
    //     itemName: event.target.itemName.value,
    //     price: event.target.price.value,
    //     qty: event.target.qty.value
    // }

    items.push({
      itemName: event.target.itemName.value,
      price: event.target.price.value,
      qty: event.target.qty.value,
    });

    displayItem(items);

})

function removeItem(event) {
    event.target.closest("tr").remove();
    console.log(items)
}


function displayItem(items) {
    const tbody = document.querySelector("tbody.stock")
    items.forEach((item) => {
        tbody.innerHTML += `
        <tr>
            <td>${item.itemName}</td>
            <td>${item.price}ksh</td>
            <td>${item.qty}</td>
            <td>
                <button onclick="removeItem(event)" class="btn btn-icon">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `;
    })
    
}