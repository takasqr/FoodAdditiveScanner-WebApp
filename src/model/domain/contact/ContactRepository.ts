import { getFirestore, Firestore, collection, addDoc, setDoc, doc } from "firebase/firestore";

class ContactRepository implements IContactRepository {
  private db: Firestore
  private collectionName: string

  constructor() {
    this.db = getFirestore()
    this.collectionName = 'contacts'
  }

  async update(contactData: ContactData): Promise<ContactData> {
    try {

      // setDoc は id が被った時に上書きされてしまうので Firestore のセキュリティルールで防御する
      await setDoc(doc(this.db, this.collectionName, contactData.id), contactData)

      return contactData;
    
    } catch (e) {
      console.error("Error: ", e);
      throw e; // エラーを呼び出し元に伝える
    }
  }

  async add({ uid, content }: { uid: string, content: string }): Promise<string> {
    try {

      const contactDataFB = {
        uid: uid,
        content: content
      }

      const docRef = await addDoc(collection(this.db, this.collectionName), contactDataFB);
      console.log("Document: ", docRef)

      // 成功時はドキュメントIDを返す
      return docRef.id;
    
    } catch (e) {
      console.error("Error: ", e);
      throw e; // エラーを呼び出し元に伝える
    }
  }

  delete(contactData: ContactData): void {
    
  }
}

export { ContactRepository };
