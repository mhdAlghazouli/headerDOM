const container = document.getElementById("container");

function makeEle (element) {
  const makeElement = document.createElement(element);
  return makeElement;
}

const links = {
  link : ["home","categories"]
};

function createHeaderElements (links) {
  const h1 = makeEle("h1");
  h1.textContent = `hello`;
  container.appendChild(h1);
  const ul = makeEle("ul");

  links.link.forEach(element => {
    const li = makeEle("li");
    console.log(li)
    const aLinks = makeEle("a");
    aLinks.href = `#`;
    aLinks.textContent = element;
    li.appendChild(aLinks);
    ul.appendChild(li);
  });

  return ul;

};

container.appendChild(createHeaderElements(links));