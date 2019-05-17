importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'apiKey': "AIzaSyDXtmo8yd34xs1Ib-QejASB1SNSppwai3E",
    'authDomain': "first-project-38df5.firebaseapp.com",
    'databaseURL': "https://first-project-38df5.firebaseio.com",
    'projectId': "first-project-38df5",
    'storageBucket': "first-project-38df5.appspot.com",
    'messagingSenderId': "1080040497200",
    'appId': "1:1080040497200:web:9c3a51a0147b7d2a"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/itwonders-web-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
