const form = document.querySelector(".frm-new-item")



function displayItem(items) {
  const tbody = document.querySelector("tbody.stock");
  tbody.innerHTML = ``;
  items.forEach((item, index) => {
    tbody.innerHTML += `
        <tr>
            <td>${item.itemName}</td>
            <td>${item.price}ksh</td>
            <td>${item.qty}</td>
            <td>
                <button onclick="removeItem(${index})" class="btn btn-icon">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `;
  });
}

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     items.push({
//       itemName: event.target.itemName.value,
//       price: event.target.price.value,
//       qty: event.target.qty.value,
//     });

//     displayItem(items);
// })

// function removeItem(index) {
//     items.splice(index, 1)
//     displayItem(items)
// }


// function searchItems(hint) {
//     const searchedItems = items.filter(
//         (item) => item.itemName.toLowerCase().includes(hint.replace(/\s+/g, " ").toLowerCase())
//     )
//     displayItem(searchedItems)
// }

const searchInput = document.querySelector("#input-search")


searchInput.addEventListener("input", (event) => {
    searchItems(event.target.value);
})

document.addEventListener("DOMContentLoaded", () => {

    fetch("http://localhost:3001/items", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify({
        //     itemName: "Jacket",
        //     price: 0,
        //     qty: 0
        // })
        
        })
          .then((response) => response.json())
          .then((data) => displayItem(data));
        
});


/**
 * POST
 * DELETE
 *
 */
