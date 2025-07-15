import { faker } from "@faker-js/faker"

export function generateContacts(count = 1000) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number()
  }))
}