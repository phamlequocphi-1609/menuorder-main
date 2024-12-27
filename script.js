const SIGNATURE = [
  {
    id: 1,
    name: "OISHII YUME",
    img1: "images/yume1.jpg",
    img2: "images/OishiiYume.jpg",
    price: "11.9",
    description: `
            Intérieur: Crevette tempura, avocat <br>
            Extérieur: Mangue, masago, ciboulette <br>
            Sauce: Oishii spéciale
        `,
  },
  {
    id: 2,
    name: "OISHII KUMO",
    img1: "images/kumo1.jpg",
    img2: "images/oishiikumo.jpg",
    price: "12.9",
    description: `
            Intérieur: Saumon, fromage, avocat <br>
            Extérieur: Kingfish Australie, masago, fromage, citron vert <br>
            Sauce: Yuzu citron
        `,
  },
  {
    id: 3,
    name: "OISHII AVOCADO",
    img1: "images/avocado1.jpg",
    img2: "images/oishiiavocado.jpg",
    price: "11.9",
    description: `
            Intérieur: Avocat, crevette tempura <br>
            Extérieur: Avocat, masago, alfafa blache <br>
            Sauce: spicy mayo 
        `,
  },
  {
    id: 4,
    name: "OISHII UMI",
    img1: "images/umi1.jpg",
    img2: "images/oishiiumi.jpg",
    price: "12.9",
    description: `
            Intérieur: Surimi, mangue, avocat, comcombre <br>
            Extérieur: Alfafa blanche, chips, huile de sésame, masago, poivron <br>
            Sauce: Yakitori
        `,
  },
  {
    id: 5,
    name: "OISHII KICHI",
    img1: "images/kichi1.jpg",
    img2: "images/oishiikichi.jpg",
    price: "12.9",
    description: `
            Intérieur: Thon spicy, avocat, poivron rouge <br>
            Extérieur: Piment rouge, ciboulette, thon, oignon frit <br>
            Sauce: Oishii spicy
        `,
  },
];

const PLATEAU = [
  {
    id: 1,
    name: "SAKURA YUME(38 pieces)",
    img1: "",
    img2: "images/sakurayume.jpg",
    price: "43.9",
    description: `
            -	8 Oishii YUME <br>
            -	8 California thon cuit avocat <br>
            -	6 Maki saumon <br>
            -	8 Spring chips cheese avocat  <br>
            -	2 sushi saumon <br>
            -	2 sushi thon <br>
            -	2 sushi saumon snacké <br>
            -	2 sushi kingfish autralie
        `,
  },
  {
    id: 2,
    name: "TAKARA UMI(42 pieces)",
    img1: "",
    img2: "images/takaraumi.jpg",
    price: "53.9",
    description: `
            -	8 Oishii UMI <br>
            -	8 Oishii AVOCADO <br>
            -	8 California thon cuit avocat <br>
            -	8 California poulet <br>
            -	3 sashimi saumon <br>
            -	3 sashimi thon <br>
            -	2 sushi saumon <br>
            -	1 sushi thon <br>
            -	1 sushi kingfish autralie
        `,
  },
  {
    id: 3,
    name: "AKIRA(54 pieces)",
    img1: "",
    img2: "images/akira.jpg",
    price: "59.9",
    description: `
            -	8 Oishii AVOCADO <br>
            -	8 Oishii KICHI <br>
            -	8 California saumon avocat <br>
            -	8 Spring thon cuit avocat<br>
            -	8 Salmon roll cheese<br>
            -	6 maki avocat cheese<br>
            -	4 sushi saumon<br>
            -	2 sushi thon<br>
            -	2 sushi kingfish australie<br>

        `,
  },
  {
    id: 4,
    name: "OKAMI (70 pieces)",
    img1: "",
    img2: "images/okami.jpg",
    price: "83.9",
    description: `
            -	8 Oishii UMI<br>
            -	8 Oishii AVOCADO<br>
            -	8 Oishii YUME<br>
            -	8 Oishii KICHI<br>
            -	8 California poulet <br>
            -	8 spring saumon avocat<br>
            -	8 Salmon roll cheese<br>
            -	6 maki avocat<br>
            -	2 sushi saumon<br>
            -	2 sushi thon<br>
            -	2 sushi kingfish autralie<br>
            -	2 sushi saumon snacké
                    
        `,
  },
];

