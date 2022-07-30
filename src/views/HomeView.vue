<script setup>
</script>

<template>
  <div class="">
    <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/images/image.jpg" alt="mg" />
        <div class="carousel-caption">
          <h4 class="">EXPERT TECHNICIANS, COMPETITIVE PRICES</h4>
          <p class="fs-5">
            We are committed to earning your trust by providing the expertise
            and value you expect.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/image1.jpg" alt="mg" />
        <div class="carousel-caption">
          <h4 class="">MAKE YOUR CAR LAST LONGER</h4>
          <p class="fs-5">
            Free oil change, April 15. Only if you have a "5" on your license
            plate.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/image2.jpg" alt="mg" />
        <div class="carousel-caption">
          <h4 class="">FIND THE TIRES THAT MATCH YOUR NEEDS</h4>
          <p class="fs-5">
            Take advantage of our lowest prices which automatically include
            coupons.
          </p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  <div class="make bg-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-md-6 text-center">
          <h6 class="text-center fw-bold pt-3 text-dark border-0">
            MAKE AN APPOINTMENT NOW WITH OUR ONLINE FORM
          </h6>
        </div>
        <div class="col-lg-6 col-sm-6 col-md-6 text-center">
          <div class="make mt-2">
            <button type="button" class="btn btn-info fw-bold rounded-0">
              MAKE AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="choose">
    <div class="container">
      <div class="row">
        <h1 class="text-center py-4">WHY CHOOSE US?</h1>
        <hr />
        <p class="text-center fs-5 py-2">
          We are one of the leading auto repair shops serving customers in
          Tucson. <br />
          All mechanic services are performed by highly qualified mechanics.
        </p>
      </div>
    </div>
  </div>

  <div class="jobs">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-6 py-5">
          <div class="icon text-center">
            <i class="bi bi-chat-left-text fs-1 text-info"></i>
          </div>
          <h6 class="text-center pt-4">EVERY JOB IS PERSONAL</h6>
          <hr />
          <p class="text-center py-2">
            If you want the quality you would expect from the dealership, but
            with a more personal and friendly atmosphere, you have found it.
          </p>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-6 py-5">
          <div class="icon text-center">
            <i class="bi bi-tools fs-1 text-info"></i>
          </div>
          <h6 class="text-center pt-4">BEST MATERIALS</h6>
          <hr />
          <p class="text-center py-2">
            We have invested in all the latest specialist tools and diagnostic
            software that is specifically tailored for the software in your
            vehicle.
          </p>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-6 py-5">
          <div class="icon text-center">
            <i class="bi bi-truck fs-1 text-info"></i>
          </div>
          <h6 class="text-center pt-4">PROFESSIONAL STANDARDS</h6>
          <hr />
          <p class="text-center py-2">
            Our auto repair shop is capable of servicing a variety of models. We
            only do the work that is needed to fix your problem.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="read text-center py-5">
    <button type="button" class="Read py-3 fw-bold border-0 px-3 py-2">
      READ MORE
    </button>
  </div>
  <div class="vehicles bg-light py-4">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-md-6">
          <img src="@/assets/images/car.jpg" alt="mg" />
        </div>
        <div class="col-lg-6 col-sm-6 col-md-6">
          <h2 class="text-center mt-2">VEHICLES SERVICED</h2>
          <hr class="ms-auto me-auto" style="width: 100px; height: 5px" />
          <p class="text-center py-4 fs-5" style="color: silver">
            We provide top notch maintenance service for all types of vehicles.
            <br />
            We are certified to service and repair the following makes:
          </p>
          <div class="">
            <div class="row">
              <div class="col-lg-4 col-sm-6 col-md-6 pt-2">
                <ul class="text-center list-unstyled">
                  <li>Motors</li>
                  <li>Lexus</li>
                  <li>Lincoln</li>
                  <li>Mazda</li>
                </ul>
              </div>
              <div class="col-lg-4 col-sm-6 col-md-6 pt-2">
                <ul class="text-center list-unstyled">
                  <li>Mercedes</li>
                  <li>Mercury</li>
                  <li>Mitsubishi</li>
                  <li>Nissan</li>
                  <li>Renault</li>
                </ul>
              </div>
              <div class="col-lg-4 col-sm-6 col-md-6 pt-2">
                <ul class="text-center list-unstyled">
                  <li>Plymouth</li>
                  <li>Pontiac</li>
                  <li>Rover</li>
                  <li>Saab</li>
                  <li>Saleen</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="Link d-flex justify-content-center mt-3">
            <a href="#" class="fw-bold py-2 px-3 border text-decoration-none"
              >VIEW FULL LIST</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="repair my-5">
    <div class="container">
      <h4 class="text-center fw-bold my-2">AUTO REPAIR SERVICES</h4>
      <hr class="ms-auto me-auto" style="width: 100px; height: 5px" />
      <p class="text-center fs-5" style="color: silver">
        We offer a full range of garage services to vehicle owners located in
        Tucson area. <br />
        Our professinals know how to handle a wide range of car services.
      </p>
      <div class="row g-0">
        <div class="col-lg-4 col-sm-12 col-md-6">
          <img
            src="../assets/images/engine.jpg"
            class="w-100 my-3 mb-0"
            alt="mg"
          />
          <div class="d-flex bg-light py-3">
            <h5 class="fw-bold mt-2 mx-4">ENGINE DIAGNOSTICS</h5>
            <i class="text-info fs-4 bi bi-chevron-right ms-auto"></i>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
          <img
            src="../assets/images/filter.jpg"
            class="w-100 my-3 mb-0"
            alt="mg"
          />
          <div class="d-flex bg-light py-3">
            <h5 class="fw-bold mt-2 mx-4">LUBE, OIL AND FILTERS</h5>
            <i class="text-info fs-4 bi bi-chevron-right ms-auto"></i>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
          <img
            src="../assets/images/hoses.jpg"
            class="w-100 my-3 mb-0"
            alt="mg"
          />
          <div class="d-flex bg-light py-3">
            <h5 class="fw-bold mt-2 mx-4">BELTS AND HOSES</h5>
            <i class="text-info fs-4 bi bi-chevron-right ms-auto mx-2"></i>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-info fw-bold my-3 rounded-0">
          VIEW ALL SERVICES
        </button>
      </div>
    </div>
  </div>
  <div class="">
    <div class="background mb-5">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-innerr">
          <div class="carousel-item active">
            <div class="text-light">
              <i class="text-end bi bi-pencil fs-1"></i>
            </div>
            <p class="text-light mt-4 fs-5">
              VIEW ALL SERVICES "I have taken several of the family cars here
              for the past several years and without exception the experiences
            </p>
            <hr class="bg-light w-25 ms-auto me-auto" style="height: 5px" />
            <h6 class="fw-bold text-light fs-5">Car</h6>
          </div>
          <div class="carousel-item">
            <div class="text-light">
              <i class="text-end bi bi-pencil fs-1"></i>
            </div>
            <p class="text-light mt-4 fs-5">
              VIEW ALL SERVICES " I would highly recommend this place to any one
              who wants great service, honest value, and really great people."
            </p>
            <hr class="bg-light w-25 ms-auto me-auto" style="height: 5px" />
            <h6 class="fw-bold text-light fs-5">Bus</h6>
          </div>
          <div class="carousel-item">
            <div class="text-light">
              <i class="text-end bi bi-pencil fs-1"></i>
            </div>
            <p class="text-light mt-4 fs-5">
              VIEW ALL SERVICES "I have taken several of the family cars here
              for the past several years and without exception the experiences."
            </p>
            <hr class="bg-light w-25 ms-auto me-auto" style="height: 5px" />
            <h6 class="fw-bold text-light fs-5">Van</h6>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon1 ms-5"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon1 me-5"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>

  <div class="overview">
    <h3 class="text-center">COMPANY OVERVIEW</h3>
    <hr class="ms-auto me-auto" style="height: 5px; width: 100px" />
    <p class="text-center fs-5" style="color: silver; letter-spacing: 1px">
      We can help you with everything from an oil change to an engine change.
      <br />
      We can handle any problem on both foreign and domestic vehicles.
    </p>
    <div class="container mt-3">
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-6">
          <h6 class="fw-bold py-2">CAR AUDIO SERVICE</h6>
          <div class="d-flex">
            <i class="bi bi-radioactive fs-1 mt-4 text-warning"></i>
            <p class="ms-4 mt-2 pb-3" style="color: silver">
              Services consequat luctus at justo auctor metus est donec. Tempus
              terminal morbi nulla donec elite maecenas modern forte elementum
              vehicula.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-6">
          <h6 class="fw-bold py-2">FREE OIL CHANGE</h6>
          <div class="d-flex">
            <i class="bi bi-vinyl fs-1 mt-4 text-warning"></i>
            <p class="ms-4 mt-2 pb-3" style="color: silver">
              Services consequat luctus at justo auctor metus est donec. Tempus
              terminal morbi nulla donec elite maecenas modern forte elementum
              vehicula.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-6">
          <h6 class="fw-bold py-2">ENGINE DIAGNOSTICS</h6>
          <div class="d-flex">
            <i class="bi bi-exclamation-circle fs-1 mt-4 text-warning"></i>
            <p class="ms-4 mt-2 pb-3" style="color: silver">
              Services consequat luctus at justo auctor metus est donec. Tempus
              terminal morbi nulla donec elite maecenas modern forte elementum
              vehicula.
            </p>
          </div>
        </div>
      </div>
      <div class="my-5">
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-md-6">
            <h6 class="fw-bold py-2">CAR A/C RECHARGE</h6>
            <div class="d-flex">
              <i class="bi bi-thermometer-snow fs-1 mt-4 text-warning"></i>
              <p class="ms-4 mt-2 pb-3" style="color: silver">
                Services consequat luctus at justo auctor metus est donec.
                Tempus terminal morbi nulla donec elite maecenas modern forte
                elementum vehicula.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
            <h6 class="fw-bold py-2">PARKING SENSORS CALIBRATION</h6>
            <div class="d-flex">
              <i class="bi bi-wifi fs-1 mt-4 text-warning"></i>
              <p class="ms-4 mt-2 pb-3" style="color: silver">
                Services consequat luctus at justo auctor metus est donec.
                Tempus terminal morbi nulla donec elite maecenas modern forte
                elementum vehicula.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
            <h6 class="fw-bold py-2">CAR BATTERY REPAIRS</h6>
            <div class="d-flex">
              <i class="bi bi-battery-full fs-1 mt-4 text-warning"></i>
              <p class="ms-4 mt-2 pb-3" style="color: silver">
                Services consequat luctus at justo auctor metus est donec.
                Tempus terminal morbi nulla donec elite maecenas modern forte
                elementum vehicula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row g-0 mt-3 pb-0">
    <div class="col-lg-3 col-sm-6 col-md-6">
      <div class="img bg-dark position-relative">
        <img src="../assets/images/image3.jpg" alt="mg" class="w-100" />
        <div
          class="
            tire
            position-absolute
            top-50
            start-50
            translate-middle
            text-center
          "
        >
          <h6 class="text-light">Tire Change</h6>
          <div class="my-2">
            <a
              href="#"
              class="
                text-light
                fst-normal
                border
                py-2
                px-3
                text-decoration-none
              "
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6 col-md-6">
      <div class="img bg-dark position-relative">
        <img src="../assets/images/image4.jpg" alt="mg" class="w-100" />
        <div
          class="
            tire
            position-absolute
            top-50
            start-50
            translate-middle
            text-center
          "
        >
          <h6 class="text-light">Oil Change</h6>
          <div class="my-2">
            <a
              href="#"
              class="
                text-light
                fst-normal
                border
                py-2
                px-3
                text-decoration-none
              "
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6 col-md-6">
      <div class="img bg-dark position-relative">
        <img src="../assets/images/image6.jpg" alt="mg" class="w-100" />
        <div
          class="
            tire
            position-absolute
            top-50
            start-50
            translate-middle
            text-center
          "
        >
          <h6 class="text-light">Lube Services</h6>
          <div class="my-2">
            <a
              href="#"
              class="
                text-light
                fst-normal
                border
                py-2
                px-3
                text-decoration-none
              "
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6 col-md-6">
      <div class="img bg-dark position-relative">
        <img src="../assets/images/image5.jpg" alt="mg" class="w-100" />
        <div
          class="
            tire
            position-absolute
            top-50
            start-50
            translate-middle
            text-center
          "
        >
          <h6 class="text-light">Brake Repair</h6>
          <div class="my-2">
            <a
              href="#"
              class="
                text-light
                fst-normal
                border
                py-2
                px-3
                text-decoration-none
              "
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="my-4 bg-light py-5 mt-0">
    <div class="row g-0">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <h4 class="d-flex justify-content-center aling-items-center">DO YOU LIKE WHAT YOU SEE</h4>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12">
       <div class="text-center mt-3">
         <button class="btn btn-primary rounded-0 ms-5 fw-bold">
          PURCHASE THEME
        </button>
       </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="mission">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-md-6">
          <h5 class="fw-bold">OUR MISSION</h5>
          <hr class="w-25" style="height: 4px" />
          <h6
            class="fs-5 mb-4"
            style="letter-spacing: 2px; color: silver; line-height: 30px"
          >
            We offer a full range of garage services to vehicle owners located
            in Tucson area. All mechanic services are performed by highly
            qualified mechanics. We can handle any car problem.
          </h6>
          <p class="my-4">
            We offer a full range of garage services to vehicle owners in
            Tucson. Our professionals know how to handle a wide range of car
            services. Whether you drive a passenger car or medium sized truck or
            SUV, our mechanics strive to
            <a href="#">ensure that your vehicle </a> will be performing at its
            best <a href="#">before leaving</a> our car shop.
          </p>
          <button class="btn btn-primary rounded-0 my-3">Read MORE</button>
        </div>
        <div class="col-lg-6 col-sm-6 col-md-6">
          <h5 class="fw-bold">POPULAR QUESTIONS</h5>
          <hr class="w-25" style="height: 4px" />
          <div class="border fixed">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Should I consider using synthetic motor oil?
            </button>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Synthetic engine oils are produced through a synthesis process
                that takes very small molecules and assembles them into larger
                designer molecules with premium lubricating properties.
              </div>
            </div>
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What parts should be replaced at what intervals?
            </button>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Synthetic engine oils are produced through a synthesis process
                that takes very small molecules and assembles them into larger
                designer molecules with premium lubricating properties.
              </div>
            </div>
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I keep track of routine maintenance?
            </button>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Synthetic engine oils are produced through a synthesis process
                that takes very small molecules and assembles them into larger
                designer molecules with premium lubricating properties.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="container my-5">
    <div class="row">
      <div class="col-lg-2 col-md-6 col-sm-6">
        <img src="../assets/images/logo_01.png" class="w-100" alt="mg" />
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <img src="../assets/images/logo_02.png" class="w-100" alt="mg" />
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <img src="../assets/images/logo_03.png" class="w-100" alt="mg" />
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <img src="../assets/images/logo_04.png" class="w-100" alt="mg" />
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <img src="../assets/images/logo_05.png" class="w-100" alt="mg" />
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <img src="../assets/images/logo_06.png" class="w-100" alt="mg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.img img:hover {
  opacity: 0.6;
  transition: all 0.6s;
}
.tire {
  opacity: 0;
  padding-top: 20px;
  transition: all 0.6s;
}
.img:hover .tire {
  opacity: 1;
  padding-top: 0;
}
.img a:hover {
  background-color: red;
  color: white;
}
.carousel-control-prev,
.carousel-control-next {
  top: 35%;
  bottom: 35%;
  background: lightblue;
  width: 5%;
  opacity: 0.5;
}
.carousel-control-prev-icon1,
.carousel-control-next-icon1 {
  top: 240px;
  position: relative;
  border: 1px solid;
  padding: 30px 30px;
  border-radius: 50%;
}
.icon {
  position: relative;
  width: 100px;
  height: 100px;
  padding: 32px 20px;
  margin-left: 36%;
}

.icon::before {
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 50%;
  border-left: 2px solid blue;
  border-right: 2px solid blue;
  border-top: 2px solid silver;
  border-bottom: 2px solid silver;
}

.icon:hover::before {
  transform: rotate(360deg);
  transition: all 2s ease;
}

.btn {
  padding: 10px 20px;
  box-shadow: inset 0 0 0 0 blue;
  transition: all 1s ease;
}
.btn:hover {
  box-shadow: inset 250px 0 0 0 blue;
  color: white;
}

.Read {
  transition: all 1s ease;
  box-shadow: inset 0 0 0 0 blue;
}
.Read:hover {
  box-shadow: inset 140px 0 0 0 blue;
  color: white;
}

.Link a:hover {
  background: blue;
  transition: 0.6s ease;
  color: white;
}
.background {
  background-image: url("../assets/images/background.jpg");
  width: 100%;
  height: 500px;
  background-size: cover;
  background-attachment: fixed;
}
.carousel-innerr {
  top: 150px;
  position: relative;
  text-align: center;
}
</style>
