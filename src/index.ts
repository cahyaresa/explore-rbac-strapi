export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {

    const condition = {
      displayName: 'Have same branch with author',
      name: 'same-branch-with-author',
      async handler(user) {
        
        const articles = await strapi.entityService.findMany("api::article.article", {
          populate: {
            author: {
              populate: {
                branch: {
                  populate: {
                    users: {
                      filters :{
                        email :{
                          $eq: user.email
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })
        

        console.log("articles: ", articles);
        // for (let article of articles){
        //   console.log("article : ", article.author.branch);
        // }

        return {
          "branch.users.email": {$eq: user.email}
        }
      },
    };

    await strapi.admin.services.permission.conditionProvider.register(condition);
    
  },
};
