//기본 데이터 SET JSON
const menuDb = {
  pageName: "pyeoda", //홈페이지 이름
  mainPage: "../../home.html", //로고 클릭시 링크
  menuList: [
    //메뉴 이름, 링크 url
    {
      name: "소개",
      url: "../introduce/intro.html",
    },
    {
      name: "독서모임",
      url: "../book/book.html",
    },
    {
      name: "토크콘서트",
      url: "../talk/talk.html",
    },
    {
      name: "클럽활동",
      url: "./club.html",
    },
    {
      name: "문의",
      url: "file:///C:/Users/Jisung/Desktop/project/second_shot/home.html#soger",
    },
  ],
  socialList: [
    {
      name: "instagram", //소셜 네트워크명
      url: "https://www.instagram.com/jigung2", //링크 주소
      logo: '<i class="fab fa-instagram"></i>', //FontAwesome 로고
    },
    {
      name: "facebook", //소셜 네트워크명
      url: "https://www.facebook.com/profile.php?id=100005078139453", //링크 주소
      logo: '<i class="fab fa-facebook"></i>', //FontAwesome 로고
    },
  ],
};

//CREATE ELEMENTS
const navBar = document.createElement("nav");
navBar.classList.add("navbar");
const navBar_logo = document.createElement("div");
navBar_logo.classList.add("navbar-logo");
const navBar_menu = document.createElement("div");
navBar_menu.classList.add("navbar-menu");
const navBar_links = document.createElement("div");
navBar_links.classList.add("navbar-links");
const navBar_btn = document.createElement("div");
navBar_btn.classList.add("navbar-btn");

//LOGO 관련
navBar_logo.innerHTML = `
    <a href="${menuDb.mainPage}">
        <h1>${menuDb.pageName}</h1>
    </a>
`;

//MENU 관련
const menu_ulTag = document.createElement("ul");
menuDb.menuList.forEach((menu) => {
  menu_ulTag.innerHTML += `
            <li><a href="${menu.url}">${menu.name}</a></li>
        `;
});
navBar_menu.append(menu_ulTag);

//소셜 링크 관련
menuDb.socialList.forEach((social) => {
  navBar_links.innerHTML += `
    <a href="${social.url}">${social.logo}</a>
    `;
});

//메뉴 햄버거 버튼 관련
navBar_btn.innerHTML = `<i class="fa fa-bars"></i>`;
//메뉴 햄버거 버튼 관련 (Script)
navBar_btn.addEventListener("click", () => {
  navBar_menu.classList.toggle("active");
  navBar_links.classList.toggle("active");
});

//append All Childs
navBar.append(navBar_logo, navBar_menu, navBar_links, navBar_btn);
document.querySelector("body").append(navBar);
