import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB0d2JOpZARbfv0Ek4G-_sZiBLlJp_RwJk",
    authDomain: "tw-clone-30a72.firebaseapp.com",
    projectId: "tw-clone-30a72",
    storageBucket: "tw-clone-30a72.appspot.com",
    messagingSenderId: "978492599842",
    appId: "1:978492599842:web:4d7a0d977424933974647b",
    measurementId: "G-R5VSZ2LP5P"
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

export const loginWithGitHub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider).then(user => {
        const {additionalUserInfo} = user;
        const {username, profile} = additionalUserInfo
        const {avatar_url, blog} = profile
        return {
            avatar: avatar_url,
            username,
            url: blog
        }
    })
}

