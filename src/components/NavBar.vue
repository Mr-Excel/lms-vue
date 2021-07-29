<template>
  <div class="a-nav row">
    <div class="col-8">
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
    </div>
    <div class="col-3"></div>
    <div class="col-1">
      <div
        class="row"
        style="position:relative; width:100%; height: 100%; text-align:center;"
      >
        <div class="col">
          <span
            @click="createRipple"
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
export default {
  data() {
    return {
      effect: '',
      show: false,
      notifSHow: false,
      featuresOpen: false,
    };
  },
  methods: {
    createRipple(e) {
      e.target.classList.add('ripple');
      setTimeout(() => {
        e.target.classList.remove('ripple');
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
.clickable:hover {
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