const ACCOMPAGNEMENTS = [
  {
    id: 1,
    name: "Soup miso",
    img1: "images/soupemiso1.png",
    img2: "images/soupemiso2.png",
    price: "2.9",
    description: `
            - Tofu <br>
            - Feuilles d'algues <br>
            - Ciboulette <br>
        `,
  },
  {
    id: 2,
    name: "Riz vinaigé",
    img1: "",
    img2: "",
    price: "3.3",
    description: `
        `,
  },
  {
    id: 3,
    name: "Salade de chou",
    img1: "",
    img2: "",
    price: "2.9",
    description: `
        `,
  },
  {
    id: 4,
    name: "Salade de chou",
    img1: "",
    img2: "images/saladedechou.png",
    price: "2.9",
    description: `
            - Chou <br>
            - Carrot <br>
            - Sésame <br>
        `,
  },
  {
    id: 5,
    name: "Salade wakamé",
    img1: "images/saladewakame1.png",
    img2: "images/saladewakame2.png",
    price: "4.4",
    description: `
        `,
  },
  {
    id: 6,
    name: "Salade edamame",
    img1: "images/saladeedamame1.png",
    img2: "images/saladeedamame2.png",
    price: "4.4",
    description: `       
        `,
  },
  {
    id: 7,
    name: "Salade de saumon avec sauce passion",
    img1: "images/saladesaumonavecsaucefruitdelapassion.png",
    img2: "",
    price: "9.9",
    description: `
            - Saumon <br>
            - Salade feuille de chêne <br>
            - Tomata <br>
            - Maïs <br>
            - Sauce fruit de la passion <br>
        `,
  },
  {
    id: 8,
    name: "Nems (5 pièces)",
    img1: "images/nems.png",
    img2: "",
    price: "",
    description: `
            - au porc: 7 <br>
            - au poulet: 7 <br>
            - légumes <br>
        `,
  },
  {
    id: 9,
    name: "Gyoza (5 pièces)",
    img1: "images/gyoza.png",
    img2: "",
    price: "",
    description: `
            - poulet: 7.5 <br>
            - légumes: 7.5 <br>
        `,
  },
  {
    id: 10,
    name: "Brochette (2 pièces)",
    img1: "images/brochette1.png",
    img2: "images/brochette2.png",
    price: "",
    description: `
            - Boeuf au fromage: 5 <br>
            - poulet: 5 <br>
            - saumon: 5 <br>
            - thon: 5 <br>
        `,
  },
  {
    id: 11,
    name: "Crevette tempura (5 pièces)",
    img1: "images/crevettetempura1.png",
    img2: "images/crevettetempura2.png",
    price: "5",
    description: `
        `,
  },
];

