import { Contact } from "./Contact"

// Contact 関連のモデルを変換する
class ContactConverter implements DomainService, Converter {

  toDTOFBFromEntity(entity: Contact): Contact {

    const contact = new Contact({ id: entity.id, uid: entity.uid, content: entity.content })

    return contact
  }
}

export { ContactConverter }
