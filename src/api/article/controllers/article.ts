/**
 * article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', ({strapi}) => ({
    
    

    async findOne(ctx) {
        console.log(ctx);


        const response = await super.findOne(ctx);
        // some more logic
        console.log(response);
      
        return response;

    //     const entityManager =  strapi.service('entity-manager');
    //     const permissionChecker = strapi.service('permission-checker').create({ userAbility, model });

    //     if (permissionChecker.cannot.read()) {
    //     return ctx.forbidden();
    //     }

    //     const entity = await entityManager.findOneWithCreatorRolesAndCount(id, model);

    //     console.log("ini isinya: " , entity);

    //     if (!entity) {
    //     return ctx.notFound();
    //     }

    //     if (permissionChecker.cannot.read(entity)) {
    //     return ctx.forbidden();
    //     }

    //     ctx.body = await permissionChecker.sanitizeOutput(entity);
    }
}));
