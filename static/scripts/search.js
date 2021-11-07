const _ = s => document.querySelector(s);
let body, search, input, description, suggestion;

window.onload = () => {
  body = document.body;
  search = _("#search-type");
  input = _("#search-key");
  description = _(".description");
  suggestion = _(".suggestion-box");
  search.addEventListener("change", changedSearchType);
};

function changedSearchType(event) {
  switch (parseInt(search.value)) {
    case 1:
      input.setAttribute("placeholder", "Enter name of Invention or Discovery");
      description.innerHTML = "Search for ancient Inventions and Discoveries";
      break;
    case 2:
      input.setAttribute("placeholder", "Enter name of Practitioner");
      description.innerHTML = "Search for ancient Islamic Practitioners";
      break;
    case 3:
      input.setAttribute("placeholder", "Enter Disease name or Treatment name");
      description.innerHTML = "Search for Diseases and Treatments";
      break;
  }
  input.focus();
}

function typing() {
  const type = encodeURIComponent(search.value);
  const rawText = input.value;
  const text = encodeURIComponent(rawText);
  if(text=="") {
    clearSuggestion();
    return;
  }
  fetch(`/suggest/${type}/${text}`, {
    method: "POST",
    cache: "no-store"
  })
    .then(resp => resp.json())
    .then(data => {
      data = data?.result;
      if(data?.length<1) {
        throw new Error("No results");
      }
      suggestion.innerHTML = data.map(item => `<div class="suggestion">${item.replaceAll(rawText, `<div class="high">${rawText}</div>`)}</div>`).join("");
    }).catch(err => {
      console.error(err);
      clearSuggestion();
    });
}

function clearSuggestion() {
  suggestion.innerHTML = "";
}
