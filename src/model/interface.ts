interface DataModel {

}

interface ContactData extends DataModel {
  uid: string;
  content: string;
}

interface DomainModel {
  equals(): boolean
  toObject(): DataModel;
}