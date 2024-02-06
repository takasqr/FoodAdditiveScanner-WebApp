import type { Contact } from "./Contact";

class ContactData implements DTO {
  id: string
  uid: string;
  content: string;

  constructor(contact: Contact) {
    this.id = contact.id
    this.uid = contact.uid
    this.content = contact.content
  }
}

export { ContactData }