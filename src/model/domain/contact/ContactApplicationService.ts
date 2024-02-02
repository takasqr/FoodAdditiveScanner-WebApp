class ContactApplicationService implements ApplicationService {

  private contactRepository: IContactRepository
  
  constructor(contactRepository: IContactRepository) {
    this.contactRepository = contactRepository
  }

  // Contact を DB に追加する
  addContact({ uid, content }: { uid: string, content: string }) {

    this.contactRepository.add({ uid: uid, content: content })
  }
}

export { ContactApplicationService }
