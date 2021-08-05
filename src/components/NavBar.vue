<template>
  <div class="a-nav row" v-if="redirect !== '/login'">
    <div class="col-10">
      <div class="a-logo">
        <router-link
          ref="link"
          to="/"
          class="big-link"
          style="display: inline-flex;"
        >
          <img
            src="@/assets/logo.png"
            alt="Sendoso LMS"
            width="40"
            height="40"
          />
          <div class="a-logo-text">
            L M S
          </div>
        </router-link>
      </div>
      <div class="breadcrumbs" v-if="home">
        <span class="material-icons-outlined arrows">
          chevron_right
        </span>
        <div>
          {{ name }}
        </div>
      </div>
    </div>
    <div class="col-1">
      <div
        class="row"
        style="position:relative; width:100%; height: 100%; text-align:center;"
      >
        <div class="col">
          <span
            title="Go Back"
            @click="$router.go(-1)"
            :class="`material-icons-outlined bell clickable ${effect}`"
          >
            arrow_back_ios
          </span>
        </div>
      </div>
    </div>
    <div class="col-1">
      <div
        class="row"
        style="position:relative; width:100%; height: 100%; text-align:center;"
      >
        <div class="col">
          <span
            @click="logout"
            :class="`material-icons-outlined bell clickable ${effect}`"
          >
            power_settings_new
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const jwt = require("jsonwebtoken");

export default {
  props: {},
  data() {
    return {
      effect: "",
      show: false,
      notifSHow: false,
      home: false,
      featuresOpen: false,
      redirect: "",
      name: "",
      role: "",
    };
  },
  watch: {
    $route(to) {
      const this_ = this;
      const toPage = to;
      document.title = toPage.name + " | HRMS";
      const path = toPage.path;
      if (path !== "/") {
        this.home = true;
      } else {
        this.home = false;
      }
      const name_ = toPage.name;
      this.redirect = path;
      this.name = name_;
      const token = sessionStorage.getItem("token");
      if (token !== null) {
        jwt.verify(token, process.env.VUE_APP_BE_JWT_SECRET, function(
          err,
          decoded
        ) {
          if (decoded !== undefined) {
            sessionStorage.setItem("role", decoded.user.role);
            if (path == "/login") {
              this_.$router.push("/");
            }
          } else {
            this_.$router.push("/login");
          }
        });
      }
    },
  },
  methods: {
    logout() {
      sessionStorage.setItem("token", null);
      this.$router.push("/login");
    },
    createRipple(e) {
      e.target.classList.add("ripple");
      setTimeout(() => {
        e.target.classList.remove("ripple");
      }, 100);
    },
  },
};
</script>

<style>
.a-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 grey;
  z-index: 9999;
}
.a-nav .a-logo {
  position: relative;
  padding: 10px;
  display: inline-flex;
}
.a-nav .a-logo .a-logo-text {
  font-size: 27px;
  margin-left: 15px;
  font-weight: 600;
  color: var(--official);
}
.big-link {
  text-decoration: none;
  position: relative;
  color: inherit;
}
.profile-image {
  border-radius: 50%;
  margin: 10px;
}
.bell {
  padding: 17px;
}
.clickable {
  user-select: none;
  cursor: pointer;
}
.breadcrumbs {
  display: inline-flex;
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
}
.breadcrumbs > span {
  position: relative;
  font-size: 42px;
  padding: 9px;
  margin-left: 15px;
  color: gray;
}
.breadcrumbs > div {
  padding: 15px;
  /* font-style: italic; */
  color: gray;
  font-size: 21px;
  margin-left: 10px;
  cursor: pointer;
}

.ripple {
  /* position: absolute; The absolute position we mentioned earlier */
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(196, 196, 196, 0.7);
}

.notif-box {
  position: absolute;
  top: 45px;
  right: 160px;
  width: 250px;
  height: 400px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px grey;
  border-radius: 15px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
