const menuItems = {
  hamburguer: [
    {
      id: "the-gramercy-tavern-burger-4-pack",
      img: "./assets/burguers/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg",
      nome: "Gramercy Tavern",
      descricao: "The Gramercy Tavern Burger - 4 Pack",
      valor: 99,
    },
    {
      id: "shake-shack-shackburger-8-pack",
      img: "./assets/burguers/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.jpg",
      nome: "Shake Shack",
      descricao: "Shake Shack ShackBurger® - 8 Pack",
      valor: 49,
    },
    {
      id: "gotts-cheeseburger-kit-for-4",
      img: "./assets/burguers/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg",
      nome: "Gott's Roadside",
      descricao: "Gott's Complete Cheeseburger Kit for 4",
      valor: 99,
    },
    {
      id: "le-big-matt-kit-for-6",
      img: "./assets/burguers/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg",
      nome: "Emmy Squared",
      descricao: "Le Big Matt Burger Kit for 6",
      valor: 99,
    },
    {
      id: "shake-shack-shackburger-16-pack",
      img: "./assets/burguers/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.jpg",
      nome: "Shake Shack",
      descricao: "Shake Shack Shackburger® - 16 Pack",
      valor: 89,
    },
    {
      id: "21-usda-prime-burgers-pack-of-18-8oz-each",
      img: "./assets/burguers/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.jpg",
      nome: "Peter Luger Steak House",
      descricao: "USDA Prime Burgers - Pack of 18 (8oz each)",
      valor: 175.95,
    },
    {
      id: "double-stack-burger-kit-for-4",
      img: "./assets/burguers/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg",
      nome: "Holeman & Finch",
      descricao: "Double Stack Burger Kit for 4",
      valor: 79,
    },
    {
      id: "goldbelly-burger-bash-pack",
      img: "./assets/burguers/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg",
      nome: "Pat LaFrieda Meats",
      descricao: 'Goldbelly "Burger Bash" Pack',
      valor: 109,
    },
    {
      id: "burger-au-poivre-kit-4-pack",
      img: "./assets/burguers/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg",
      nome: "Raoul's",
      descricao: "Burger Au Poivre Kit - 4 Pack",
      valor: 99,
    },
    {
      id: "goldbelly-burger-blend-4-lbs",
      img: "./assets/burguers/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg",
      nome: "Flannery Beef",
      descricao: "Goldbelly Burger Blend - 4 lbs.",
      valor: 79,
    },
    {
      id: "gotts-complete-cheeseburger-kit-for-8",
      img: "./assets/burguers/gotts-complete-cheeseburger-kit-for-8.092aa049d00286fa1733d720decc782e.jpg",
      nome: "Gott's Roadside",
      descricao: "Gott's Complete Cheeseburger Kit for 8",
      valor: 149,
    },
    {
      id: "gramercy-tavern-burger-kielbasa-combo",
      img: "./assets/burguers/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-47.jpg",
      nome: "Gramercy Tavern",
      descricao: "Gramercy Tavern Burger + Kielbasa Combo",
      valor: 149,
    },
  ],
  pizza: [
    {
      id: "2-lou-malnatis-deep-dish-pizzas",
      img: "./assets/pizzas/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg",
      nome: "Lou Malnati's Pizza",
      descricao: "2 Lou Malnati's Deep Dish Pizzas",
      valor: 67.99,
    },
    {
      id: "23699-choose-your-own-thin-crust-pizza-4-pack",
      img: "./assets/pizzas/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg",
      nome: "Bartolini's",
      descricao: "Choose Your Own Thin Crust Pizza - 4 Pack",
      valor: 139,
    },
    {
      id: "choose-your-own-new-haven-style-pizza-6-pack",
      img: "./assets/pizzas/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg",
      nome: "Zuppardi's Apizza",
      descricao: "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
      valor: 79,
    },
    {
      id: "6-lou-malnatis-deep-dish-pizzas",
      img: "./assets/pizzas/6-lou-malnatis-deep-dish-pizzas.f59993181da5d295668c8a6fb856055e.jpg",
      nome: "Lou Malnati's Pizza",
      descricao: "6 Lou Malnati's Deep Dish Pizzas",
      valor: 116.99,
    },
    {
      id: "wood-fired-pizzas-best-seller-4-pack",
      img: "./assets/pizzas/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg",
      nome: "Pizzeria Bianco",
      descricao: "Wood Fired Pizzas Best Seller - 4 Pack",
      valor: 129,
    },
    {
      id: "236991-choose-your-own-deep-dish-pizza-3-pack",
      img: "./assets/pizzas/choose-your-own-deep-dish-pizza-3-pack.4111791511244a4946bb5c9ad2c17da9.jpg",
      nome: "Bartolini's",
      descricao: "Choose Your Own Deep Dish Pizza - 3 Pack",
      valor: 139,
    },
    {
      id: "choose-your-own-detroit-style-pizza-3-pack",
      img: "./assets/pizzas/detroit-style-pizza-choose-your-own-3-pack.6b6f4909ffd4066d5471e70eac5c3d89.jpg",
      nome: "Emmy Squared",
      descricao: "Detroit-Style Pizza - Choose Your Own 3 Pack",
      valor: 89,
    },
    {
      id: "brooklyn-pizza-choose-your-own-5-pack",
      img: "./assets/pizzas/brooklyn-pizza-choose-your-own-5-pack.edc4f476a75207d0af840ce6f225f2b3.jpg",
      nome: "Paesan's Pizza",
      descricao: "Brooklyn Pizza - Choose Your Own 5 Pack",
      valor: 69,
    },
    {
      id: "choose-your-own-chicago-deep-dish-pizza-4-pack",
      img: "./assets/pizzas/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg",
      nome: "My Pi Pizza",
      descricao: "Chicago Deep Dish Pizza - 4 Pack",
      valor: 129,
    },
    {
      id: "4-lou-malnatis-deep-dish-pizzas",
      img: "./assets/pizzas/4-lou-malnatis-deep-dish-pizzas.8c79eb7506b5752ab3387d8174246b17.jpg",
      nome: "Lou Malnati's Pizza",
      descricao: "4 Lou Malnati's Deep Dish Pizzas",
      valor: 96.99,
    },
    {
      id: "tonys-custom-pizza-3-pack",
      img: "./assets/pizzas/choose-your-own-pizza-3-pack.fcf7a43e38593007ef2857fe16d6dd26.jpg",
      nome: "Tony's Pizza Napoletana",
      descricao: "Choose Your Own Pizza - 3 Pack",
      valor: 99,
    },
    {
      id: "plain-thin-crust-pizza-4-pack",
      img: "./assets/pizzas/plain-thin-crust-pizza-4-pack.5540e9d166db2f0853643c6517e4a225.jpg",
      nome: "The Columbia Inn",
      descricao: "Plain Thin Crust Pizza - 4 Pack",
      valor: 79,
    },
  ],
  churrasco: [
    {
      id: "ribs-brisket-and-burnt-ends",
      img: "./assets/churrasco/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg",
      nome: "Joe's KC BBQ",
      descricao: "Joe's KC Ribs, Brisket & Burnt Ends",
      valor: 110.99,
    },
    {
      id: "005-kings-carolina-oink-sampler",
      img: "./assets/churrasco/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg",
      nome: "Kings BBQ",
      descricao: "Carolina BBQ Oink Sampler",
      valor: 89,
    },
    {
      id: "texas-monthlys-1-bbq-brisket",
      img: "./assets/churrasco/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.jpg",
      nome: "Snow's BBQ",
      descricao: "Texas Monthly's #1 BBQ Brisket",
      valor: 199,
    },
    {
      id: "whole-brisket-texas-bbq-sauce",
      img: "./assets/churrasco/whole-brisket-texas-barbecue-bbq-sauce.e07ee4818b20ed43d217bf67fedd41ce.jpg",
      nome: "Franklin Barbecue",
      descricao: "Whole Brisket + Texas Barbecue BBQ Sauce",
      valor: 249,
    },
    {
      id: "whole-texas-smoked-brisket",
      img: "./assets/churrasco/whole-texas-smoked-brisket.a5558a25381e271408e197936e7985d8.jpg",
      nome: "Terry Black's Barbecue",
      descricao: "Whole Texas Smoked Brisket",
      valor: 189,
    },
    {
      id: "mini-trinity-bbq-combo-brisket-ribs-and-links",
      img: "./assets/churrasco/mini-trinity-bbq-combo-brisket-ribs-and-links.245582f593bf64b23b57dfca2be18cfd.jpg",
      nome: "Bludso's BBQ",
      descricao: "Mini Trinity BBQ Combo - Brisket, Ribs & Links",
      valor: 139,
    },
    {
      id: "235203-blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo",
      img: "./assets/churrasco/blue-smoke-baby-back-ribs-backyard-barbecue-chicken-combo.a95a3e632ae324f719738a2a5c1dff6e.jpg",
      nome: "Blue Smoke",
      descricao: "Blue Smoke Baby Back Ribs + Backyard Barbecue Chicken Combo",
      valor: 129,
    },
    {
      id: "006-kings-meat-lovers-special",
      img: "./assets/churrasco/bbq-meat-lovers-special-for-10.36ca670fda4bfa783c2ea9165e068d26.jpg",
      nome: "Kings BBQ",
      descricao: "BBQ Meat Lovers Special for 10",
      valor: 139,
    },
    {
      id: "the-big-ugly-bbq-dinner-for-6",
      img: "./assets/churrasco/the-big-ugly-bbq-dinner-for-6.2dfae7818811adddce85cc1a910881a0.jpg",
      nome: "Ugly Drum",
      descricao: "The Big Ugly BBQ Dinner for 6",
      valor: 229,
    },
    {
      id: "17796-mighty-quinns-bbq-sampler-pack",
      img: "./assets/churrasco/mighty-quinns-bbq-sampler-pack.1bfe4a0665edc565756f5241bf25840e.jpg",
      nome: "Mighty Quinn's BBQ",
      descricao: "Mighty Quinn's BBQ Sampler Pack",
      valor: 169,
    },
    {
      id: "post-oak-smoked-half-brisket",
      img: "./assets/churrasco/post-oak-smoked-usda-prime-half-brisket.6f17178dde7d806670bcc73ff11762b3.jpg",
      nome: "Southside Market & Barbeque",
      descricao: "Post Oak Smoked USDA Prime Half Brisket",
      valor: 109,
    },
    {
      id: "best-of-texas-bbq-combo-serves-14",
      img: "./assets/churrasco/best-of-texas-bbq-combo-serves-14.7ae90266335e539c67e77fed14b43029.jpg",
      nome: "Snow's BBQ",
      descricao: "Best of Texas BBQ Combo - Serves 14",
      valor: 269,
    },
  ],
};

