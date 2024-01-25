class Contact implements ContactData, DomainModel {
  // ユーザー固有のID
  readonly uid: string

  readonly content: string

  constructor(uid: string, content: string) {
    this.uid = uid
    this.content = content
  }

  equals(): boolean {
    // 仮
    return false
  }

  toObject(): ContactData {
    return {
      uid: this.uid,
      content: this.content
    };
  }
}

export { Contact };