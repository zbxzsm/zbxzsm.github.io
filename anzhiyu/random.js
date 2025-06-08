var posts=["2025/06/08/这是另一篇新博文/","2025/06/08/这是一篇新的博文/","2025/06/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };