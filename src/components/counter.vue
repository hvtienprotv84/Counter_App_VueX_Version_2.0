<template>
  <main class="main">
    <div class="container">
      <div class="container-title">
        <h1 class="title">Counter App - Bộ Đếm Tăng Giảm - VueX - Version 2.0</h1>
        <!-- <p class="subtitle">
          This is a simple tool for counting numbers.
        </p> -->
      </div>
      <div class="img__container__grid">
        <div class="counter-wrapper grid-1">
          <h2 class="counter">{{ count }}</h2>
          <p class="error" v-if="error">{{ error }}</p>
        </div>
        <!-- <div class="img-container grid-2">
          <button @click="increment()" class="img-btn">
            <img src="../assets/img/plus.png" alt="Plus Image" class="img" />
          </button>
        </div>
        <div class="img-container grid-3">
          <button @click="decrement()" class="img-btn">
            <img src="../assets/img/minus_orange.png" alt="Minus Image" class="img" />
          </button>
        </div> -->
        <div class="button-container">
          <button class="button-3d" @click="decrement()">
            <div class="button-top">
              <span class="material-icons">–</span>
            </div>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
          </button>

          <button class="button-3d"  @click="reset()">
            <div class="button-top">
              <span class="material-icons">⟳</span>
            </div>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
          </button>

          <button class="button-3d" @click="increment()">
            <div class="button-top">
              <span class="material-icons">+</span>
            </div>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
          </button>
        </div>

        <!-- <div class="img-container grid-4">
          <button @click="reset()" class="img-btn">
            <img src="../assets/img/reset.png" alt="Reset Image" class="img" />
          </button>
        </div> -->
        <div class="input-container grid-5">
          <input v-model="value" type="number" class="input" placeholder="Vd: Nhập 10 thì sẽ tăng thêm 10" />
          <button @click="setValueAction(Number(value))" class="input-btn">Cộng Thêm</button>
        </div>
      </div>
      <p class="attribution">
        &copy; 2024 Mọi Bản Quyền Thuộc Về <a href="/" target="_blank" class="attribution-link"><span
            class="attribution-span"> Huỳnh Vĩnh Tiến</span></a>
      </p>
    </div>

    <!-- TEMPLATE FOR THE COMPOSABLE COMPONENT -->
    <!-- <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.decrement()">Decrement</button>
    <button @click="counter.reset()">Reset</button>
    <input v-model="value" type="number" />
    <button @click="counter.setValue(Number(value))">Set Value</button> -->
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Counter",
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapGetters(["count", "error"]),
  },
  methods: {
    ...mapActions(["increment", "decrement", "reset", "setValue", "setError", "clearError"]),
    setValueAction() {
      const value = Number(this.value);
      if (!isNaN(value) && value > 0) {
        this.clearError();
        if (this.count > 0) {
          this.setValue(value + this.count);
        } else {
          this.setValue(value);
        }
        this.value = "";
      } else {
        this.setError("Vui lòng nhập số lớn hơn 0");
      }
    }
  },
}
</script>

<style lang="scss">
@import "../assets/sass-style/variables.scss";

@media (max-width: 768px) {
  h1{
  font-size: 10px;
  }
}

