const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulEl = document.querySelector(".gallery");

ulEl.style.display = "flex";
ulEl.style.flexWrap = "wrap";
ulEl.style.gap = "30px";
ulEl.style.listStyle = "none";

const addImg = ({ url, alt } = {}) => {
  return `<li><img src = "${url}" alt = "${alt}"  width = "300"  height = "200" style="display: block; object-fit: cover;" /></li>`;
};

const img = images.map((image) => {
  return addImg(image);
});

ulEl.insertAdjacentHTML("beforeend", img.join(""));
console.log(ulEl);
