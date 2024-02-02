class Contact implements Entity {
  // Contact 固有の ID
  readonly id: string
  // ユーザー固有の ID
  readonly uid: string

  readonly content: string

  constructor({ id, uid, content }: { id: string, uid: string, content: string }) {
    this.id = id
    this.uid = uid
    this.content = content
  }

  equals(): boolean {
    return false
  }
}

export { Contact };