const MENU = [
  {
    id: 1,
    name: "Menu 1",
    img1: "images/menu11.png",
    img2: "images/menu12.png",
    price: "13.9",
    description: `
            - 6 sushi saumon <br>
        `,
  },
  {
    id: 2,
    name: "Menu 2",
    img1: "",
    img2: "images/menu2.jpg",
    price: "14.9",
    description: `
            - 8 thon cuit avocat <br>
            - 6 maki saumon <br>
            - 2 sushi saumon <br>
        `,
  },
  {
    id: 3,
    name: "Menu 3",
    img1: "",
    img2: "images/menu3.jpg",
    price: "16.9",
    description: `
            - 8 spring saumon avocat <br>
            - 6 salmon roll cheese <br>
            - 2 california thon cuit avocat <br>
            - 2 sushi saumon <br>
        `,
  },
  {
    id: 4,
    name: "Menu 4",
    img1: "images/menu4.png",
    img2: "",
    price: "18.9",
    description: `
            - 8 california saumon avocat <br>
            - 8 california thoncuit avocat <br>
            - 4 maki saumon <br>
            - 2 sushi saumon <br>
        `,
  },
  {
    id: 5,
    name: "Menu 5",
    img1: "images/menu5.png",
    img2: "",
    price: "18.9",
    description: `
            - California saumon avocat <br>
            - 3 nems poulet <br>
            - 3 gyoza poulet <br>
            - 2 brochette boeuf au fromage <br>
        `,
  },
  {
    id: 6,
    name: "Menu 6",
    img1: "images/menu6.jpg",
    img2: "",
    price: "19.5",
    description: `
            - 4 oishii avocada <br>
            - 4 oishii umi <br>
            - 6 maki avocat cheese <br>
            - 2 sushi saumon <br>
        `,
  },
  {
    id: 7,
    name: "Menu 7",
    img1: "images/menu7.jpg",
    img2: "",
    price: "19.9",
    description: `
            - 4 oishii avocada <br>
            - 6 maki thon <br>
            - 6 maki saumon <br>
            - 6 maki avocat cheese <br>
        `,
  },
  {
    id: 8,
    name: "Menu 8",
    img1: "images/menu8.jpg",
    img2: "",
    price: "22.9",
    description: `
            - 8 california saumon avocat <br>
            - 8 salmon roll cheese <br>
            - 2 sushi saumon <br>
            - 1 sushi thon <br>
            - 1 sushi kingfish australie <br>
        `,
  },
  {
    id: 9,
    name: "Menu 9",
    img1: "images/menu9.jpg",
    img2: "",
    price: "24.9",
    description: `
            - 8 california thoncuit avocat <br>
            - 2 sushi saumon <br>
            - 1 sushi thon <br>
            - 1 sushi kingfish australie <br>
            - 3 sashimi saumon <br>
            - 3 sashimi thon <br>
        `,
  },
  {
    id: 10,
    name: "Menu veggie 1",
    img1: "images/veggie1.jpg",
    img2: "",
    price: "12.9",
    description: `
            - 8 spring chips cheese avocat <br>
            - 6 maki comcombre <br>
            - 2 sushi avocat <br>
        `,
  },
  {
    id: 11,
    name: "Menu veggie 2",
    img1: "images/veggie2.jpg",
    img2: "",
    price: "16.9",
    description: `
            - 8 california veggie <br>
            - 6 maki avocat cheese <br>
            - 8 riz fromage sésame <br>
        `,
  },
];

const MIDI = [
  {
    id: 1,
    name: "Midi printemps",
    img1: "images/midiprintemps.jpg",
    img2: "",
    price: "11.9",
    description: `
            - 8 spring saumon avocat <br>
            - 4 maki saumon <br>
            - 2 sushi saumon <br>
        `,
  },
  {
    id: 2,
    name: "Midi été",
    img1: "images/midiété.jpg",
    img2: "",
    price: "13.9",
    description: `
            - 6 maki saumon <br>
            - 4 sushi saumon <br>
        `,
  },
  {
    id: 3,
    name: "Midi automne",
    img1: "images/midiautomne.jpg",
    img2: "",
    price: "10.5",
    description: `
            - 8 california saumon avocat <br>
            - 6 maki saumon <br>
        `,
  },
  {
    id: 4,
    name: "Midi hiver",
    img1: "images/midihiver.jpg",
    img2: "",
    price: "13.9",
    description: `
            - 8 california saumon avocat <br>
            - 3 nems poulet <br>
            - 3 gyoza poulet <br>
        `,
  },
];

