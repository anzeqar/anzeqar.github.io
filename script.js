fetch(
  "https://raw.githubusercontent.com/anzeqar/projects-collection/master/projects.json"
).then((res) =>
  res.json().then((res) => {
    const projectsSection = document.querySelector(".projects-section");
    let projectNames = ``;
    for (let i = 0; i < res.length; i++) {
      projectNames += `
      <button col-6 class="btn btn-dark shadow m-2">
      <div class='p-1'></div>
        <a
          href="${res[i].url}"
          target="_blank"
          class="text-warning h4 ms-auto text-decoration-none"
        >
          ${res[i].name}
        <hr>
        <p class='text-info h6'>${res[i].tech}</p>
        <p class='text-light h6'>${res[i].summary}</p>
        </a
        >
      </button>
`;
    }
    projectsSection.innerHTML = projectNames;
  })
);

const socialLinks = {
  LinkedIn: "https://www.linkedin.com/in/anzeqar/",
  CodePen: "https://codepen.io/anzeqar",
  Instagram: "https://www.instagram.com/anzeqar/",
  Website: "https://anzeqar.github.io/",
  "Stack Overflow": "https://stackoverflow.com/users/15504076/anzeqar",
  Hackerrank: "https://www.hackerrank.com/anzeqar",
  Twitter: "https://twitter.com/anzeqar",
  Reddit: "https://www.reddit.com/user/anzeqar",
  Medium: "https://medium.com/@anzeqar",
  Quora: "https://www.quora.com/profile/Anzeqar",
  Facebook: "https://www.facebook.com/anzeqar",
  LeetCode: "https://leetcode.com/anzeqar/",
  CodeChef: "https://www.codechef.com/users/anzeqar",
  CodeForces: "https://codeforces.com/profile/anzeqar",
  YouTube: "https://www.youtube.com/channel/UC3Ef_Onf71sDdmoSbVUTfqg",
  Github: "https://github.com/anzeqar",
  "Dev.to": "https://dev.to/anzeqar",
  "Code Wars": "https://www.codewars.com/users/anzeqar",
  FreeCodeCamp: "https://www.freecodecamp.org/anzeqar",
};

let socialLinksHTML = "";

for (key in socialLinks) {
  socialLinksHTML += `<a
  href="${socialLinks[key]}"
  target="_blank"
  class="text-light text-decoration-none"
>
    <button class="btn btn-success m-2">
          
            ${key}
        </button></a
        >
    
    `;
  console.log(`${key} : ${socialLinks[key]}`);
}

const socialLinksContainer = document.querySelector(".social-links-container");

socialLinksContainer.innerHTML = socialLinksHTML;