main {
  height: 100vh;
  width: 100vw;
  color: $color-white;
  font-family: $font-family;
  font-weight: $font-weight-normal;

  .container {
    background-color: $color-bg-dark;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 0;

    .container-title {
      text-align: center;
      margin-bottom: 5px;
      line-height: 1.4;

      .title {
        color: $color-white;
        font-size: 40px;
        font-weight: $font-weight-medium;
        font-family: $font-family-alt-2;
        text-transform: uppercase;
      }

      .subtitle {
        color: $color-white-soft;
        font-size: $font-size-xs;
        font-family: $font-family-alt;
      }
    }

    .img__container__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 70px repeat(2, 1fr);
      gap: 20px 0;
      align-items: center;
      justify-items: center;
      background-color: $color-bg;
      border-radius: 10px;
      padding: 15px 0;
      width: 100%;
      max-width: 300px;
      max-height: 400px;

      .grid-1 {
        grid-column: 1 / 4;
        grid-row: 1 / 2;
      }

      .grid-2 {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
      }

      .grid-3 {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }

      .grid-4 {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }

      .grid-5 {
        grid-column: 1 / 4;
        grid-row: 4 / 5;
      }

      .counter-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;

        .counter {
          color: $color-black;
          font-size: $font-size-xl;
          font-weight: $font-weight-medium;
          font-family: $font-family-alt;
          text-align: center;
          background-color: $color-white-soft;
          border-radius: 5px;
          width: 85%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .error {
          color: $color-red;
          font-size: $font-size-sm;
          font-family: $font-family-alt;
          text-align: center;
        }
      }

      .img-container {
        display: flex;
        justify-content: center;
        align-items: center;

        .img-btn {
          background-color: transparent;
          border: none;
          cursor: pointer;
          outline: none;
          transition: transform 0.2s;

          &:active {
            transform: scale(0.9);
          }

          .img {
            width: 50px;
            height: 50px;
          }
        }
      }

      .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .input {
          width: 100%;
          height: 30px;
          border: none;
          border-radius: 5px;
          font-size: $font-size-md;
          font-weight: $font-weight-medium;
          font-family: $font-family-alt-2;
          color: $color-bg-dark;
          background-color: $color-white;
          text-align: center;

          &:focus {
            border: 1px solid $color-white;
            outline: none;
          }

          &::placeholder {
            color: $color-black;
            font-family: $font-family;
            font-weight: $font-weight-bold;
            font-size: $font-size-xs;
          }

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          &[type=number] {
            -moz-appearance: textfield;
          }
        }

        .input-btn {
          border: none;
          border-radius: 5px;
          background-color: $color-white;
          color: $color-black;
          padding: 5px 10px;
          cursor: pointer;
          text-transform: uppercase;
          font-size: $font-size-sm;
          font-family: $font-family-alt-2;
          transition: all 0.3s ease-in-out;
          border: 1px solid $color-white;
          font-weight: $font-weight-bold;

          &:hover {
            background-color: $color-bg;
            color: $color-white;
          }

          &:active {
            background-color: $color-bg-dark;
            color: $color-white;
          }

          &:focus {
            outline: none;
          }
        }
      }
    }

    .attribution {
      font-size: $font-size-sm;
      font-family: $font-family-alt;
      font-weight: $font-weight-medium;
      font-style: italic;
      color: $color-white-soft;
      margin-top: 20px;

      .attribution-link {
        color: $color-white-soft;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          background-color: unset;
        }

        .attribution-span {
          color: $color-red;
          transition: all 0.3s ease-in-out;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .button-container {
  display: flex;
  justify-content: center;
  margin: 20px;
  margin-left: 30px;
}

.button-3d {
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  border-width: 0;
  padding: 0 8px;
  min-width: 4em;
  min-height: 4em;
  box-sizing: border-box;
  background: transparent;
  font: inherit;
  cursor: pointer;
  margin: 10px;
  border-radius: 20px;
}

.button-top {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding: 8px 16px;
  transform: translateY(0);
  color: #fff;
  background-image: linear-gradient(145deg, #6a11cb, #2575fc);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: transform 0.3s, border-radius 0.3s, background 10s;
}

.button-3d:active .button-top {
  border-radius: 10px 10px 8px 8px / 8px;
  transform: translateY(2px);
  background-image: linear-gradient(145deg, #2575fc, #6a11cb);
}

.button-bottom {
  position: absolute;
  z-index: 1;
  bottom: 4px;
  left: 4px;
  border-radius: 20px;
  padding-top: 6px;
  width: calc(100% - 8px);
  height: calc(100% - 10px);
  background-image: linear-gradient(145deg, #2575fc, #6a11cb);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
  transition: border-radius 0.2s, padding-top 0.2s;
}

.button-base {
  position: absolute;
  z-index: 0;
  top: 4px;
  left: 0;
  border-radius: 20px;
  width: 100%;
  height: calc(100% - 4px);
  background-color: rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 0.75),
    inset 0 2px 2px rgba(0, 0, 0, 0.25);
  transition: border-radius 0.2s, padding-top 0.2s;
}

.button-3d:active .button-bottom {
  border-radius: 10px 10px 8px 8px / 8px;
  padding-top: 0;
}

.button-3d:active .button-base {
  border-radius: 10px 10px 8px 8px / 8px;
}
}

</style>