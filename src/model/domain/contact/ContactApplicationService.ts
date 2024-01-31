class ContactApplicationService {

  private contactRepository: IContactRepository
  
  constructor(contactRepository: IContactRepository) {
    this.contactRepository = contactRepository
  }

  create(contactData: ContactData) {

    this.contactRepository.seve(contactData)
  }
}

export { ContactApplicationService }
