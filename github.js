class Github {
    constructor() {
     this.client_id = "574d177a6a08387323f8";
     this.client_secret = "5481799be5867f87097496a6c843484ff81fa95f";
     this.repos_count = 5;
     this.repos_sort = 'created: asc';
    }

   async getUsers(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&?client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&?client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();

      const repos = await repoResponse.json();

      return {
          profile,
          repos
      }
   }

}


