<template>
  <main>
    <h1>Welcome</h1>
    <footer>
      Powered by simple html
    </footer>
  </main>
</template>

<script>
export default {}
</script>
<style gloabl>
   /* Roboto regular */

    @font-face {
      font-family: "Major Mono Display";
      src: url("fonts/MajorMonoDisplay-Regular.ttf") format('truetype');
      src: url("fonts/MajorMonoDisplay-Regular.woff") format('woff');
      /* src: url("fonts/MajorMonoDisplay-Regular.eot");
      src: url("fonts/MajorMonoDisplay-Regular.eot");
      src: url("/fonts/MajorMonoDisplay-Regular.eot?#iefix") format('embedded-opentype'),
        url("fonts/MajorMonoDisplay-Regular.woff2") format('woff2'),
        url("fonts/MajorMonoDisplay-Regular.woff") format('woff'),
        url("fonts/MajorMonoDisplay-Regular.ttf") format('truetype'); */
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "Roboto Slab";
      src: url("fonts/RobotoSlab-Regular.ttf") format('truetype');
      src: url("fonts/RobotoSlab-Regular.woff") format('woff');
      font-weight: 400;
      font-style: normal;
    }

    h1 {
      font-family: "Major Mono Display";
      color: whitesmoke;
      word-spacing: 1px;
      direction: ltr;
      text-align: center !important;
      box-sizing: border-box;
      line-height: 1.05;
      text-transform: uppercase;
      font-size: 1.4em;
      margin-bottom: .8px;
      margin-top: 8px;
      letter-spacing: .2rem;
      font-weight: 700;
    }

    main {
      word-spacing: 1px;
      font-size: .875rem;
      font-weight: 400;
      line-height: 1.5;
      color: #c5fbee;
      text-align: center;
      direction: ltr;
      box-sizing: border-box;
      position: relative;
      float: right;
      min-height: 100vh;
      background: radial-gradient(circle at 30% 20%, #5c5c5f -70%, #0a0a0a 35%);
      transition: all .5s cubic-bezier(.685, .0473, .346, 1);
      width: 100%;
      border-top: 2px solid #42b883;
      border-bottom: 2px solid #42b883;
    }

    footer {
      word-spacing: 1px;
      text-align: center !important;
      box-sizing: border-box;
      color: #c5fbee !important;
      line-height: 1rem;
      font-size: .7rem;
      letter-spacing: .3rem;
      font-family: "Roboto Slab";
      margin: 7px;
      text-transform: uppercase;
      font-weight: bold;
    }

    body {
      color: whitesmoke;
      font-family: "Roboto Slab", Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
</style>