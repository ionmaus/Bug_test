export class BugObject {
    siteVisitCategory(index){
        cy
            .get(':nth-child(1) > .categories > :nth-child('+index+') > a')
            .click();
        cy.get('.moduletable > .custom > p > a > img').click();
    }


}

export const ThugObject = new BugObject()
