<template>
  <main class="container-fluid">
    <div class="row">
      <section>
        <h1>Welcome</h1>
        <button>Toggle theme!</button>
        <p class="text-third">
          Current mode is: <output>system default</output>
        </p>
      </section>
    </div>

    <div class="row">
      <section>
        <h1>World PARTY</h1>
        <h3>Parties, Nightlife & Techno Music</h3>
        <h5>THE BEST PARTIES & EVENTS HAPPENING AROUND TULUM</h5>
      </section>
    </div>

    <div class="row">
      <section>
        <div class="card text-white bg-success">
          <div class="card-img-top">
            <img
              style="
                object-fit: contain;
                height: 80vw;
                max-width: 100%;
                max-height: 100%;
              "
              src="~/assets/404.jpeg"
              alt="404"
            />
          </div>

          <div class="card-body">
            <h3 class="card-title">Have Fun</h3>
            <h5 class="card-subtitle">LIVE THE TULUM EXPERIENCE</h5>
            <p class="card-text">
              Tulum, Mexico is a world-wide recognized spot for electronic music
              parties. Surrounded by impressive landscapes, Tulum congregates
              the best world DJ's along open minded travelers from all around
              the globe.
            </p>
            <button class="btn btn-dark">join our commnity</button>
            <div class="card-footer">STAY IN TUNE @ TELEGRAM</div>
          </div>
        </div>
      </section>
    </div>

    <div class="row">
      <section>
        <div class="card">
          <div class="card-body">
            <h5 class="card-subtitle">TULUM 2021</h5>
            <h2 class="card-title">DID YOU KNOW ...</h2>
            <p class="card-text text-second">
              The evidence of the first inhabitants of Cobá is recorded between
              100 BC. and 300 A.D.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="row">
      <section id="parties">
        <h1>Events</h1>

        <div
          v-for="event in parties"
          :key="event.title"
          class="card"
          style="height: 100vw"
        >
          <div v-lazy-container="{ selector: 'img' }" class="card-img-top">
            <img
              style="
                object-fit: contain;
                height: 80vw;
                max-width: 100%;
                max-height: 100%;
              "
              :data-src="event.metadata.main_image.imgix_url"
              alt="..."
            />
            <!-- <img style="object-fit: contain; width: 100%;" :data-src="event.metadata.main_image.imgix_url" alt="..."> -->
          </div>

          <div class="card-body">
            <p class="card-text">{{ event.title }}</p>
          </div>
          <hr />
        </div>
      </section>
    </div>

    <div class="row">
      <div class="col">1 of 2</div>
      <div class="col">2 of 2</div>
    </div>
    <div class="row">
      <div class="col">1 of 3</div>
      <div class="col">2 of 3</div>
      <div class="col">3 of 3</div>
    </div>

    <footer>Powered by simple html</footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      parties: [],
    }
  },
  async fetch() {
    this.parties = await fetch(
      'https://api.cosmicjs.com/v2/buckets/tulum/objects?pretty=true&query=%7B%22type%22%3A%22parties%22%7D&limit=20&props=slug,title,content,metadata'
    )
      .then((res) => res.json())
      .then((json) => json.objects)
  },
}
</script>

<style>
h1 {
  font-family: 'Major Mono Display';
  color: whitesmoke;
  word-spacing: 1px;
  direction: ltr;
  text-align: center !important;
  box-sizing: border-box;
  line-height: 1.05;
  text-transform: uppercase;
  font-size: 1.4em;
  margin-bottom: 0.8px;
  margin-top: 8px;
  letter-spacing: 0.2rem;
  font-weight: 700;
}
main {
  word-spacing: 1px;
  font-size: 0.875rem;
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
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
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
  font-size: 0.7rem;
  letter-spacing: 0.3rem;
  font-family: 'Roboto Slab';
  margin: 7px;
  text-transform: uppercase;
  font-weight: bold;
}
body {
  color: whitesmoke;
  font-family: 'Roboto Slab', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