const SASHIMI = [
  {
    id: 1,
    name: "Saumon",
    img1: "",
    img2: "",
    price: "",
    description: `
            - 6 pièces: 10.9 <br>
            - 12 pièces: 18.9 <br>
        `,
  },
  {
    id: 2,
    name: "thon",
    img1: "",
    img2: "",
    price: "",
    description: `
            - 6 pièces: 11.9 <br>
            - 12 pièces: 20.9 <br>
        `,
  },
  {
    id: 3,
    name: "kingfish australie",
    img1: "",
    img2: "",
    price: "",
    description: `
            - 6 pièces: 13.9 <br>
            - 12 pièces: 23.9 <br>
        `,
  },
  {
    id: 4,
    name: "mix saumon - thon",
    img1: "",
    img2: "",
    price: "",
    description: `
            - 6 pièces: 11.9 <br>
            - 12 pièces: 19.9 <br>
        `,
  },
  {
    id: 5,
    name: "mix saumon - kingfish australie",
    img1: "",
    img2: "",
    price: "",
    description: `
            - 6 pièces: 12.9 <br>
            - 12 pièces: 21.9 <br>
        `,
  },
  {
    id: 6,
    name: "mix saumon - thon - kingfish australie (12 pièces)",
    img1: "",
    img2: "",
    price: "22.9",
    description: `
        `,
  },
  {
    id: 7,
    name: "saumon snacké (12 pièces)",
    img1: "images/saumonsnacké1.png",
    img2: "images/saumonsnacké2.png",
    price: "18.9",
    description: `
        `,
  },
];

const BOWL = [
  {
    id: 1,
    name: "Chirashi",
    img1: "images/chirashi1.png",
    img2: "images/chirashi2.png",
    price: "",
    description: `
            - saumon: 15.9 <br>
            -	saumon avocat: 16.9 <br>
            -	kingfish australie: 19.9 <br>
            -	thon avocat: 18. .9 <br>
            -	mix saumon-thon 17.9 <br>
            -	mix kingfish-saumon-thon 20.9 <br>
        `,
  },
  {
    id: 2,
    name: "Riz vignaire, avocat, mangue, edamame, tomato , sesame, sauce fruit de la passion",
    img1: "",
    img2: "",
    price: "",
    description: `
            - Au choix <br>
            -	Saumon: 15.9 <br>
            -	Thon: 16.9 <br>
            -	Saumon - thon : 16.9 <br>
        `,
  },
  {
    id: 3,
    name: "Riz vignaire, avocat, mangue, edamame, tomato, sesame, sauce spicy mayo",
    img1: "images/poke.png",
    img2: "",
    price: "",
    description: `
            -	Poulet: 15.9 <br>
            -	Crevette tempura: 15.9 <br>
        `,
  },
  {
    id: 4,
    name: "Tartare (avec riz vignaire) avocat, masago, huile de sésame, sauce yakitori",
    img1: "images/tartare1.png",
    img2: "images/tartare2.png",
    price: "",
    description: `
            Au choix <br>
            -	Saumon: 15.9 <br>
            -	Thon: 16.9 <br>
            -	Kingfish australie : 17.9 <br>
            -	Mix saumon - thon: 16.9 <br>
        `,
  },
];

const CHAUDS = [
  {
    id: 1,
    name: "Udon (Avec une soupe)",
    img1: "images/udon.png",
    img2: "",
    price: "17.9",
    description: `
            Nouilles udon, comcombre, salade de chou, poivron, oignon frit <br>
            Au choix: <br>
            -	Saumon: <br>
            -	Thon <br>
            -	Crevette <br>
            -	Poulet <br>
        `,
  },
  {
    id: 2,
    name: "Donburi ( avec une soupe)",
    img1: "images/donburi.png",
    img2: "",
    price: "17.9",
    description: `
            Riz vignaire, sésame, poivron, comcombre, salade de chou, chips <br>
            Au choix: <br>
            -	Saumon: <br>
            -	Thon <br>
            -	Crevette <br>
            -	Poulet <br>
        `,
  },
  {
    id: 3,
    name: "Bò bún",
    img1: "images/bobun1.jpg",
    img2: "images/bobun2.png",
    price: "",
    description: `
            Vermicelle de riz, nem poulet, carrot mariné, comcombre, sésame, salade, oignon frit <br>
            Au choix: <br>
            -	Boeuf: 12.9 <br>
            -	Poulet: 12.9 <br>
            -	Crevette: 13.9 <br>
        `,
  },
  {
    id: 4,
    name: "Nouille sauté ",
    img1: "images/nouillesanté.jpg",
    img2: "",
    price: "",
    description: `
            Poivron, carrot, sauce soja, sauce huîtres, oignon, champignon, ciboulette <br>
            -	Légume: 10.9 <br>
            -	Boeuf: 12.9 <br>
            -	Poulet: 12.9 <br>
            -	Crevette: 13.9 <br>
        `,
  },
];

