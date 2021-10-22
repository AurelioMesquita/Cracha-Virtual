const linksSocialMedia = {
  github: "AurelioMesquita",
  youtube: "channel/UCiRn4Wiso0ymbYo_veEbtFA",
  instagram: "aurelio_mesquita",
  facebook: "aurelio.nogueira.35",
};
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com.br/${linksSocialMedia[social]}`;
  }
}
function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      userName.textContent = data.name;
      userLogin.href = data.html_url;
      userLoginName.textContent = data.login;
      userBio.textContent = data.bio;
      userPhoto.src = data.avatar_url;
    })
  );
  alert(apiProfile);
}
changeSocialMediaLinks();
getGitHubProfilesInfos();
