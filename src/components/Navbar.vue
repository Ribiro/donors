<template>
    <nav id="app">
<!--        <div id="test2">-->
            <v-navigation-drawer v-model="drawer" app class="black" id="test2">
                <v-layout column align-center="">
                    <v-flex class="mt-5">
                        <v-avatar size="100">
                            <img src="/house2.jpeg">
                        </v-avatar>
                        <p class="white--text subheading mt-1">Dosai</p>
                    </v-flex>
                </v-layout>
                <v-list >
                    <v-list-item
                    v-for="item in home"
                    :key="item.icon"
                    to="#"
                    :title="item.title"
                    >
                        <v-btn text :to="{ name:'home' }">
                            <span class="white--text">{{ item.text }}</span>
                        </v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        color='red'
                                        v-on="on"
                                        text
                                ><span class="white--text">features</span>
                                </v-btn>
                            </template>
                            <v-card>
                                <v-list dense>
                                    <v-subheader>Features</v-subheader>
                                    <v-divider></v-divider>
                                    <v-list
                                            v-for="notification in notifications"
                                            :key="`notification-key-${notification.id}`"
                                    >
                                        <v-btn text :to="notification.route">
                                            {{ notification.title }}
                                        </v-btn>
                                    </v-list>
                                </v-list>
                            </v-card>
                        </v-menu>
                    </v-list-item>

                    <v-list-item
                            v-for="item in nav"
                            :key="item.icon"
                            to="#"
                            :title="item.title"
                    >
                        <v-btn text :to="item.route">
                            <span class="white--text">{{ item.text }}</span>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
<!--        </div>-->

        <v-app-bar app color="red">
<!--            <div id="test1">-->
                <v-app-bar-nav-icon id="test1" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
<!--            </div>-->
            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">do</span>
                <span>sai</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text icon>
                    <span class="white--text"><v-icon>mdi-magnify</v-icon></span>
                </v-btn>
            </v-toolbar-items>
<!--            <div id="hide_nav_content">-->
                <v-toolbar-items
                        id="hide_nav_content"
                        v-for="item in home"
                        :key="item.icon"
                        to="#"
                        :title="item.title"
                >
                    <v-btn text :to="{ name:'home' }">
                        <span class="white--text">{{ item.text }}</span>
                    </v-btn>
                </v-toolbar-items>
<!--            </div>-->
                <v-toolbar-items id="test4">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    color='red'
                                    v-on="on"
                                    text
                            ><span class="white--text">features</span>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-list dense>
                                <v-subheader>Features</v-subheader>
                                <v-divider></v-divider>
                                <v-list
                                        v-for="notification in notifications"
                                        :key="`notification-key-${notification.id}`"
                                >
                                    <v-btn text :to="notification.route">
                                        {{ notification.title }}
                                    </v-btn>
                                </v-list>
                            </v-list>
                        </v-card>
                    </v-menu>
                </v-toolbar-items>

                <v-toolbar-items
                        id="test5"
                        v-for="item in nav"
                        :key="item.icon"
                        to="#"
                        :title="item.title"
                >
                    <v-btn text :to="item.route">
                        <span class="white--text">{{ item.text }}</span>
                    </v-btn>
                </v-toolbar-items>
<!--            <v-spacer></v-spacer>-->
            <v-btn color="grey lighten-3" v-if="!loggedIn" rounded :to="{ name:'login' }">Login</v-btn>

            <v-btn text color="grey darken-1" small v-if="loggedIn" @click="logout" rounded :to="{ name:'landing' }">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

    </nav>
</template>

<script>
    export default {
        name: 'nav-bar',
        data: () => ({
            drawer: false,
            home: [{ icon: 'home', text: 'Home', title: 'Back to Home page', active: false}],
            notifications: [
                // { id: 1, title: 'services', active: false, route: '/services'},
                { id: 2, title: 'news', active: false, route: '/news'},
                { id: 3, title: 'campaigns', active: false, route: '/campaigns'},
            ],
            nav: [
                { icon: 'assignment_turned_in', text: 'About Us', title: 'Know a little about us', active: false, route:'/about us'},
                { icon: 'email', text: 'Contacts', title: 'Our Contact info', active: false, route:'/contacts'}
            ],
        })
    }
</script>
<style>
    @media (min-width: 1026px) {
        #test1 {
            display: none;
        }
    }
    @media (min-width: 1026px) {
        #test2 {
            display: none;
        }
    }
    @media (max-width: 1026px) {
        #test4 {
            display: none;
        }
    }
    @media (max-width: 1026px) {
        #test5 {
            display: none;
        }
    }
    @media (max-width: 1026px) {
        #hide_nav_content {
            display: none;
        }
    }
</style>