const CRISPY = [
  {
    id: 1,
    name: "Crispy saumon",
    img1: "",
    img2: "",
    price: "8.5",
    description: `
        `,
  },
  {
    id: 2,
    name: "Crispy cheese",
    img1: "",
    img2: "",
    price: "7.9",
    description: `
        `,
  },
  {
    id: 3,
    name: "Crispy thon cuit",
    img1: "images/crispythoncuit.jpg",
    img2: "",
    price: "8.5",
    description: `
        `,
  },
];

const ROLLS = [
  {
    id: 1,
    name: "CALIFORNIA (8 pièces)",
    img1: "",
    img2: "",
    price: "",
    description: `
            -	Kingfish australie: 7.5 <br>
            -	Saumon avocat: 6.5 <br>
            -	Saumon cheese: 6.7 <br>
            -	Thon cuit avocat: 6.5 <br>
            -	Thon avocat: 6.7 <br>
            -	Thon spicy: 6.7 <br>
            -	Saumon spicy: 6.5 <br>
            -	Comcombre avocat: 6 <br>
            -	Véggie: 6.5 <br>
            -	Crevette tempura avocat: 7.5 <br>
            -	Cheese surimi avocat: 6.5 <br>
            -	Poulet avocat: 7 <br>
        `,
  },
  {
    id: 2,
    name: "Spring (8 pièces)",
    img1: "",
    img2: "",
    price: "",
    description: `
            -	Kingfish australie: 7.5 <br>
            -	Saumon avocat: 6.5 <br>
            -	Saumon cheese: 6.7 <br>
            -	Thon cuit avocat: 6 <br>
            -	Thon avocat: 6.7 <br>
            -	Cheese avocat: 6 <br>
            -	Comcombre avocat: 5.5 <br>
            -	Comcombre cheese: 5.5 <br>
            -	Chips cheese avocat: 7 <br>
            -	Chips cheese comcombre: 7 <br>
            -	Véggie: 6.5 <br>
            -	Crevette tempura: 7.5 <br>
            -	Poulet avocat: 7 <br>
            -	Poulet comcombre: 7 <br>
        `,
  },
  {
    id: 3,
    name: "Maki (6 pièces)",
    img1: "",
    img2: "",
    price: "",
    description: `
            -	Kingfish australie: 6.5 <br>
            -	Saumon: 6 <br>
            -	Saumon fromage: 6.2 <br>
            -	Saumon épicé: 6.2 <br>
            -	Thon: 6.2 <br>
            -	Thon épicés: 6.5 <br>
            -	Thon cuit: 6 <br>
            -	Avocat: 5 <br>
            -	Avocat cheese: 5.2 <br>
            -	Comcombre: 4.5 <br>
            -	Comcombre cheese: 4.7 <br>
            -	Riz fromage sésame chips: 4.7 <br>
            -	Riz fromage saumon: 6.2 <br>
            -	Salmon roll cheese: 7.5 <br>
            -	Salmon roll cheese avocat: 7.7 <br>
        `,
  },
  {
    id: 4,
    name: "Sushi (2 pièces)",
    img1: "images/sushi1.jpg",
    img2: "images/sushi2.jpg",
    price: "",
    description: `
            -	Saumon: 5 <br>
            -	Thon: 5.2 <br>
            -	Kingfish australie: 6 <br>
            -	Saumon snacké: 5.5 <br>
            -	Thon snacké: 5.5 <br>
            -	Avocat: 4 <br>
        `,
  },
];

