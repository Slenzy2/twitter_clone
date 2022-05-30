<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute" style="width: 100%; height: 100%">
      <div class="column">
        <div class="q-px-lg q-pt-lg q-pb-md">
          <q-input
            bottom-slots
            v-model="newTweet"
            placeholder="What's Happening"
            counter
            maxlength="285"
            dense
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="row q-pl-xl q-pr-lg justify-between">
          <div class="row">
            <q-btn
              icon="image"
              color="primary"
              class="q-mx-xs"
              size="0.8rem"
              flat
              round
            />
            <q-btn
              icon="gif"
              color="primary"
              class="q-mx-xs"
              size="0.8rem"
              flat
              round
            />
            <q-btn
              icon="poll"
              color="primary"
              class="q-mx-xs"
              size="0.8rem"
              flat
              round
            />
            <q-btn
              icon="emoji_emotions"
              color="primary"
              class="q-mx-xs"
              size="0.8rem"
              flat
              round
            />
            <q-btn
              icon="schedule"
              color="primary"
              class="q-mx-xs"
              size="0.8rem"
              flat
              round
            />
          </div>
          <div>
            <q-btn
              :disable="!newTweet"
              unelevated
              rounded
              color="primary"
              @click="addTweet()"
              label="Tweet"
              no-caps
            />
          </div>
        </div>
      </div>

      <q-separator bordered size="0.5rem" class="q-my-sm" color="grey-2" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item v-for="tweet in tweets" :key="tweet.date" class="tweet">
            <q-item-section top avatar>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong class="text-bold">Ikupolati</strong>
                <span class="q-mx-sm text-grey">@Billy</span>.
                <br class="lt-md" />
                <span class="text-body2 text-grey"
                  >{{ relativeDate(tweet.date) }}
                </span>
              </q-item-label>
              <q-item-label class="tweet-content">
                {{ tweet.content }}
              </q-item-label>
              <div class="row justify-between q-mt-md">
                <div class="row">
                  <q-btn
                    icon="fa-regular fa-comment"
                    color=""
                    class=""
                    size="0.7rem"
                    flat
                    round
                  />
                  <div class="q-my-auto">10</div>
                </div>
                <div class="row">
                  <q-btn
                    icon="fa-solid fa-retweet"
                    color=""
                    class=""
                    size="0.7rem"
                    flat
                    round
                  />
                  <div class="q-my-auto">10</div>
                </div>
                <div class="row">
                  <q-btn
                    icon="favorite_border"
                    color=""
                    class=""
                    size="0.7rem"
                    flat
                    round
                  />
                  <div class="q-my-auto">10</div>
                </div>

                <q-btn
                  round
                  flat
                  icon="delete"
                  @click="deleteTweet(tweet)"
                  size="md"
                  :ripple="false"
                />
              </div>
            </q-item-section>

            <!-- <q-item-section side top>
            <q-btn
              round
              flat
              icon="delete"
              @click="deleteTweet(tweet)"
              size="md"
              :ripple="false"
          /></q-item-section> -->
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from "boot/firebase";
import { defineComponent } from "vue";
import { ref } from "vue";
import { formatDistance } from "date-fns";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default defineComponent({
  name: "Home",
  data() {
    return {
      newTweet: ref(""),
      tweets: [
        // {
        //   content:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nisi consectetur expedita unde nulla aspernatur accusantium illum eum aut autem nemo quidem ipsa doloremque quibusdam, alias officia placeat soluta incidunt!",
        //   date: 1653705840973,
        // },
        // {
        //   content:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nisi consectetur expedita unde nulla aspernatur accusantium illum eum aut autem nemo quidem ipsa doloremque quibusdam, alias officia placeat soluta incidunt!",
        //   date: 1653705887593,
        // },
      ],
    };
  },
  methods: {
    relativeDate(value) {
      return formatDistance(value, new Date(), { addSuffix: true });
    },
    addTweet() {
      let tweet = {
        content: this.newTweet,
        date: Date.now(),
      };
      this.tweets.unshift(tweet);
      this.newTweet = "";
    },
    deleteTweet(tweet) {
      console.log(tweet);
      let dateToDelete = tweet.date;
      console.log(dateToDelete);
      let index = this.tweets.findIndex((tweet) => tweet.date === dateToDelete);
      this.tweets.splice(index, 1);
      console.log(index);
    },
  },
  mounted() {
    // db.collection("tweets").onSnapshot((snapshot) => {
    //   snapshot.docChanges().forEach((change) => {
    //     if (change.type === "added") {
    //       console.log("New tweet: ", change.doc.data());
    //     }
    //     if (change.type === "modified") {
    //       console.log("Modified tweet: ", change.doc.data());
    //     }
    //     if (change.type === "removed") {
    //       console.log("Removed tweet: ", change.doc.data());
    //     }
    //   });
    // });
    console.log(db.firebase);
  },
});
</script>

<style scoped>
.tweet-content {
  white-space: pre-line;
}
.tweet:not(:first-child) {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
