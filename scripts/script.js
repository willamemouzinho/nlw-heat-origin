const userSocialMedia = {
  github: 'willamemouzinho',
  youtube: 'willamemouzinho',
  instagram: 'willamemouzinho',
  facebook: 'willamemouzinho',
  twitter: 'willamemouzinho'
}
function changeSocialMediaLinks() {
  for (let link of socialLinks.children) {
    const social = link.getAttribute('id')
    link.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
    alert(link.children[0].href);
    
  }
}
changeSocialMediaLinks()