const BOISSONS = [
  {
    id: 1,
    name: "Eaux et softs",
    img1: "",
    img2: "",
    price: "",
    description: `
            -	Coca cola 33cl: 2.5 <br>
            -	Coca cola zero 33cl: 2.5 <br>
            -	Carola 33cl: 2.5 <br>
            -	Carola rouge33cl: 2.5 <br>
            -	Orangina 33cl: 2.5 <br>
            -	Ice tea 33cl: 2.5 <br>
        `,
  },
  {
    id: 2,
    name: "Café - Thé chaud",
    img1: "",
    img2: "",
    price: "",
    description: `
            - Jasmin: 3 <br>
            -	Gingembre miel: 3 <br>
            -	Café espresso: 2 <br>
        `,
  },
  {
    id: 3,
    name: "Bière japonais",
    img1: "",
    img2: "",
    price: "",
    description: `
            - Asahi bouteille 33cl (5%): 4 <br>
            -	Kirin bouteille 33cl (5%): 4 <br>
        `,
  },
  {
    id: 4,
    name: "Vins",
    img1: "",
    img2: "",
    price: "",
    description: `
            Rouge ou blanc ou rosé:  <br>
            - 12cl: 3.5 <br>
            - 25cl: 6.5 <br>
            - 50cl: 12.5 <br>
        `,
  },
];

const BUBBLE = [
  {
    id: 1,
    name: "Thé noir aux fruits (topping aux choix)",
    img1: "images/thenoirauxfruits1.jpg",
    img2: "images/thénoirauxfruits2.jpg",
    price: "",
    description: `
            -	Litchi <br>
            - Mangue <br>
            - Passion <br>
            - Mangue passion <br>
            - Pêche <br>
        `,
  },
  {
    id: 2,
    name: "THÉ AU LAIT (topping aux choix)",
    img1: "images/theaulait1.jpg",
    img2: "images/theaulait2.jpg",
    price: "6.5",
    description: `
            -	Matcha <br>
            - Taro <br>
            - “brown sugar” perles topioca lait frais <br>
        `,
  },
  {
    id: 3,
    name: "Boisons Specials",
    img1: "images/boisonspecials1.jpg",
    img2: "images/boisonspecials2.jpg",
    price: "",
    description: `
            -	Pêche orange citronelle <br>
            - Mojito framboise <br>
            - Mojito passion fruit <br>
            - Mojito citron vert <br>
            - Café Vietnamien “Bạc xỉu” <br>
            - Café au sel Vietnamien <br>

        `,
  },
];
const menuList = document.querySelector(".menu-list-nav ul");
const modalImage = document.getElementById("detailImage");
const modalDescription = document.getElementById("detailDescription");
const modalTitle = document.getElementById("detailModalLabel");
const menuOrder = document.querySelector(".menu-list-order .row");

// Lấy các danh mục và container hiển thị món ăn
const menuItems = document.querySelectorAll("ul li");
const menuListOrder = document.querySelector(".menu-list-order-row");

