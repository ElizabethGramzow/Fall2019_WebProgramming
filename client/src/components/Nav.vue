<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item" exact-active-class="active">
        <i class="fas fa-home fa-pull-left"></i>
        Home
    </router-link>

    <a @click.prevent="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isOpen }">
    <div class="navbar-start">

      
      <router-link active-class="active" to="/about" class="navbar-item">
        <i class="fab fa-vuejs fa-pull-left"></i>
        About
      </router-link>

      <router-link active-class="active" to="/game" class="navbar-item">
        <i class="fas fa-gamepad fa-pull-left"></i>
        Game
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable" active-class="kind-of-active">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <router-link active-class="active" to="/about" class="navbar-item">
              <i class="fab fa-vuejs fa-pull-left"></i>
              About
            </router-link>
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  data(){
      return {
          isOpen: false
      }
  }
}
</script>

<style>
  .active {
    background-color: aliceblue;
    font-weight: bold;
  }
  .kind-of-active {
    background-color: aliceblue;
    font-weight: bold;
  }
</style>