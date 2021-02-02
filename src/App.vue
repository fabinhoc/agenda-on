<template>
  <v-app>
    <v-app-bar clipped-left app color="#EB5E28" dark>
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title>
        <v-img src="./assets/logo.png" width="100"></v-img>
      </v-toolbar-title>
      <v-spacer />
      <v-icon>mdi-account</v-icon>
    </v-app-bar>

    <v-navigation-drawer clipped app dark v-model="drawer" :mini-variant.sync="mini" permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            AGENDA ON
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    drawer: false,
    items: [
      { title: 'HOME', icon: 'mdi-view-dashboard' },
      { title: 'AGENDAMENTOS', icon: 'mdi-forum' },
    ],
    links: ['Home', 'Contacts', 'Settings'],
    mini: true
  })
};
</script>
