//Init Github.js
const github = new Github;

//Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search inputs event listner

searchUser.addEventListener('keyup', (e) => {
    //GEt input text

    const userText = e.target.value;

    if(userText!==''){
        // Make HTTP call

        github.getUsers(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
              // show alert
              ui.showAlert('User not found', 'alert alert-danger')
            }

            else {
              //show profile
              ui.showProfile(data.profile);
              ui.showRepos(data.repos)
            }
        })
    }

    else {
        // Clear Profile
        ui.clearProfile();
    }
})