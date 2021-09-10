import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB0d2JOpZARbfv0Ek4G-_sZiBLlJp_RwJk',
  authDomain: 'tw-clone-30a72.firebaseapp.com',
  projectId: 'tw-clone-30a72',
  storageBucket: 'tw-clone-30a72.appspot.com',
  messagingSenderId: '978492599842',
  appId: '1:978492599842:web:4d7a0d977424933974647b',
  measurementId: 'G-R5VSZ2LP5P',
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then(mapUserFromFirebaseAuthToUser);
};

export const AddTweet = ({ avatar, content, userId, username }) => {
  return db.collection('tweets').add({
    avatar,
    content,
    userId,
    username,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const fetchLatestTweets = () => {
  return db
    .collection('tweets')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return {
          id,
          ...data,
        };
      });
    });
};
