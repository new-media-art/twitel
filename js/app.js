const app = new Vue({
    el: '#app',
    data: {
      username: 'Code-Pusher',
      newTweet: '',
      tweets: [
        'Started learning Vue JS. Wish me luck!', 
        'Pushers are goint to push.', 
        'Today I start learning Vue. I got this.'
      ],
      bio: 'Code-Pusher is my name, and pushing code is my game.'
    }
  });