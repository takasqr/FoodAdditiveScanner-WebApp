import { getFirestore, Firestore, collection, addDoc } from "firebase/firestore";

class ContactRepository {
  private db: Firestore
  private collectionName: string

  constructor() {
    this.db = getFirestore()
    this.collectionName = 'contacts'
  }

  async create(contact: ContactData): Promise<string> {
    try {
      const docRef = await addDoc(collection(this.db, this.collectionName), contact);
      console.log("Document: ", docRef)
      
      // 成功時はドキュメントIDを返す
      return docRef.id;
    
    } catch (e) {
      console.error("Error: ", e);
      throw e; // エラーを呼び出し元に伝える
    }
  }
}

export { ContactRepository };
