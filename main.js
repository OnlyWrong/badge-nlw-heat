let socialLinksMedia = {
  github: 'OnlyWrong',
  youtube: 'maykbrito',
  facebook: 'Tdksu.Neurhey',
  twitter: '@Dave95786069',
  instagram: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialLinksMedia[social]}`
  }
}
changeSocialMediaLinks()

function userGitHubInfo() {
  const url = `https://api.github.com/users/${socialLinksMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
userGitHubInfo()
