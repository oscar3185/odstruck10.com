const menuItems = [
  { type: "Kebab", nom: "Kebab Merguez", prix: 5.5 },
  { type: "Kebab", nom: "Kebab Poulet", prix: 6.0 },
  { type: "Kebab", nom: "Kebab Royal", prix: 12.0 },
  { type: "Kebab", nom: "Kebab Végétarien", prix: 5.0 },
  { type: "T-Max", nom: "T-Max Simple", prix: 4.0 },
  { type: "T-Max", nom: "T-Max Complet", prix: 5.5 },
  { type: "Boisson", nom: "Coca-Cola", prix: 2.0 },
  { type: "Boisson", nom: "Fanta", prix: 2.0 },
  { type: "Boisson", nom: "Red Bull", prix: 1.5 },
  { type: "Dessert", nom: "Tarte aux Pommes", prix: 3.0 },
  { type: "Dessert", nom: "Fondant au Chocolat", prix: 3.5 },
  { type: "Dessert", nom: "Glace Vanille", prix: 2.5 },
];

function afficherMenu() {
  let tableBody = document.getElementById("menuTable").querySelector("tbody");

  for (let i = 0; i < menuItems.length; i++) {
      let row = document.createElement("tr");

      let typeCell = document.createElement("td");
      typeCell.textContent = menuItems[i].type;

      let nomCell = document.createElement("td");
      nomCell.textContent = menuItems[i].name;

      let prixCell = document.createElement("td");
      prixCell.textContent = menuItems[i].prix.toFixed(2) + " €";

  }
}