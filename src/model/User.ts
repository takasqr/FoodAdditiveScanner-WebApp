class User {
    // ユーザー固有のID
    private readonly uid: string
    // ユーザー名
    private readonly name: string
    // メールアドレス
    private readonly email: string
  
    constructor(uid: string, name: string, email: string) {
      this.uid = uid;
      this.name = name;
      this.email = email;

      // ここで不変性を確保するためのバリデーションを行う。
    
    }
  
    // 各属性の値を取得するためのgetterメソッド
    getId() {
      return this.uid;
    }
  
    getName() {
      return this.name;
    }
  
    getEmail() {
      return this.email;
    }
  
    // Value Objectは不変であるため、値を変更するためのsetterメソッドは提供しません。
  
    // 他のUserオブジェクトと等価性を比較するメソッド
    equals(other: User) {
      return this.uid === other.getId() && this.email === other.getEmail();
    }
  }
  
  export default User;
  