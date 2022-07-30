<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="div"></div>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border fixed-top">
    <div class="container">
      <a class="navbar-brand fs-4" href="#">Car Service</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Blog">Blog</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Services">Services</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Contact">Contact</RouterLink>
          </li>
        </ul>
        <form class="d-flex">
          <!-- <input
            class="form-control me-2 shadow-none"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button> -->
        </form>
      </div>
    </div>
  </nav>
</template>

<style>
.nav-item {
 
  padding: 0px 10px;
  margin-right: 2%;
  border-radius: 2px;
  font-weight: 600;
  box-shadow: inset 0 0 0 0 silver;
  transition: all 0.6s ease;
  color: white;
}
.nav-item:hover {
  box-shadow: inset 100px 0 0 0 silver;
}
.div {
  padding-top: 4%;
  position: relative;
}
</style>