let activeMenu = "SIGNATURE";
// Hàm render dữ liệu
function renderMenu(type, data) {
  if (!Array.isArray(data)) {
    console.error("Dữ liệu không hợp lệ:", data);
    return;
  }
  // Xóa nội dung cũ
  menuListOrder.innerHTML = "";

  // Duyệt qua mảng và tạo HTML
  data.forEach((item) => {
    const orderHTML = `
            <div class="col-6 col-md-3 mt-4">
                <div class="order shadow">
                    <div class="order-img">
                        <img src="${item.img1 || item.img2}" alt="${item.name}">
                    </div>
                    <div class="order-content">
                        <div class="order-content-title">
                            ${item.name}
                        </div>
                        <div class="order-content-prices-row">
                            <div class="order-content-prices">
                                <div class="label">Prix</div>
                                <div class="prices">${item.price}€</div>
                            </div>
                            <div class="view-detail shadow" data-id="${
                              item.id
                            }" data-type="${type}">
                                Détails
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    menuListOrder.innerHTML += orderHTML;
  });

  // Thêm sự kiện click cho nút View Detail
  addDetailClickEvents();
}

// Thêm sự kiện click cho từng danh mục
menuList.addEventListener("click", (e) => {
  const li = e.target.closest("li"); // Lấy đúng phần tử <li> được click
  if (li) {
    // Xóa class "active" của tất cả danh mục
    document
      .querySelectorAll(".menu-list-nav ul li")
      .forEach((li) => li.classList.remove("active"));
    li.classList.add("active"); // Thêm class "active" cho danh mục hiện tại

    activeMenu = li.dataset.name.toUpperCase(); // Lấy tên danh mục từ data-name

    // Render menu items dựa trên danh mục
    // const data = activeMenu === "SIGNATURE" ? SIGNATURE : ACCOMPAGNEMENTS;
    let data;
    if (activeMenu === "SIGNATURE") {
      data = SIGNATURE;
    } else if (activeMenu === "PLATEAU") {
      data = PLATEAU;
    } else if (activeMenu === "ACCOMPAGNEMENTS") {
      data = ACCOMPAGNEMENTS;
    } else if (activeMenu === "MENU") {
      data = MENU;
    } else if (activeMenu === "MIDI") {
      data = MIDI;
    } else if (activeMenu === "SASHIMI") {
      data = SASHIMI;
    } else if (activeMenu === "BOWL") {
      data = BOWL;
    } else if (activeMenu === "CHAUDS") {
      data = CHAUDS;
    } else if (activeMenu === "CRISPY") {
      data = CRISPY;
    } else if (activeMenu === "ROLLS") {
      data = ROLLS;
    } else if (activeMenu === "BOISSONS") {
      data = BOISSONS;
    } else if (activeMenu === "BUBBLE") {
      data = BUBBLE;
    } else {
      data = [];
    }
    console.log("data", data);

    renderMenu(activeMenu, data);
  }
});

// Show popup detail
function addDetailClickEvents() {
  document.querySelectorAll(".view-detail").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const type = e.target.dataset.type;
      // const data = type === "SIGNATURE" ? SIGNATURE : ACCOMPAGNEMENTS;
      let data;
      if (type === "SIGNATURE") {
        data = SIGNATURE;
      } else if (type === "PLATEAU") {
        data = PLATEAU;
      } else if (type === "ACCOMPAGNEMENTS") {
        data = ACCOMPAGNEMENTS;
      } else if (type === "MENU") {
        data = MENU;
      } else if (type === "MIDI") {
        data = MIDI;
      } else if (type === "SASHIMI") {
        data = SASHIMI;
      } else if (type === "BOWL") {
        data = BOWL;
      } else if (type === "CHAUDS") {
        data = CHAUDS;
      } else if (type === "CRISPY") {
        data = CRISPY;
      } else if (type === "ROLLS") {
        data = ROLLS;
      } else if (type === "BOISSONS") {
        data = BOISSONS;
      } else if (type === "BUBBLE") {
        data = BUBBLE;
      } else {
        data = [];
      }
      const item = data.find((i) => i.id == id);

      if (item) {
        modalImage.src = item.img2 || item.img1;
        modalTitle.textContent = item.name;
        modalDescription.innerHTML = item.description;

        // Show the modal
        const detailModal = new bootstrap.Modal(
          document.getElementById("detailModal")
        );
        detailModal.show();
      }
    });
  });
}

// Gọi hàm thêm sự kiện sau khi render menu
renderMenu(activeMenu, SIGNATURE);
addDetailClickEvents();

// Set default active and render menu
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".menu-list-nav ul li")[0].classList.add("active");
  renderMenu("SIGNATURE", SIGNATURE);
});
