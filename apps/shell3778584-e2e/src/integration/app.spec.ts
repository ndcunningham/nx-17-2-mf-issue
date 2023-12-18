import { getGreeting } from '../support/app.po';

describe('shell app', () => {
it('should display welcome message', () => {
cy.visit('/')
getGreeting().contains('Welcome shell3778584');
});

it('should load remote 1', () => {
cy.visit('/remote15330346')
getGreeting().contains('Welcome remote15330346');
});

it('should load remote 2', () => {
cy.visit('/remote26824250')
getGreeting().contains('Welcome remote26824250');
});

it('should load remote 3', () => {
cy.visit('/remote34662089')
getGreeting().contains('Welcome remote34662089');
});
});