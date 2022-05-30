<template>
  <q-layout view="lHr lpr fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            name="fa-brands fa-twitter"
            size="lg"
            color="primary"
            class="q-pa-md lt-md absolute-center"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="280"
    >
      <q-icon
        name="fa-brands fa-twitter"
        size="md"
        color="primary"
        class="q-pa-md"
      />

      <q-list>
        <q-item clickable v-ripple to="/" exact class="radius">
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6">Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about" exact class="radius">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-hashtag" size="sm" />
          </q-item-section>

          <q-item-section class="text-h6">Explore</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact class="radius">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-people-group" size="sm" />
          </q-item-section>

          <q-item-section class="text-h6">Communities</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact class="radius">
          <q-item-section avatar>
            <q-icon name="notifications" size="sm" />
          </q-item-section>

          <q-item-section class="text-h6">Notifications</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact class="radius">
          <q-item-section avatar>
            <q-icon name="mail_outline" size="sm" />
          </q-item-section>

          <q-item-section class="text-h6">Messages</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact class="radius">
          <q-item-section avatar>
            <q-icon name="bookmark_border" size="sm" />
          </q-item-section>

          <q-item-section class="text-h6">Bookmarks</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact class="radius">
          <q-item-section avatar>
            <q-icon name="person" size="sm" />
          </q-item-section>

          <q-item-section class="text-h6">Profile</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact class="radius">
          <q-item-section avatar>
            <q-icon name="more_horiz" size="sm" />
          </q-item-section>

          <q-item-section class="text-h6">More</q-item-section>
        </q-item>

        <div>
          <q-btn
            unelevated
            style="width: 80%"
            size="1.2rem"
            rounded
            color="primary"
            label="Tweet"
            no-caps
          />
        </div>

        <q-item
          clickable
          v-ripple
          exact
          style="width: 90%"
          class="radius absolute-bottom"
        >
          <q-item-section avatar>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section class="text-subtitle2">
            <strong>Ikupolati</strong>
            <div class="text-grey">@Billy</div>
          </q-item-section>

          <q-item-section avatar>
            <q-icon name="more_horiz" size="sm" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input
        color="teal"
        class="q-ma-md"
        outlined
        rounded
        placeholder="Search twitter"
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list separator padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-bold">Single line item</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-bold">Single line item</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-bold">Single line item</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
