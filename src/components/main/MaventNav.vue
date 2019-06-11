<template>
    <b-navbar fixed="top" class="navbar navbar-expand-lg navbar-light bg-light" id="nav-padding">
        <div class="container-fluid">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">
                <router-link :to="{name:'main'}" v-scroll-to="{el:'#nav-padding'}" ><img class="logoImg"
                                                                            src="./../../assets/MAVent.png">
                </router-link>
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <ul class="navbar-nav mx-auto ul-link">
                    <li class="nav-item">
                        <router-link :to="{name:'item_all', hash:'#itemAll'}" class="nav-link">{{ nav.product }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'our_objects', hash:'#ourObjects'}" class="nav-link">{{ nav.object }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'main', hash:'#callback'}" class="nav-link" v-scroll-to="{el:'#callback',offset: -90}">{{ nav.feedback }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'main', hash:'#contact'}" class="nav-link" v-scroll-to="{el:'#contact',offset: -80}">{{ nav.contact }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'main', hash:'#news'}" class="nav-link" v-scroll-to="{el:'#news',offset: -100}">{{ nav.news }}</router-link>
                    </li>
                </ul>


                <ul class="navbar-nav ul-language">
                    <li class="nav-item" v-if="lng=='en'">
                        <a class="nav-link" href="#" @click.prevent="changeLng('ru')">
                            <img src="./../../assets/Layer 18.png">
                        </a>
                    </li>
                    <li class="nav-item" v-if="lng=='ru'">
                        <a class="nav-link" href="#" @click.prevent="changeLng('en')">
                            <img src="./../../assets/lng_en.png">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <img src="./../../assets/vk.png">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <img src="./../../assets/fb.png">
                        </a>
                    </li>
                </ul>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'MaventNav',
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                nav: 'getNavbar',
                lng: 'getLng',
            }),
        },
        methods: {
            ...mapActions(['loadData', 'setLng']),
            ...mapActions('mainElements', ['loadMainElements', 'loadMainElementsLng']),
            changeLng(lng) {
                this.setLng(lng);
                this.loadMainElementsLng(lng);
                emitter.$emit("change_lng", lng);
            }
        },
        mounted() {
            this.loadData();
            this.loadMainElements();
        }
    }
</script>

<style>
    .logoImg {
        margin: -7px 0 0 15px;
    }

    #nav-padding {
        padding: 18px 0;
    }

    .ul-link li {
        font-size: 16px;
        font-weight: 600;
        font-family: "Blender Pro";
        text-transform: uppercase;
        margin-right: 13px;
    }

    .ul-link li a {
        color: #302d4e !important;
        margin: 0 15px 0 -15px;
    }

    .ul-language {
        margin-right: -7px;
    }

    .ul-language li a {
        margin-left: -8px;
    }

</style>