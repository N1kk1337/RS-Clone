import { faker } from '@faker-js/faker';

function createRandomUser() {
  const password = faker.internet.password();
  return {
    email: faker.internet.email(),
    password: `${password}`,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    nickName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    confirmPassword: `${password}`,
  };
}

export const fakeUser = createRandomUser();
