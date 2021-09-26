<template>
  <form action="">
    <input type="text" />
    <input
      class="search"
      type="search"
      :placeholder="placeholder"
      @click="onLoad"
      @keydown.prevent.enter="onSubmit"
      @keydown.prevent.up="onPrev"
      @keydown.prevent.down="onNext"
    />
    <div class="dropdown">
      <a
        href="#"
        class="item"
        :class="active"
        v-for="(v, i) in this.list"
        :key="i.id"
      >
        {{ getCityName(v) }}
      </a>
    </div>
  </form>
</template>

<script>
import * as data from "../../api/data.json";

export default {
  name: "one",
  data() {
    return {
      placeholder: "여기에 엔터를 치세요",
      active: ""
    };
  },
  methods: {
    onLoad() {
      this.list = data;
    },
    onSubmit(input) {},
    onPrev() {},
    onNext() {},
    getCityName(item) {
      return `${item.name}`;
    }
  }
};
</script>
