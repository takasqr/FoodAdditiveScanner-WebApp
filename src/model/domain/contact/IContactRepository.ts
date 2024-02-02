interface IContactRepository {
  add({ uid, content }: { uid: string, content: string }): Promise<string>
}