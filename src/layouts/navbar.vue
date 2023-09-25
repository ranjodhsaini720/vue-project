<script>
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
        <ul class="navbar-nav ms-auto fw-bold">
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
            <RouterLink class="nav-link" to="/Appointment"
              >Appointment</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Contact">Contact</RouterLink>
          </li>
        </ul>
        <!-- <form class="d-flex"> -->
        <!-- <input
            class="form-control me-2 shadow-none"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button> -->
        <!-- </form> -->
      </div>
    </div>
  </nav>
</template>

<style>
.nav-item {
  padding: 0 5px;
  margin-right: 2%;
  box-shadow: inset 0 0 0 0 silver;
  transition: all 0.7s ease;
}
.nav-item:hover {
  box-shadow: inset 150px 0 0 0 silver;
  transition: all 0.7s ease;
  color: white;
}
.div {
  padding-top: 3%;
  position: relative;
}
</style>