document.getElementById("sendOrderButton").addEventListener("click", sendOrderViaWhatsApp);

function renderCategory(category) {
  const titleRender = document.getElementById("titleRender");
  const menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = "";

  let categoryName = "";
  switch (category) {
    case "hamburguer":
      categoryName = "Hambúrguer";
      break;
    case "pizza":
      categoryName = "Pizza";
      break;
    case "churrasco":
      categoryName = "Churrasco";
      break;
    default:
      categoryName = "Menu";
  }

  titleRender.textContent = `-${categoryName}-`;

  menuItems[category].forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.img}" alt="${item.nome}">
      <div class="card-body">
        <h3>${item.nome}</h3>
        <p>${item.descricao}</p>
        <p class="price">R$ ${item.valor.toFixed(2)}</p>
      </div>
      <button id="addToCartButton${index}" data-id="${item.id}">Adicionar ao Carrinho</button>
    `;

    menuContainer.appendChild(card);

    // Adiciona event listener ao botão após ele ser adicionado ao DOM
    document
      .getElementById(`addToCartButton${index}`)
      .addEventListener("click", (event) => {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
      });
  });
}

let cart = [];

function addToCart(id) {
  const item = Object.values(menuItems).flat().find(item => item.id === id);
  const existingItem = cart.find((cartItem) => cartItem.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  const message = document.getElementById("message");
  message.classList.remove("hidden");
  message.style.opacity = 1;

  setTimeout(() => {
    message.style.opacity = 0;
    message.addEventListener(
      "transitionend",
      () => {
        message.classList.add("hidden");
      },
      { once: true }
    );
  }, 2000);

  updateCart();
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalValue = document.getElementById("totalValue");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.valor * item.quantity;
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
          <div class="product-item">
            <div class="info">
              <img class="img-cart" src="${item.img}" alt="${
      item.nome
    }" style="width: 50px;">
                <div class="product-info">
                    <h4>${item.nome}</h4>
                    <p>R$ ${item.valor.toFixed(2)} x ${item.quantity}</p>
                </div>
            </div>
            <div class="quantity">
              <button onclick="changeQuantity('${
                item.id
              }', -1)"><i class="fa-solid fa-minus"></i></button>
              <span>${item.quantity}</span>
              <button onclick="changeQuantity('${
                item.id
              }', 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
      `;
    cartItems.appendChild(itemDiv);
  });

  totalValue.textContent = total.toFixed(2);
}

