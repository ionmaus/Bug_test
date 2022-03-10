import { ThugObject } from "../support/pages/mobile"
describe('Проверка доступности рессурса', function () {
    it('переадрессация', function () {
        cy
            .visit("http://insect-shop.ru/")

})});
describe('Проверка категорий', function () {

    for (let i=1;i<8;i++) {
        it('Проверка отклика категорий в каталоге', () => ThugObject.siteVisitCategory(i))
    }

})
describe('Проверка DropDown категорий', function () {
    it('should ', function () {
        cy
            .visit("http://insect-shop.ru/catalog/sredstva-ot-nasekomykh")
        cy
            .scrollTo(0, 400);
    });

    it('Проверка DropDown в каталоге', function () {
        cy
            .get('#omi-321 > :nth-child(1) > .level1')
            .trigger('mouseover');
        cy
            .get('#omi-322 > :nth-child(1) > .level2')
            .trigger("mouseover");
        cy
            .wait(500)
        cy
            .get('#omi-323 > div > a')
            .trigger("mouseover")
            .click();
        cy
            .wait(500);

        // cy
        //     .get(':nth-child(1) > .categories > :nth-child(1) > a')
        //     .click();
        // cy.get('.moduletable > .custom > p > a > img').click();
    });
});

