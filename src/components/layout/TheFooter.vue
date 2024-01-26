<template>
  <div class="wrapper footer">
    <section class="container">
      <div class="row">
        <div class="col-6 col-md-2 mb-3">
          <h5>Discover Our Platform</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/" class="nav-link p-0 text-muted">Home</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/features" class="nav-link p-0 text-muted">Features</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/pricing" class="nav-link p-0 text-muted">Pricing</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/support" class="nav-link p-0 text-muted">Support</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/about" class="nav-link p-0 text-muted">About Us</router-link>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Our Solutions</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/" class="nav-link p-0 text-muted">Home</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/services" class="nav-link p-0 text-muted">Services</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/plans" class="nav-link p-0 text-muted">Plans</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/faqs" class="nav-link p-0 text-muted">FAQs</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/team" class="nav-link p-0 text-muted">Team</router-link>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Explore More</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <router-link to="/" class="nav-link p-0 text-muted">Home</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/blog" class="nav-link p-0 text-muted">Blog</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/contact" class="nav-link p-0 text-muted">Contact Us</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/testimonials" class="nav-link p-0 text-muted">Testimonials</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link to="/careers" class="nav-link p-0 text-muted">Careers</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Stay Updated with Our Latest Insights</h5>
            <p>
              Subscribe to our newsletter and receive monthly updates on
              industry trends, product launches, and exclusive offers directly
              in your inbox.
            </p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
              <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.wrapper {
  padding-top: 50px;
}

section.container {
  max-width: 1200px;
}

.footer {
  margin-top: auto;
}
</style>
