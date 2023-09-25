<script>
export default {};
</script>

<template>
  <div class="bg-light py-4">
    <div class="container">
      <div class="d-flex">
        <h5 class="fw-bold">APPOINTMENT</h5>
        <p class="ms-auto" style="font-size: 15px">
          Mon - Fri: 7:30am - 5:30pm
        </p>
      </div>
    </div>
  </div>

  <div>
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
    <div class="my-5">
      <h4 class="fw-bold text-center">BOOK AN APPOINTMENT</h4>
      <hr class="w-25 ms-auto me-auto" style="height: 3px" />
      <p class="text-center fs-5 pt-3" style="color: silver">
        We are one of the leading auto repair shops serving customers in Tucson.
        <br />
        All mechanic services are performed by highly qualified mechanics.
      </p>
    </div>

    <div class="my-4">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <h6 class="ps-4 fw-bold bg-light py-3">VEHICLE YEAR</h6>
          <label for="customRange1" class="form-label mt-4 ps-4"
            >2013-2014-2015-2016-2017-2018-2019-2020</label
          >
          <input type="range" class="form-range" id="customRange1" />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <h6 class="ps-4 fw-bold bg-light py-3">VEHICLE MAKE</h6>
          <select
            class="form-select my-4 py-2 shadow-none rounded-0"
            aria-label="Default select example"
          >
            <option selected>Choose...</option>
            <option value="1">General Moter</option>
            <option value="2">Land Rover</option>
            <option value="3">Lexeu</option>
            <option value="3">Lincoln</option>
          </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <h6 class="ps-4 fw-bold bg-light py-3">VEHICLE MILEAGE</h6>
          <input
            type="text"
            placeholder="Vehicle mileage"
            class="mt-4 py-2 w-100 ps-2 border shadow-none"
          />
        </div>
      </div>
    </div>
    <div class="my-4">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <h6 class="ps-4 fw-bold bg-light py-3">APPOINTMENT DATE</h6>
          <input
            type="text"
            placeholder="Preffered Date of Appointment"
            class="py-2 w-100 mt-4 border ps-2"
          />

          <h6 class="bg-light ps-4 fw-bold py-3 mt-4">PREFFERED TIME FRAME</h6>

          <select class="form-select mt-4 py-2 shadow-none rounded-0"
            aria-label="Default select example">
            <option selected>Choose...</option>
            <option value="1">9:00AM-11:00AM</option>
            <option value="2">11:00AM-12:00PM</option>
            <option value="3">12:00PM-1:00PM</option>
            <option value="4">1:00PM-2:00PM</option>
            <option value="5">2:00AM-3:00PM</option>
            <option value="6">3:00PM-4:00PM</option>
            <option value="7">4:00PM-5:00PM</option>
            <option value="8">5:00PM-6:00PM</option>
          </select>

          <h6 class="bg-light ps-4 fw-bold py-3 mt-4">
            SELECT SERVICES NEEDED
          </h6>
          <div style="color: silver">
            <div class="mt-4 py-2">
              <i class="border fst-normal px-3 py-2">
                <input
                  class="form-check-input shadow-none rounded-0"
                  type="checkbox" />
                Air Conditioning</i
              >
              <i class="border fst-normal px-3 py-2">
                <input
                  class="form-check-input shadow-none rounded-0"
                  type="checkbox"
                />
                Brakes Repair</i
              >
              <i class="border fst-normal px-3 py-2">
                <input
                  class="form-check-input shadow-none rounded-0"
                  type="checkbox"
                />
                Engine Diagnostics</i
              >
            </div>
            <div class="mt-4 py-2">
              <i class="border fst-normal px-3 py-2">
                <input
                  class="form-check-input shadow-none rounded-0"
                  type="checkbox"
                />
                Helthing&Cooling</i
              >
              <i class="border fst-normal px-3 py-2">
                <input
                  class="form-check-input shadow-none rounded-0"
                  type="checkbox"
                />
                Oil,Lube&Filters</i
              >
              <i class="border fst-normal px-3 py-2">
                <input
                  class="form-check-input shadow-none rounded-0"
                  type="checkbox"
                />
                Steering&Suspension</i
              >
            </div>
            <div class="mt-4 py-2">
              <i class="border fst-normal px-3 py-2">
                <input
                  class="form-check-input shadow-none rounded-0"
                  type="checkbox"
                />
                Transmission Repair</i
              >
              <i class="border fst-normal px-3 py-2">
                <input
                  class="form-check-input shadow-none rounded-0"
                  type="checkbox"
                />
                Wheel Alignment</i
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <h6 class="ps-4 fw-bold bg-light py-3">CONTACT DETAILS</h6>
          <input
            type="text"
            placeholder="Your Name *"
            class="py-2 w-100 shadow-none mt-4 border ps-2"
          />
          <input
            type="Email"
            placeholder="Your Email *"
            class="py-2 w-100 shadow-none mt-4 border ps-2"
          />
          <input
            type="text"
            placeholder="Your Phone *"
            class="py-2 w-100 shadow-none mt-4 border ps-2"
          />
          <textarea
            name="text"
            class="w-100 shadow-none mt-4 border py-2 ps-2"
            cols="30"
            rows="10"
            placeholder="Additional Questions or Comments"
          ></textarea>

          <button class="w-100 btn btn-primary fw-bold rounded-0 py-3 mt-4">
            SUBMIT NOW
          </button>
        </div>
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
  box-shadow: inset 800px 0 0 0 blue;
  transition: all 0.9s ease;
}
</style>