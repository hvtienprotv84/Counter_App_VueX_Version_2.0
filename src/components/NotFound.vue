<template>
  <div class="error-wrapper">
    <div class="error-img__container">
      <img src="../assets/img/404-error.png" alt="Error Image" class="error-img" />
    </div>
    <p class="error-msg">{{ msg }}</p>
    <router-link to="/" tag="button" class="back">Go to Home</router-link>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "NotFound",
  data() {
    return {
      msg: "The page you are looking for does not exist!!!",
    };
  },
  mounted() {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/sass-style/variables.scss";

.error-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: $color-bg;

  .error-img__container {
    width: 100%;
    max-width: 300px;
    height: 100%;
    max-height: 300px;
    background-color: $color-white-soft;
    border-radius: 10px;

    .error-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .error-msg {
    margin-top: 10px;
    font-family: $font-family-alt-2;
    font-size: $font-size-md;
    font-weight: $font-weight-medium;
    color: $color-white-soft;
    font-style: italic;
  }

  .back {
    margin-top: 20px;
    padding: 5px 10px;
    background-color: $color-white-soft;
    border: none;
    border-radius: 50px;
    color: $color-grey-light;
    font-family: $font-family-alt;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    cursor: pointer;
    text-transform: lowercase;
    transition: all 0.3s ease-in-out;
    border: 1px solid $color-white;

    &:hover {
      background-color: $color-grey-light;
      color: $color-white;
    }

    &:active {
      background-color: $color-white;
      color: $color-grey-light;
    }
  }
}
</style>