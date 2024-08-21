import { faker } from '@faker-js/faker';

Cypress.Commands.add('generateRandomUserData', () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    // Adicione outros campos conforme necessário
  };
});