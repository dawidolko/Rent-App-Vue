<template>
  <section class="projects">
    <div class="container compact">
      <h3>Our Projects</h3>
      <div class="tabs">
        <div class="checkboxes">
          <input type="radio" id="tabs-all" value="all" v-model="tab" />
          <label for="tabs-all">All</label>
          <input type="radio" id="tabs-Rzeszow" value="Rzeszow" v-model="tab" />
          <label for="tabs-Rzeszow">Rzeszow</label>
          <input type="radio" id="tabs-mo" value="MO" v-model="tab" />
          <label for="tabs-mo">Rzeszow Region</label>
        </div>
        <div class="thumbler">
          <span>Grid</span>
          <label class="thumbler-switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <span>Map</span>
        </div>
      </div>
      <div class="list-projects">
        <ProjectCard
          image="./images/1.webp"
          title="Dawid Olko"
          metro="Olko"
          metroColor="red"
          time="12"
          flats="177"
          price="5.1"
        />
        <ProjectCard
          image="./images/6.webp"
          title="Dawid Olko"
          metro="D. Olko"
          metroColor="yellow"
          time="12"
          flats="177"
          price="5.1"
        />
        <ProjectCard
          image="./images/3.webp"
          title="Dawid Olko"
          metro="D. Olko"
          metroColor="cornflowerblue"
          time="12"
          flats="177"
          price="5.1"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "./subforms/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      tab: "all",
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 64px 0;
  position: relative;
  top: -64px;
  background-color: var(--color-background-soft);
}
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.checkboxes > input[type="radio"] + label {
  height: 40px;
  width: fit-content;
  padding: 10px 8px;
  background-color: var(--color-background);
  border-radius: 6px;
}
.list-projects {
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-top: 32px;
}
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.thumbler {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
.thumbler-switch {
  position: relative;
  display: flex;
  width: 50px;
  height: 24px;
}
.thumbler-switch input {
  display: none;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.thumbler-switch > input:checked + .slider {
  background-color: var(--vt-c-green);
}
.thumbler-switch > input:focus + .slider {
  box-shadow: 0 0 1px var(--vt-c-green);
}
.thumbler-switch > input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
@media (max-width: 960px) {
  .list-projects {
    flex-wrap: wrap;
  }
}
@media (max-width: 640px) {
  .thumbler {
    display: none;
  }
}
</style>
