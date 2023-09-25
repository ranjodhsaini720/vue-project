<script>
export default {};
</script>

<template>
  <h5 class="ps-4 fw-bold bg-light py-4 text-center">CONTACT DETAILS</h5>

  <div class="mt-3">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13612.877149723598!2d76.25954056534424!3d31.46315340000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1659339821063!5m2!1sen!2sin"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="my-4">
          <input
            type="text"
            placeholder="Your Name *"
            class="py-3 w-100 shadow-none mt-4 border ps-2"
          />
          <input
            type="Email"
            placeholder="Your Email *"
            class="py-3 w-100 shadow-none mt-4 border ps-2"
          />
          <input
            type="text"
            placeholder="Your Phone *"
            class="py-3 w-100 shadow-none mt-4 border ps-2"
          />
          <div class="my-5">
            <input
              class="form-check-input me-3"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Please accepta <a href="#"> terms and conditions</a>
            </label>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="mt-4">
          <textarea
            name="text"
            class="w-100 shadow-none mt-4 border py-2 ps-2"
            cols="10"
            rows="9"
            placeholder="Message *"
          ></textarea>
        </div>
        <button class="btn btn-primary py-3 px-3 fw-bold my-4 rounded-0">
          SEND MESSAGE
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.btn {
  box-shadow: inset 2px 0 0 0 blue;
  transition: all 0.9s ease;
}
.btn:hover {
  box-shadow: inset 180px 0 0 0 blue;
  transition: all 0.9s ease;
}
</style>

