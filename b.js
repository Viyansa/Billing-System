
    const products = [
        { name: "Laptop", price: 500 },
        { name: "Mobile", price: 200 },
        { name: "Headphone", price: 200},
        { name: "Keyboard", price: 15 },
        { name: "Mouse", price: 80 },
        { name: "Monitor", price: 120 },
        { name: "Tablet", price: 250 },
        { name: "Printer", price: 100 }
    ];
    function calculate() {
        const productInputs = document.querySelectorAll(".product");
        const quantities = document.querySelectorAll(".quantity");
        let total = 0;
        productInputs.forEach((input, index) => {
            const selectedProduct = input.value;
            const quantity = Number(quantities[index].value);
            if (selectedProduct && quantity > 0) {
                const price = products
                    .map(product => {
                        if (product.name === selectedProduct) {
                            return product.price;
                        }
                    })
                    .filter(price => price !== undefined)[0];

                const amount = price * quantity;

                total = total + amount;
            }
        });

        document.getElementById("output").innerHTML =
            "Total Price:RS" + total;
    }

