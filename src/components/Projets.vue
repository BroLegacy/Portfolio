<script>
export default {
  props: ['title', 'sub']
};
</script>

<template>
  <div class="top">
    <div class="title">
      <h1>{{ title }}</h1>
      <h2>{{ sub }}</h2>
    </div>
  </div>
  <main class="content-projets">
    <div class="parent">
      <a class="div1 item" href="https://www.figma.com/proto/iR8KHu7kI3HlIy6njeuzF4/Transivia?page-id=0%3A1&node-id=2-1522&t=lRoQjqoCzaDv2a8q-1">
        <img src="../assets/img/transivia.png">
        <div class="text">
          <span>Transivia</span>
          <p>Site de société de transport</p>
        </div>
      </a>
      <a class="div2 item" href="https://www.figma.com/proto/19dan959ZmLlwGktZrzymZ/Eatly?page-id=0%3A1&node-id=1-310&node-type=frame&viewport=155%2C722%2C0.47&t=91lXTWeS7gUTnKv6-1&scaling=min-zoom&content-scaling=fixed" target="_blank">
        <img src="../assets/img/eatly.png">
        <div class="text">
          <span>Eatly</span>
          <p>Une application de recette de cuisine</p>
        </div>
      </a>
      <a class="div3 item" href="https://github.com/BroLegacy/framwork" target="_blank">
        <img src="../assets/img/framework.png">
        <div class="text">
          <span>Framework</span>
          <p>Un simple framwork php</p>
        </div>
      </a>
    </div>
    <div class="btn">
      <router-link to="/contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="white"/>
        </svg>
        Contactez-moi
      </router-link>
    </div>
  </main>
</template>