function changeQuantity(id, delta) {
  const item = cart.find((cartItem) => cartItem.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter((cartItem) => cartItem.id !== id);
    }
    updateCart();
    updateCartCount();
  }
}

// Event listeners
document.getElementById("cart").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

document.getElementById("closeSidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("open");
});

document.getElementById("checkout").addEventListener("click", () => {
  document.getElementById("checkoutForm").classList.remove("hidden");
});

document.getElementById("closeCheckout").addEventListener("click", () => {
  document.getElementById("checkoutForm").classList.add("hidden");
});

document.getElementById('formCheckout').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Captura os dados do formulário de checkout
  const checkoutData = {
      nome: document.getElementById('name').value,
      endereco: document.getElementById('address').value,
      whatsapp: document.getElementById('whatsapp').value,
      pagamento: document.getElementById('payment').value,
      valorTroco: document.getElementById('cashAmount').value || null, // Inclui valor de troco se disponível
  };

  // Junta os dados do carrinho com os dados do checkout
  const orderData = {
      checkoutData: checkoutData,
      carrinho: cart, // Array com os itens do carrinho
  };

  // Envia os dados para o backend ou exibe no console
  console.log(orderData);

  // Exemplo de envio usando fetch
  fetch('URL_DO_SEU_BACKEND', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Pedido enviado com sucesso:', data);
      alert('Pedido enviado com sucesso!');
      // Limpa o formulário e carrinho após o pedido ser enviado
      document.getElementById('formCheckout').reset();
      cart = [];
      updateCart();
      updateCartCount();
  })
  .catch(error => {
      console.error('Erro ao enviar o pedido:', error);
      alert('Erro ao enviar o pedido. Por favor, tente novamente.');
  });
});

