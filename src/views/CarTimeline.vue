<template>
  <div>
    <section class="hero is-info is-bold">
      <div class="hero-body">
          <div class="container">
              <h1 class="title font-kanit">ตารางการขอใช้รถ</h1>
              <h2 class="subtitle font-kanit">{{ today | moment("วันddddที่ Do MMMM YYYY") }}</h2>
          </div>
      </div>
    </section>
    <div class="section">
      <div class="container">
        <div class="box">
          <article class="media" v-for="item in carbookings" :key="item.carbookingitemid">
              <figure class="media-left">
                <p class="image is-48x48">
                  <img class="is-rounded" :src="`http://doc.sru.ac.th/VNReports/Main/MIS/Staff/Applications/StaffDisplay.aspx?staffId=${item.requeststaffid}`" @error="imageLoadError($event)">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong class="font-kanit"><i class="fas fa-clock has-text-primary"></i> {{ item.timefrom }} - {{ item.timeto }}</strong>
                  </p>
                  <p>
                    <span class="font-kanit"><i class="fas fa-calendar has-text-warning"></i> {{ item.datefrom }} - {{ item.dateto }}</span>
                  </p>
                  <p>
                    <span class="font-kanit"><i class="fas fa-bus has-text-info"></i> {{ item.carname }} <small class="has-text-grey">({{ item.licence }})</small></span>
                  </p>
                  <p>
                    <span class="font-kanit"><i class="fas fa-map-marker has-text-danger"></i> {{ item.location }}</span>
                  </p>
                  <p>
                    <span class="font-kanit"><i class="fas fa-user has-text-success"></i> {{ item.requestname }}</span>
                  </p>
                </div>
              </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: new Date(),
      carbookings: []
    }
  },
  methods: {
    fetch() {
      this.axios.get('http://apps.sru.ac.th/car-queue/json.php').then(response => {
        this.carbookings = response.data
      })
    },
    imageLoadError(event) {
      event.target.src = 'https://bulma.io/images/placeholders/48x48.png'
    }
  },
  mounted() {
    this.fetch()
  }
}
</script>

<style>

</style>
