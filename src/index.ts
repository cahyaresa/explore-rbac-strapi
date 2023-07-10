import author from "./api/author/controllers/author";

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

    
    const conditions = [
      // {
      //   displayName: 'Have same branch with author',
      //   name: 'same-branch-with-author',
      //   async handler(user) {      
  
      //     // // const author = await strapi.query('user', 'users-permissions').findOne({ id: user.id})
      //     // console.log("usser.id: ", user.email);
  
      //     const entries = await strapi.entityService.findMany('api::reviewer.reviewer', {
      //       populate: ['admin_user','branch'],
      //       filters: {
      //         admin_user: { id: user.id }
      //       }
      //     });

      //     const articles = await strapi.entityService.findMany('api::article.article', {
      //       // filters: {id : 1},
      //       populate: {
      //         branch : {
      //           populate: ["*"]
      //         }
      //       },
      //       filters: {
      //         branch: {
      //           slug: 'branch1'
      //         }
      //       }
      //       // populate : ["*"],
      //       // filters: {
      //       //     id: 1,
      //       // },
      //     });

      //     // const articles = strapi.db.query('api::article.article').findMany({ // uid syntax: 'api::api-name.content-type-name'
      //     //   where: {
      //     //     id: {
      //     //       $eq : 1
      //     //     },
      //     //   },
      //     //   populate: {
      //     //     author: true,
      //     //   },
      //     // });

      //     // for (let article of articles){
      //     //   console.log("article.branch.id: ", article.branch.id);
      //     // }

      //     // console.log("reviewer", entries[0].branch.id);

      //     // console.log("current user", user);
  
      //     return {
      //       "branch.id" : {$in: entries.map(
      //         (entry) => entry.branch.id)}
      //       // articles
      //     }

      //     // return { "branch.reviewer.admin_user.id" : {$eq : user.id}}
      //     // return  { 
      //     //   "author.branch" : {
      //     //     $elemMatch: {
      //     //       id: {
      //     //         $eq: entries[0].branch.id                  
      //     //       }
      //     //     }
      //     //   }
      //     // }

      //     // return user.email.includes("com")
      //   },
      // },  
      {
        displayName: 'Have same branch with user',
        name: 'same-branch-with-user',
        async handler(user) {
          const entries = await strapi.entityService.findMany('api::reviewer.reviewer', {
            populate: ['admin_user', 'branch', "role"],
            filters: {
              admin_user: { id: user.id }
            }
          });
          return {
            "branch.id" : {
              $in: entries.map((entry) => entry.branch.id)
            }
          }

            // return user.email.includes(".com")
        }
      }
    ] 
    await strapi.admin.services.permission.conditionProvider.registerMany(conditions);
    
  },
};
