const linksSocialMedia = {
  github: "AurelioMesquita",
  youtube: "UCiRn4Wiso0ymbYo_veEbtFA",
  instagram: "aurelio_mesquita",
  facebook: "aurelio.nogueira.35",
};
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com.br/${linksSocialMedia[social]}`;
  }
}
changeSocialMediaLinks();
