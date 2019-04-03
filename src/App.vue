<template>
  <div id="app">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
	  <div class="container">
		  <div class="navbar-brand">
			<router-link class="navbar-item" to="/">
				<strong class="has-text-link">SRU Apps Center</strong>
			</router-link>
			<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
			  <span aria-hidden="true"></span>
			  <span aria-hidden="true"></span>
			  <span aria-hidden="true"></span>
			</a>
		  </div>
		  <div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<router-link to="/car-timeline" class="navbar-item font-kanit">ตารางการขอใช้รถ</router-link>
				<router-link to="/car-available" class="navbar-item font-kanit">ตรวจสอบรถว่าง</router-link>
				<router-link to="/room-available" class="navbar-item font-kanit">ตรวจสอบห้องว่าง</router-link>
			</div>
			<div class="navbar-end">
			  <div class="navbar-item">
				<div class="buttons">
				  <a class="button is-primary">
						<strong>Sign up</strong>
				  </a>
				  <a class="button is-light">Log in</a>
				</div>
			  </div>
			</div>
		  </div>
	  </div>
	</nav>
  <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }
}
</script>