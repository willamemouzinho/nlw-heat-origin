const userNameSocialMedia = {
  github: 'willamemouzinho',
  youtube: 'willamemouzinho',
  instagram: 'willamemouzinho',
  facebook: 'willamemouzinho',
  twitter: 'willamemouzinho'
}
function changeSocialMediaLinks() {
  for (let link of socialLinks.children) {
    const socialName = link.getAttribute('id')
    link.children[0].href = `https://${socialName}.com/${userNameSocialMedia[socialName]}`
    //alert(link.children[0].href);
  }
}

function getGitHubProfileInfos() {
  const urlProfile = `https://api.github.com/users/${userNameSocialMedia.github}`
  fetch(urlProfile).then(response => response.json()).then(data => {
    userPhotoGitHub.src = data.avatar_url
    userNameGitHub.textContent = data.name
    userLoginGitHub.textContent = data.login
    userLinkGitHub.href = data.html_url
    userBioGitHub.textContent = data.bio
  })
}

changeSocialMediaLinks()
getGitHubProfileInfos()