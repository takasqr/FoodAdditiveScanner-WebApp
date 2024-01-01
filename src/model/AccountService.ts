import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { useAuthStore } from '@/stores/auth'

// 認証関連の関数を提供する
class AccountService {

    // ログイン
    signin(email: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                resolve()
            })
            .catch((error) => {
                reject(error)
            });
        })
    }

    // ユーザー登録
    signup(email: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user
                    const email = user.email ? user.email : ''
                    const uid = user.uid

                    const store = useAuthStore()
                    // ユーザー名は email で代用する
                    store.signin(uid, email, email)

                    resolve()
                })
                .catch((error) => {
                    reject(error)
                });
        })
    }

    // ログアウト
    signout(): Promise<void> {
        return new Promise((resolve, reject) => {
            const auth = getAuth();
            signOut(auth).then(() => {

                resolve();
            }).catch((error) => {
                // An error happened.
                console.error('ログアウト失敗。', error)
                reject
            });
        });
    }

    /**
     * ログイン状態をチェックし、コールバック関数を実行する。
     * @returns Promise<boolean> - ユーザーがログインしている場合はtrue、そうでない場合はfalse。
     */
    checkAuthState(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {

                    const email = user.email ? user.email : ''
                    const uid = user.uid
                    
                    const store = useAuthStore()
                    // ユーザー名は email で代用する
                    store.signin(uid, email, email)
                    
                    resolve(true); // Promiseをtrueで解決する
                } else {
                    
                    resolve(false); // Promiseをfalseで解決する
                }
            }, (error) => {
                // エラー処理
                console.error('認証状態の監視中にエラーが発生しました', error);
                reject(error); // Promiseをエラーで拒否する
            });
        });
    }
}

export default AccountService
