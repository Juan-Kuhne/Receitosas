export const ingHtml = function (ings, mode = "-") {
  let html = "";
  // ingredients '-' template
  if (mode === "-") {
    ings.split(";").forEach((ing) => {
      html += `
      <li class="ingredient">
      <div class="checkbox">
            <img class="hide" src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png" />
      </div>
      <p>${ing}</p>
      </li>
      `;
    });
  }

  // ingredients '/' template
  if (mode === "/") {
    ings.forEach((part) => {
      html += `
         <h3 class="ing_part_title">${part.ingPart}</h3>
         ${part.ings
           .split(";")
           .map((ings) => {
             return `
              <li class="ingredient">
              <div class="checkbox">
                    <img class="hide" src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png" />
              </div>
              <p>${ings}</p>
              </li>
             `;
           })
           .join(" ")}
      `;
    });
  }
  return html;
};

export const stHtml = function (st, mode = "-") {
  let html = "";
  // steps '-' template
  if (mode === "-") {
    st.split(";").forEach((step) => {
      html += `
         <li class="step">
         ${step}
         </li>
        `;
    });
  }

  // steps '/' template
  if (mode === "/") {
    st.forEach((step) => {
      html += `
         <h3 class="step_part_title">${step.stepPart}</h3>
         ${step.step
           .split(";")
           .map((desc) => {
             if (desc === "") return '<li class="step">🍴 Vazio 🍴</li>';
             return `
              <li class="step">
               ${desc}
              </li>
             `;
           })
           .join(" ")}
      `;
    });
  }
  return html;
};

export const searchRecipeHtml = function (db) {
  let html = "";
  db.forEach((rcp) => {
    html += `
         <div class="receita" data-id="${rcp.id}">
            <img src="${rcp.imgSrc}" alt="" class="receita_img">
            <div class="receita_titulo">${rcp.recipeName}</div>
         </div>
      `;
  });
  return html;
};

export const contentHtml = function () {
  return `
      <h2 class="recipe_title"></h2>
      <div class="recipe_header">
         <img class="recipe_img" src="" alt="">
      </div>

      <div class="ingredients align">
         <h2 class="recipe_steps_title">Ingredientes</h2>
         <ul class="ingredients_list"></ul>
      </div>

      <ol class="steps">
      </ol>

      <div class="notes align">
         <h2>Observações</h2>
         <p class="note_txt"></p>
      </div>
   `;
};
