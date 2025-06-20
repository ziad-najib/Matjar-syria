// بيانات وهمية للأقسام
const categories = [
  { name: "ملابس", description: "أحدث صيحات الموضة" },
  { name: "إكسسوارات", description: "مجوهرات ونظارات" },
  { name: "عروض", description: "تخفيضات موسمية" }
];

const container = document.getElementById("category-list");

categories.forEach(cat => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${cat.name}</h3><p>${cat.description}</p>`;
  div.style.border = "1px solid #ccc";
  div.style.padding = "10px";
  div.style.margin = "10px 0";
  container.appendChild(div);
});
