import { ingHtml, stHtml, searchRecipeHtml, contentHtml } from "./templates.js";

const database = [
  {
    id: 1,
    mode: "-", // '-' ou '/'
    recipeName: "Berinjela à milanesa",
    imgSrc:
      "https://t2.rg.ltmcdn.com/pt/posts/1/0/7/berinjela_a_milanesa_frita_como_fazer_10701_600.jpg",
    ingredients:
      "1 beringela;2 ovos;1 colher de chá de orégano;1 xícara de farinha de rosca;sal e pimenta a gosto;óleo vegetal;sal grosso",
    steps:
      "Primeiramente lave ou higienize a berinjela e corte fora as pontas. Depois, corte o legume em rodelas com 1 cm de espessura ou um pouco menos;Disponha as rodelas de berinjela num escorredor e polvilhe sal grosso nelas - não precisa muita quantidade de sal, apenas uma pitada de sal. Reserve por 10-15 minutos ou até você observar que o sal derreteu e a berinjela soltou algum líquido;Após esse tempo, seque cada uma das rodelas de berinjela com papel toalha, pressionando ligeiramente;Esquente o óleo no fogo alto e, enquanto isso, prepare os ingredientes para empanar: numa tigela bata os dois ovos temperados com um pouco de sal e pimenta até espumarem. Em outra tigela coloque a farinha de rosca que pode ser temperada com um pouco de orégano, se você quiser;Envolva uma das rodelas de berinjela nos ovos batidos, deixe escorrer um pouco e depois passe na farinha de rosca, pressionando ligeiramente. Volte a envolver nos ovos batidos e novamente na farinha de rosca para garantir uma crosta bem crocante! Faça isso com toda a berinjela;Quando o óleo estiver bem quente, mas não fervendo, coloque a berinjela empanada para fritar. Deixe por 2-3 minutos, virando a meio do tempo, ou até ficar douradinha de ambos os lados;Depois de fritar, retire a berinjela e coloque em uma assadeira com papel toalha para absorver o excesso de óleo e, assim, conseguir uma berinjela à milanesa mais sequinha",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laboriosam dolores exercitationem rerum pariatur impedit qui, enim esse illum nesciunt fuga possimus recusandae a nobis. Vitae totam aut eaque temporibus! Corrupti perspiciatis omnis eligendi atque nulla officiis aperiam quisquam, voluptate eos rerum et pariatur molestiae natus voluptates animi. Hic ipsam sapiente error dolorem incidunt dicta eum repellat iste odio mollitia! Unde quae suscipit, ad esse, molestias doloremque error architecto distinctio accusantium tempora rem voluptatem.",
  },
  {
    id: 2,
    mode: "/",
    recipeName: "Torta de morango",
    imgSrc: "https://www.bonde.com.br/img/bondenews/2017/07/img_1_33_1738.jpg",
    ingredients: [
      {
        ingPart: "Massa",
        ings: "2 xícaras de chá de farinha de trigo;2 colheres de sopa de açúcar;6 ... de manteiga;2 gemas;1 pitada de sal",
      },
      {
        ingPart: "Recheio",
        ings: "1 lata de leite condensado;2 medidas de leite;3 gemas;3 colheres de sopa de amido de milho",
      },
      {
        ingPart: "Recheio 2",
        ings: "2 cx de morangos;150g de manteiga s/ sal;250g de chocolate branco nobre;100ml de creme de leite gelado;1/2 lata de leite condensado",
      },
      {
        ingPart: "Cobertura",
        ings: "1/2 pacote de gelatina de morango;250ml de água;1 colher de sopa de polvilho doce",
      },
    ],
    steps: [
      {
        stepPart: "Massa",
        step: "",
      },
      {
        stepPart: "Recheio",
        step: "",
      },
      {
        stepPart: "Recheio 2",
        step: "",
      },
      {
        stepPart: "Cobertura",
        step: "",
      },
    ],
    notes: `* Versão para chocolate
    * Massa:
      - 1 pcote de maisena
      - farinha de trigo => 1 pcote de negresco
      - 1 col de açucar
  * Preparação recheio 2
    - Bata na batedeira a manteiga e o leite condensado
    - Por último acrescente o chocolate e o creme de leite`,
  },
];

const content = document.querySelector(".content");

const renderRecipe = function (recipe) {
  content.innerHTML = contentHtml();
  const titleEl = document.querySelector(".recipe_title");
  const rImgEl = document.querySelector(".recipe_img");
  const ingredientsEl = document.querySelector(".ingredients ul");
  const stepsEl = document.querySelector(".steps");
  const notesEl = document.querySelector(".note_txt");

  // Title
  titleEl.textContent = recipe.recipeName; //apagar apenas texto

  // Image
  rImgEl.src = recipe.imgSrc; // apager atributo src

  // ingredients
  ingredientsEl.innerHTML = "";
  ingredientsEl.insertAdjacentHTML(
    "beforeend",
    ingHtml(recipe.ingredients, recipe.mode)
  );

  // steps
  // const steps = recipe.steps.split(";");
  stepsEl.innerHTML =
    '<h2 class="recipe_steps_title align">Modo de Preparo</h2>';
  // steps.forEach((st) => {
  stepsEl.insertAdjacentHTML("beforeend", stHtml(recipe.steps, recipe.mode));
  // });

  // notes
  notesEl.textContent = recipe.notes;

  // checkbox checks
  document
    .querySelector(".ingredients ul")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("ingredients_list")) return;
      const ingredientEl = e.target.closest(".ingredient");
      ingredientEl.querySelector(".checkbox img").classList.toggle("hide");
    });

  // Steps done
  document.querySelector(".steps").addEventListener("click", function (e) {
    if (e.target.classList.contains("step")) e.target.classList.toggle("done");
  });
};

const sReceitas = document.querySelector(".receitas");
const renderSearch = function () {
  sReceitas.innerHTML = "";
  sReceitas.insertAdjacentHTML("afterbegin", searchRecipeHtml(database));
};

// search recipes click
renderSearch(database);
document.querySelector(".receitas").addEventListener("click", function (e) {
  let target;
  if (e.target.classList.contains("receita")) target = e.target;
  else target = e.target.closest(".receita");
  renderRecipe(database[target.dataset.id - 1]);
});

// renderRecipe(database[1]);