// Event listener para exibir ou ocultar o campo "Valor em Dinheiro" conforme a forma de pagamento
document.getElementById('payment').addEventListener('change', function() {
  const cashAmountLabel = document.getElementById("cashAmountLabel");
  const cashAmountInput = document.getElementById("cashAmount");

  if (this.value === "dinheiro") { 
    cashAmountLabel.classList.remove("hidden");
    cashAmountInput.classList.remove("hidden");
    cashAmountInput.required = true;
  } else {
    cashAmountLabel.classList.add("hidden");
    cashAmountInput.classList.add("hidden");
    cashAmountInput.required = false;
    cashAmountInput.value = "";
  }
});

function sendOrderViaWhatsApp() {
  // Captura os dados do formulário de checkout
  const nome = document.getElementById('name').value;
  const endereco = document.getElementById('address').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const pagamento = document.getElementById('payment').value;
  const cashAmount = document.getElementById('cashAmount').value;

  // Monta a mensagem com os dados do formulário
  let message = `Olá! Gostaria de fazer um pedido:\n\n`;
  message += `*Meus dados:*\n\n`
  message += `*Nome:* ${nome}\n`;
  message += `*Endereço:* ${endereco}\n`;
  message += `*WhatsApp:* ${whatsapp}\n`;
  message += `*Forma de Pagamento:* ${pagamento}\n`;
  
  // Adiciona o valor de troco se o pagamento for em dinheiro e um valor tiver sido inserido
  if (pagamento === "dinheiro" && cashAmount) {
    message += `Valor para Troco: R$ ${parseFloat(cashAmount).toFixed(2)}\n\n`;
  }

  message += `---------------------------\n`

  // Itens do pedido
  message += `\nItens:\n`;
  cart.forEach((item) => {
    message += `${item.nome} - R$ ${item.valor.toFixed(2)} x ${item.quantity} = R$ ${(item.valor * item.quantity).toFixed(2)}\n`;
  });

  const total = cart.reduce((acc, item) => acc + item.valor * item.quantity, 0);
  message += `\nTotal: R$ ${total.toFixed(2)}`;

  // Codifica a mensagem e prepara o link do WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "SEU_NUMERO_DO_WHATSAPP"; //Exemplo: 5511999999999
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Abre o link do WhatsApp
  window.open(whatsappURL, "_blank");
}

// Adiciona o evento de envio para o WhatsApp no botão de envio do pedido
document.getElementById("sendOrderButton").addEventListener("click", sendOrderViaWhatsApp);

// Initial render
renderCategory("hamburguer");
