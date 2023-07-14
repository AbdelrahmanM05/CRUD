var productName = document.querySelector("#productName");
var productPrice = document.querySelector("#projectPrice");
var productCategory = document.querySelector("#productCategory");
var productDesc = document.querySelector("#projectDesc");
var productsList;
var addProduct = document.querySelector("#addProduct");
if (localStorage.getItem("productsList") == null) {
    productsList = [];
} else {
    productsList = JSON.parse(localStorage.getItem("productsList"))
    display(productsList);
}
function creatProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        desc: productDesc.value
    };
    productsList.push(product);
    localStorage.setItem("productsList", JSON.stringify(productsList));
    display(productsList);
    clearForm();
};

addProduct.addEventListener("click", function () {
    creatProduct();
});

function display(list) {
    cartona = ``;
    for (var i = 0; i < list.length; i++) {
        cartona += `<tr>
            <td>${i + 1}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td>${list[i].category}</td>
            <td>${list[i].desc}</td>
            <td><button class="btn btn-sm btn-warning">Update</button></td>
            <td><button class="btn btn-sm btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
        </tr>` ;
    }
    document.querySelector("#productRow").innerHTML = cartona;
};

function clearForm() {
    productName.value = '';
    productPrice.value = '';
    productCategory.value = '';
    productDesc.value = '';
}


function deleteProduct(index) {
    productsList.splice(index, 1);
    localStorage.setItem("productsList", JSON.stringify(productsList));
    display(productsList);
}

function search() {

}