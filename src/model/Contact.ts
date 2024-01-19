class Contact {
  // ユーザー固有のID
  readonly uid: string

  readonly content: string

  constructor(uid: string, content: string) {
    this.uid = uid
    this.content = content
  }
}

export default Contact