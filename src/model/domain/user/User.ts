class User {
    // ユーザー固有のID
    readonly uid: string
    // ユーザー名
    readonly name: string
    // メールアドレス
    readonly email: string
  
    constructor(uid: string, name: string, email: string) {

      if (!uid) {
        throw new Error("UIDは必須です。");
      }
      if (!name) {
          throw new Error("名前は必須です。");
      }
      if (name.length > 50) {
          throw new Error("名前は50文字以内である必要があります。");
      }
      if (!this.validateEmail(email)) {
          throw new Error("無効なメールアドレスです。");
      }

      this.uid = uid;
      this.name = name;
      this.email = email;  
    }
  
    // 他のUserオブジェクトと等価性を比較するメソッド
    equals(other: User): boolean {
      return this.uid === other.uid && this.email === other.email;
    }
    
    private validateEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
  
  export { User }
  