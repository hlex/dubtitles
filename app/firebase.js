import * as firebase from 'firebase'

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
  apiKey: 'AIzaSyDIWj_Wpqwc95SNn-bf_HhR4G_kqWYbbF0',
  authDomain: 'dubtitles-201307.firebaseapp.com',
  databaseURL: 'https://dubtitles-201307.firebaseio.com',
  projectId: 'dubtitles-201307',
  storageBucket: 'dubtitles-201307.appspot.com',
  messagingSenderId: '894436968375'
}
firebase.initializeApp(config)

export default firebase
