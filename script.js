const container = document.getElementById("container");

function makeEle (element) {
  const makeElement = document.createElement(element);
  return makeElement;
}

const headerEle = {
  logo : `hello`,
  link : ["home","categories"]
};

function createHeaderElements (someData) {
  const header = makeEle('div');
  const h1 = makeEle("h1");
  h1.textContent = headerEle.logo;
  header.appendChild(h1);
  const ul = makeEle("ul");

  someData.link.forEach(element => {
    const li = makeEle("li");
    console.log(li)
    const aLinks = makeEle("a");
    aLinks.href = `#`;
    aLinks.textContent = element;
    li.appendChild(aLinks);
    ul.appendChild(li);
    header.appendChild(ul);
  });

  return header;

};



container.appendChild(createHeaderElements(headerEle));
